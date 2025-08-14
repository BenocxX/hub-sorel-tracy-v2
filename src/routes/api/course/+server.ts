import { db } from '$lib/server/prisma/index.js';
import { json } from '@sveltejs/kit';

export const GET = async (event) => {
  const courses = await db.course.findMany();

  return json(courses);
};
