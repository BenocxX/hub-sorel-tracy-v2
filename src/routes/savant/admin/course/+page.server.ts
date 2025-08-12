import { createCourseSchema, deleteCourseSchema } from '$lib/common/schemas/course-schemas.js';
import { db } from '$lib/server/prisma/index.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async (event) => {
  const courses = await db.course.findMany({
    include: { schoolSession: true },
    orderBy: [{ schoolSession: { year: 'asc' } }, { name: 'asc' }],
  });
  const sessions = await db.schoolSession.findMany();

  return {
    courses,
    sessions,
    createCourseForm: await superValidate(zod(createCourseSchema)),
    deleteCourseForm: await superValidate(zod(deleteCourseSchema)),
  };
};

export const actions = {
  createCourse: async (event) => {
    const form = await superValidate(event, zod(createCourseSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    await db.course.create({
      data: {
        name: form.data.name,
        abbreviation: form.data.abbreviation,
        icon: form.data.icon,
        schoolSession: {
          connect: { id: +form.data.sessionId },
        },
      },
    });

    return { form };
  },
  deleteCourse: async (event) => {
    const form = await superValidate(event, zod(deleteCourseSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    await db.course.delete({ where: { id: form.data.id } });

    return { form };
  },
};
