import { deleteSessionSchema } from '$lib/common/schemas/school-session-schemas.js';
import { db } from '$lib/server/prisma/index.js';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async (event) => {
  const sessions = await db.schoolSession.findMany();

  return {
    sessions,
    deleteSessionForm: await superValidate(zod(deleteSessionSchema)),
  };
};

export const actions = {
  deleteSession: async (event) => {
    const form = await superValidate(event, zod(deleteSessionSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    await db.schoolSession.delete({ where: { id: form.data.id } });

    return { form };
  },
};
