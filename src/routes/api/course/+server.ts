import { db } from '$lib/server/prisma/index.js';
import { json } from '@sveltejs/kit';

export const GET = async (event) => {
  const courses = await db.course.findMany();

  return json(courses, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    },
  });
};

export const OPTIONS = async () => {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*', // Who can access
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', // Which methods are allowed
      'Access-Control-Allow-Headers': 'Content-Type', // Which headers can be sent
    },
  });
};
