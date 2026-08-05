import { resolve } from '$app/paths';
import { makeBreadcrumbs } from '$lib/client/components/structure/breadcrumb/index.js';
import {
  createCommentSchema,
  deleteCommentSchema,
  resolveCommentSchema,
} from '$lib/common/schemas/comment-schemas.js';
import { db } from '$lib/server/prisma/index.js';
import {
  notifyAuthorOfResolution,
  notifyTeachersOfNewQuestion,
} from '$lib/server/services/notification-service.js';
import { fail, redirect } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

async function isTeacherOfCourse(userId: string, courseId: number) {
  const course = await db.course.findFirst({
    where: { id: courseId, teachers: { some: { id: userId } } },
  });
  return course !== null;
}

export const load = async ({ params, locals }) => {
  const presentation = await db.presentation.findFirst({
    where: { AND: [{ id: Number(params.presentationId) }, { courseId: Number(params.courseId) }] },
    include: { course: { select: { name: true } } },
  });

  if (!presentation) {
    throw redirect(
      303,
      resolve('/savant/courses/[courseId=number]', { courseId: params.courseId })
    );
  }

  if (presentation.url) {
    throw redirect(303, presentation.url);
  }

  // hooks.server.ts's isUserPartOfCourse guard already guarantees locals.user is a student or
  // teacher of this course before this load runs.
  const isTeacher = await isTeacherOfCourse(locals.user!.id, presentation.courseId);

  const rawComments = await db.comment.findMany({
    where: { presentationId: presentation.id },
    include: { author: { include: { discordUser: true, teacher: { select: { id: true } } } } },
    orderBy: { createdAt: 'asc' },
  });

  // Flatten "does this author have a Teacher profile" into its own field instead of exposing
  // the raw relation — since only course teachers/students can reach this route at all (guarded
  // by hooks.server.ts), any teacher-profile author here is necessarily a teacher of this course.
  const comments = rawComments.map(({ author: { teacher, ...author }, ...comment }) => ({
    ...comment,
    author,
    isTeacherAuthor: teacher !== null,
  }));

  return {
    breadcrumbs: makeBreadcrumbs(
      {
        label: presentation.course.name,
        href: resolve('/savant/courses/[courseId=number]', { courseId: params.courseId }),
      },
      { label: presentation.title }
    ),
    presentation,
    comments,
    isTeacher,
    createCommentForm: await superValidate(zod(createCommentSchema)),
    deleteCommentForm: await superValidate(zod(deleteCommentSchema)),
    resolveCommentForm: await superValidate(zod(resolveCommentSchema)),
  };
};

export const actions = {
  createComment: async (event) => {
    const form = await superValidate(event, zod(createCommentSchema));
    if (!form.valid) {
      return fail(400, { form });
    }

    const presentation = await db.presentation.findFirst({
      where: { id: Number(event.params.presentationId), courseId: Number(event.params.courseId) },
    });
    if (!presentation) {
      return fail(404, { form });
    }

    const isTeacher = await isTeacherOfCourse(event.locals.user!.id, presentation.courseId);

    // Students can't ask questions on content the teacher hasn't opened up yet; teachers can
    // still post/reply regardless (e.g. to leave a note before unlocking).
    if (presentation.isLocked && !isTeacher) {
      return fail(403, { form });
    }

    if (form.data.parentId !== null) {
      const parent = await db.comment.findFirst({
        where: { id: form.data.parentId, presentationId: presentation.id },
      });
      if (!parent) {
        return fail(400, { form });
      }
      // Keep threading flat: a reply's parent must itself be a top-level comment.
      if (parent.parentId !== null) {
        return fail(400, { form });
      }
    }

    const comment = await db.comment.create({
      data: {
        content: form.data.content,
        slideId: form.data.slideId,
        parentId: form.data.parentId,
        authorId: event.locals.user!.id,
        presentationId: presentation.id,
        courseId: presentation.courseId,
      },
    });

    if (form.data.parentId === null) {
      // Best-effort: a notification failing shouldn't fail the comment that triggered it.
      try {
        await notifyTeachersOfNewQuestion({
          id: comment.id,
          courseId: presentation.courseId,
          authorId: comment.authorId,
        });
      } catch (error) {
        console.error('Failed to notify teachers of new question', error);
      }
    }

    return { form };
  },

  deleteComment: async (event) => {
    const form = await superValidate(event, zod(deleteCommentSchema));
    if (!form.valid) {
      return fail(400, { form });
    }

    const comment = await db.comment.findFirst({
      where: { id: form.data.commentId, presentationId: Number(event.params.presentationId) },
    });
    if (!comment) {
      return fail(404, { form });
    }

    const isAuthor = comment.authorId === event.locals.user!.id;
    const isTeacher = await isTeacherOfCourse(event.locals.user!.id, Number(event.params.courseId));
    if (!isAuthor && !isTeacher) {
      return fail(403, { form });
    }

    // Replies cascade automatically via the self-relation's onDelete: Cascade.
    await db.comment.delete({ where: { id: comment.id } });

    return { form };
  },

  resolveComment: async (event) => {
    const form = await superValidate(event, zod(resolveCommentSchema));
    if (!form.valid) {
      return fail(400, { form });
    }

    const isTeacher = await isTeacherOfCourse(event.locals.user!.id, Number(event.params.courseId));
    if (!isTeacher) {
      return fail(403, { form });
    }

    const comment = await db.comment.findFirst({
      where: { id: form.data.commentId, presentationId: Number(event.params.presentationId) },
    });
    if (!comment) {
      return fail(404, { form });
    }
    // "Answered" only makes sense on the question itself, not on a reply.
    if (comment.parentId !== null) {
      return fail(400, { form });
    }

    await db.comment.update({
      where: { id: comment.id },
      data: { resolved: form.data.resolved },
    });

    // Only the false → true transition is "answered" — toggling it back off, or an already-
    // resolved comment being re-saved as resolved, shouldn't notify again.
    if (!comment.resolved && form.data.resolved) {
      try {
        await notifyAuthorOfResolution(
          { id: comment.id, authorId: comment.authorId },
          event.locals.user!.id
        );
      } catch (error) {
        console.error('Failed to notify author of resolution', error);
      }
    }

    return { form };
  },
};
