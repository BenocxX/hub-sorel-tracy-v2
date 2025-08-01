import { roleSchema } from '$lib/common/schemas/prisma-schema.js';
import { deleteUserSchema } from '$lib/common/schemas/user-schemas.js';
import { db } from '$lib/server/prisma';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async ({ url }) => {
  const users = await getUsersByRole(url.searchParams.get('role'));

  return {
    users,
    deleteUserForm: await superValidate(zod(deleteUserSchema)),
  };
};

export const actions = {
  deleteUser: async (event) => {
    const form = await superValidate(event, zod(deleteUserSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    await db.user.delete({
      where: { id: form.data.id },
    });

    return { form };
  },
};

async function getUsersByRole(role: string | null) {
  if (role === null) {
    return await db.user.findMany();
  }

  const result = roleSchema.safeParse(role);

  if (!result.success) {
    return [];
  }

  if (result.data === 'Student') {
    return await db.user.findMany({ where: { role: 'Student' } });
  } else if (result.data === 'Teacher') {
    return await db.user.findMany({ where: { OR: [{ role: 'Teacher' }, { role: 'Admin' }] } });
  }

  return await db.user.findMany({ where: { role: 'Admin' } });
}
