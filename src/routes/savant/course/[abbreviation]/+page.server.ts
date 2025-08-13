import { db } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const load = async (event) => {
  const course = await db.course.findFirst({
    where: { abbreviation: event.params.abbreviation },
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
