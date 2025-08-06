import { db } from '$lib/server/prisma/index.js';
import { error } from '@sveltejs/kit';

export const load = async (event) => {
  const id = Number(event.params.id);

  const course = await db.course.findFirst({ where: { id } });
  if (!course) {
    return error(404, 'Not Found');
  }

  return { course };
};
