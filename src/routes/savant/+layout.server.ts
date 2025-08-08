import { db } from '$lib/server/prisma/index.js';

export const load = async (event) => {
  const user = event.locals.user;

  const courses = await db.course.findMany({
    where: {
      students: user?.role === 'Student' ? { some: { id: user?.id } } : undefined,
      teachers:
        user?.role === 'Teacher' || user?.role === 'Admin' ? { some: { id: user?.id } } : undefined,
    },
    include: {
      presentations: true,
    },
  });

  return {
    user,
    courses,
  };
};
