import { roleSchema } from '$lib/common/schemas/prisma-schema.js';
import type { User } from '$lib/common/types/prisma-types.js';
import { db } from '$lib/server/prisma';
import { error } from '@sveltejs/kit';

export const load = async ({ url }) => {
  const result = roleSchema.safeParse(url.searchParams.get('role'));

  if (!result.success) {
    return error(404, 'Role not found');
  }

  let users: User[];

  if (result.data === 'Student') {
    users = await db.user.findMany({
      where: {
        role: 'Student',
      },
    });
  } else if (result.data === 'Teacher') {
    users = await db.user.findMany({
      where: {
        OR: [{ role: 'Teacher' }, { role: 'Admin' }],
      },
    });
  } else {
    users = await db.user.findMany({
      where: {
        role: 'Admin',
      },
    });
  }

  return { users };
};
