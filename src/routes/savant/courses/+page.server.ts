import type { User } from '$lib/common/types/prisma-types.js';
import { db } from '$lib/server/prisma';

export const load = async (event) => {
  const courses = await getCourses(event.locals.user!);
  const sessions = await db.schoolSession.findMany({
    where: {
      courses: {
        some: {
          id: {
            in: courses.map((course) => course.id),
          },
        },
      },
    },
    orderBy: [{ year: 'asc' }, { season: 'desc' }],
  });

  return { courses, sessions };
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
