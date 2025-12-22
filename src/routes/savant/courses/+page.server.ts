import type { User } from '$lib/common/types/prisma-types.js';
import { db } from '$lib/server/prisma';

export const load = async (event) => {
  const courses = await getCourses(event.locals.user!);
  return { courses };
};

async function getCourses(user: User) {
  const role: 'student' | 'teacher' = user.role === 'Student' ? 'student' : 'teacher';
  const data = await db.user.findFirst({
    where: { id: user.id },
    select: {
      student: { select: { courses: { include: { schoolSession: true } } } },
      teacher: { select: { courses: { include: { schoolSession: true } } } },
    },
  });

  if (!data) {
    return [];
  }

  return data[role]?.courses ?? [];
}
