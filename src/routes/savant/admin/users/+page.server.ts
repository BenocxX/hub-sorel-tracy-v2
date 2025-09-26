import { roleSchema } from '$lib/common/schemas/prisma-schema.js';
import { changeRoleSchema, deleteUserSchema } from '$lib/common/schemas/user-schemas.js';
import { db } from '$lib/server/prisma';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';

export const load = async ({ url }) => {
  const users = await getUsersByRole(url.searchParams.get('role'));

  return {
    users,
    changeRoleForm: await superValidate(zod(changeRoleSchema)),
    deleteUserForm: await superValidate(zod(deleteUserSchema)),
  };
};

export const actions = {
  changeRole: async (event) => {
    const form = await superValidate(event, zod(changeRoleSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const { id, role } = form.data;
    const user = await db.user.findFirst({ where: { id } });
    if (!user) {
      return fail(400, { form });
    }

    if (user.role === 'Student') {
      // Is a promotion from student to teacher/admin
      await db.student.delete({ where: { id } });
      await db.teacher.create({
        data: {
          isAdmin: role === 'Admin',
          user: { connect: user },
        },
      });
    } else if (role === 'Student') {
      // Is a demotion from teacher/admin to student
      await db.teacher.delete({ where: { id } });
      await db.student.create({ data: { user: { connect: user } } });
    } else {
      // Is a promotion or demotion from teacher/admin
      await db.teacher.update({
        where: { id },
        data: { isAdmin: role === 'Admin' },
      });
    }

    await db.user.update({ where: { id }, data: { role } });

    return { form };
  },
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
    return await db.user.findMany({ include: { discordUser: true }, orderBy: { username: 'asc' } });
  }

  const result = roleSchema.safeParse(role);

  if (!result.success) {
    return [];
  }

  if (result.data === 'Student') {
    return await db.user.findMany({
      where: { role: 'Student' },
      orderBy: { username: 'asc' },
      include: { discordUser: true },
    });
  } else if (result.data === 'Teacher') {
    return await db.user.findMany({
      where: { OR: [{ role: 'Teacher' }, { role: 'Admin' }] },
      orderBy: { username: 'asc' },
      include: { discordUser: true },
    });
  }

  return await db.user.findMany({
    where: { role: 'Admin' },
    orderBy: { username: 'asc' },
    include: { discordUser: true },
  });
}
