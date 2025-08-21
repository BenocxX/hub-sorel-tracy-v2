import { db } from '$lib/server/prisma/index.js';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const courses = await db.course.findMany({
    orderBy: {
      name: 'asc',
    },
  });
  return json(courses);
};
