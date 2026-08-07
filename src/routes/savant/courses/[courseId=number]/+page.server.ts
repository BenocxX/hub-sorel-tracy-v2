import { sortByChapter } from '$lib/common/tools/chapter';
import { db } from '$lib/server/prisma';
import { error, redirect } from '@sveltejs/kit';

export const load = async (event) => {
  const courseId = Number(event.params.courseId);

  if (event.locals.user?.role !== 'Student') {
    return redirect(302, `/savant/teacher/courses/${courseId}?tab=presentations`);
  }

  const course = await db.course.findFirst({
    where: { id: courseId },
    include: {
      schoolSession: true,
      presentations: true,
    },
  });

  if (!course) {
    return error(404, 'Not Found');
  }

  // Chapter is a dotted string ("6.1", "5.12", ...), so it can no longer sort correctly at the
  // database level (that'd be a plain lexicographic sort) — see chapter.ts.
  return { course: { ...course, presentations: sortByChapter(course.presentations) } };
};
