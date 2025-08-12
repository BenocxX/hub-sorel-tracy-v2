import { db } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const load = async (event) => {
  const id = Number(event.params.id);

  const course = await db.course.findFirst({
    where: { id },
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
