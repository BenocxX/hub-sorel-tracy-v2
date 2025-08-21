import { db } from '$lib/server/prisma/index.js';
import { json } from '@sveltejs/kit';

export const GET = async ({ params }) => {
  const user = await db.user.findFirst({
    where: { role: 'Student', id: params.userId },
    select: {
      id: true,
      username: true,
      firstname: true,
      lastname: true,
      student: {
        select: {
          courses: {
            select: {
              id: true,
              name: true,
              icon: true,
            },
            orderBy: {
              name: 'asc',
            },
          },
        },
      },
    },
  });

  const compactUser = user
    ? {
        id: user.id,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        courses: user.student?.courses,
      }
    : null;

  return json(compactUser);
};
