import { db } from '$lib/server/prisma/index.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ locals }) => {
  const user = locals.user;
  if (user?.role === 'Admin') {
    return;
  }

  const course = await db.course.findFirst({
    where: { name: 'Web 1' },
    include: { students: true, teachers: true },
  });

  if (user?.role === 'Student' && course?.students.some((student) => student.id === user.id)) {
    return;
  }

  if (user?.role === 'Teacher' && course?.teachers.some((teacher) => teacher.id === user.id)) {
    return;
  }

  redirect(307, '/savant');
};
