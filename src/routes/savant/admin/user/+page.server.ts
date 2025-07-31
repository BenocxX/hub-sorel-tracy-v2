import { roleSchema } from '$lib/common/schemas/prisma-schema.js';
import { db } from '$lib/server/prisma';

export const load = async ({ url }) => {
  const users = await getUsersByRole(url.searchParams.get('role'));

  return { users };
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
