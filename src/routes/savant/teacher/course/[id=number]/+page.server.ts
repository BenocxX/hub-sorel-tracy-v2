import {
  addUserToCourseSchema,
  removeUserFromCourseSchema,
} from '$lib/common/schemas/course-schemas.js';
import { db } from '$lib/server/prisma/index.js';
import { error, fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async (event) => {
  const id = Number(event.params.id);

  const course = await db.course.findFirst({
    where: { id },
    include: {
      schoolSession: true,
      students: { include: { user: true } },
      teachers: { include: { user: true } },
    },
  });

  if (!course) {
    return error(404, 'Not Found');
  }

  const teacherUsers = course.teachers.map((teacher) => teacher.user);
  const studentUsers = course.students.map((student) => student.user);
  const courseUsers = teacherUsers.concat(studentUsers);

  const users = await db.user.findMany({
    orderBy: {
      role: 'desc',
    },
  });

  return {
    course,
    courseUsers,
    users,
    addUserToCourseForm: await superValidate(zod(addUserToCourseSchema)),
    removeUserFromCourse: await superValidate(zod(removeUserFromCourseSchema)),
  };
};

export const actions = {
  addUserToCourse: async (event) => {
    const form = await superValidate(event, zod(addUserToCourseSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const course = await db.course.findFirst({ where: { id: form.data.courseId } });
    const user = await db.user.findFirst({ where: { id: form.data.userId } });
    if (!user || !course) {
      return fail(400, { form });
    }

    await db.course.update({
      where: { id: course.id },
      data: {
        students: user.role === 'Student' ? { connect: { id: user.id } } : undefined,
        teachers: user.role !== 'Student' ? { connect: { id: user.id } } : undefined,
      },
    });

    return { form };
  },
  removeUserFromCourse: async (event) => {
    const form = await superValidate(event, zod(removeUserFromCourseSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const course = await db.course.findFirst({ where: { id: form.data.courseId } });
    const user = await db.user.findFirst({ where: { id: form.data.userId } });
    if (!user || !course) {
      return fail(400, { form });
    }

    await db.course.update({
      where: { id: course.id },
      data: {
        students: user.role === 'Student' ? { disconnect: { id: user.id } } : undefined,
        teachers: user.role !== 'Student' ? { disconnect: { id: user.id } } : undefined,
      },
    });

    return { form };
  },
};
