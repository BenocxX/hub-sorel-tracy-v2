import { roleSchema } from '$lib/common/schemas/prisma-schema.js';
import { db } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const load = async ({ url }) => {
  const result = roleSchema.safeParse(url.searchParams.get('role'));

  if (!result.success) {
    return error(404, 'Role not found');
  }

  const users = await db.user.findMany({
    where: {
      role: result.data,
    },
  });

  return { users };
};
