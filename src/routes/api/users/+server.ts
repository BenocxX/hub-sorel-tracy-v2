import { db } from '$lib/server/prisma/index.js';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const users = await db.user.findMany({
    where: { role: 'Student' },
    select: {
      id: true,
      username: true,
      firstname: true,
      lastname: true,
    },
  });

  return json(users);
};
