import { db } from '$lib/server/prisma';
import { error, redirect } from '@sveltejs/kit';

export const load = async (event) => {
  const courseId = Number(event.params.courseId);

  if (event.locals.user?.role !== 'Student') {
    return redirect(302, `/savant/teacher/courses/${courseId}?tab=presentations`)
  }

  const course = await db.course.findFirst({
    where: { id: courseId },
    include: {
      schoolSession: true,
      presentations: { orderBy: [{ chapter: 'asc' }, { title: 'asc' }] },
    },
  });

  if (!course) {
    return error(404, 'Not Found');
  }

  return { course };
};
