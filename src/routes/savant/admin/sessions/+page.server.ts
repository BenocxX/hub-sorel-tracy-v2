import {
  createSessionSchema,
  deleteSessionSchema,
  toggleCurrentSessionSchema,
} from '$lib/common/schemas/school-session-schemas.js';
import { db } from '$lib/server/prisma/index.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async (event) => {
  const sessions = await db.schoolSession.findMany({
    orderBy: [{ year: 'asc' }, { season: 'desc' }],
  });

  return {
    sessions,
    createSessionForm: await superValidate(zod(createSessionSchema)),
    deleteSessionForm: await superValidate(zod(deleteSessionSchema)),
    toggleCurrentSessionForm: await superValidate(zod(toggleCurrentSessionSchema)),
  };
};

export const actions = {
  createSession: async (event) => {
    const form = await superValidate(event, zod(createSessionSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    await db.schoolSession.create({
      data: {
        year: +form.data.year,
        season: form.data.season,
      },
    });

    return { form };
  },
  deleteSession: async (event) => {
    const form = await superValidate(event, zod(deleteSessionSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    await db.schoolSession.delete({ where: { id: form.data.id } });

    return { form };
  },
  toggleCurrentSession: async (event) => {
    const form = await superValidate(event, zod(toggleCurrentSessionSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const currentSession = await db.schoolSession.findFirst({ where: { isCurrent: true } });
    if (currentSession) {
      await db.schoolSession.update({
        where: { id: currentSession.id },
        data: { isCurrent: false },
      });
    }

    await db.schoolSession.update({ where: { id: form.data.id }, data: { isCurrent: true } });

    return { form };
  },
};
