import {
  addUserToCourseSchema,
  modifyCourseSchema,
  removeUserFromCourseSchema,
} from '$lib/common/schemas/course-schemas.js';
import {
  createPresentationSchema,
  deletePresentationSchema,
  modifyPresentationSchema,
  togglePresentationLockedSchema,
} from '$lib/common/schemas/presentation-schemas.js';
import { db } from '$lib/server/prisma/index.js';
import { error, fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async (event) => {
  const id = Number(event.params.id);

  const course = await db.course.findFirst({
    where: { id },
    include: {
      schoolSession: true,
      presentations: { orderBy: [{ chapter: 'asc' }, { title: 'asc' }] },
      students: {
        include: { user: true },
        orderBy: [{ user: { firstname: 'asc' } }, { user: { lastname: 'asc' } }],
      },
      teachers: {
        include: { user: true },
        orderBy: [{ user: { firstname: 'asc' } }, { user: { lastname: 'asc' } }],
      },
    },
  });

  if (!course) {
    return error(404, 'Not Found');
  }

  const teacherUsers = course.teachers.map((teacher) => teacher.user);
  const studentUsers = course.students.map((student) => student.user);
  const courseUsers = teacherUsers.concat(studentUsers);

  const users = await db.user.findMany({ orderBy: { role: 'desc' } });

  return {
    course,
    courseUsers,
    users,
    modifyCourseForm: await superValidate(zod(modifyCourseSchema), { defaults: course }),
    addUserToCourseForm: await superValidate(zod(addUserToCourseSchema)),
    removeUserFromCourse: await superValidate(zod(removeUserFromCourseSchema)),
    createPresentation: await superValidate(zod(createPresentationSchema)),
    modifyPresentationForm: await superValidate(zod(modifyPresentationSchema)),
    togglePresentationLockedForm: await superValidate(zod(togglePresentationLockedSchema)),
    deletePresentation: await superValidate(zod(deletePresentationSchema)),
  };
};

export const actions = {
  modifyCourse: async (event) => {
    const form = await superValidate(event, zod(modifyCourseSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    await db.course.update({
      where: { id: Number(event.params.id) },
      data: form.data,
    });

    return { form };
  },
  addUserToCourse: async (event) => {
    const form = await superValidate(event, zod(addUserToCourseSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const user = await db.user.findFirst({ where: { id: form.data.userId } });
    if (!user) {
      return fail(400, { form });
    }

    await db.course.update({
      where: { id: Number(event.params.id) },
      data: {
        students: user.role === 'Student' ? { connect: { id: user.id } } : undefined,
        teachers: user.role !== 'Student' ? { connect: { id: user.id } } : undefined,
      },
    });

    return { form };
  },
  removeUserFromCourse: async (event) => {
    const form = await superValidate(event, zod(removeUserFromCourseSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const user = await db.user.findFirst({ where: { id: form.data.userId } });
    if (!user) {
      return fail(400, { form });
    }

    await db.course.update({
      where: { id: Number(event.params.id) },
      data: {
        students: user.role === 'Student' ? { disconnect: { id: user.id } } : undefined,
        teachers: user.role !== 'Student' ? { disconnect: { id: user.id } } : undefined,
      },
    });

    return { form };
  },
  createPresentation: async (event) => {
    const form = await superValidate(event, zod(createPresentationSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    await db.presentation.create({
      data: {
        ...form.data,
        course: { connect: { id: Number(event.params.id) } },
      },
    });

    return { form };
  },
  modifyPresentation: async (event) => {
    const form = await superValidate(event, zod(modifyPresentationSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    await db.presentation.update({
      where: { id: form.data.id, courseId: Number(event.params.id) },
      data: form.data,
    });

    return { form };
  },
  togglePresentationLocked: async (event) => {
    const form = await superValidate(event, zod(togglePresentationLockedSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    await db.presentation.update({
      where: { id: form.data.id, course: { id: Number(event.params.id) } },
      data: { isLocked: form.data.isLocked },
    });

    return { form };
  },
  deletePresentation: async (event) => {
    const form = await superValidate(event, zod(deletePresentationSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    await db.presentation.delete({ where: { id: form.data.presentationId } });

    return { form };
  },
};
