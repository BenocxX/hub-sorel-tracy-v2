import { db } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const load = async (event) => {
  const course = await db.course.findFirst({
    where: { id: Number(event.params.courseId) },
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
