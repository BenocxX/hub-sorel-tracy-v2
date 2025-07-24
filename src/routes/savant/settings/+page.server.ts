import { fail, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { db } from '$lib/server/prisma';
import { AuthService } from '$lib/server/services/auth-service';
import {
  resetPasswordSchema,
  setPasswordSchema,
  updateNamesSchema,
} from '$lib/client/components/structure/forms/settings/schema';

export const load = async (event) => {
  const { locals } = event;
  const sessions = await db.session.findMany({
    where: { userId: locals.user!.id },
    select: {
      createdAt: true,
      expiresAt: true,
      lastUsed: true,
      publicId: true,
      name: true,
    },
  });

  const sortedSessions = sessions.sort((a, b) => b.lastUsed.getTime() - a.lastUsed.getTime());

  const { passwordHash } = await db.user.findFirstOrThrow({
    where: { id: locals.user!.id },
    omit: { passwordHash: false },
  });

  return {
    updateNamesForm: await superValidate(zod(updateNamesSchema)),
    resetPasswordForm: await superValidate(zod(resetPasswordSchema)),
    setPasswordForm: await superValidate(zod(setPasswordSchema)),
    sessions: sortedSessions,
    currentSessionPublicId: locals.session!.publicId,
    userHasNoPassword: passwordHash === '' || passwordHash === null,
  };
};

export const actions = {
  updateNames: async (event) => {
    const form = await superValidate(event, zod(updateNamesSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    if (form.data.username) {
      const user = await db.user.findFirst({ where: { username: form.data.username } });

      if (user && user.id !== event.locals.user!.id) {
        return setError(form, 'username', "Nom d'utilisateur déjà utilisé");
      }
    }

    await db.user.update({
      where: { id: event.locals.user!.id },
      data: form.data,
    });

    return { form };
  },
  resetPassword: async (event) => {
    const form = await superValidate(event, zod(resetPasswordSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const authService = new AuthService();

    const user = await authService.login({
      username: event.locals.user!.username,
      password: form.data.oldPassword,
    });

    if (!user) {
      return setError(form, 'oldPassword', 'Mot de passe est incorrect.');
    }

    await authService.changePassword(user, form.data.newPassword);

    return { form };
  },
  setPassword: async (event) => {
    const form = await superValidate(event, zod(setPasswordSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const authService = new AuthService();
    await authService.changePassword(event.locals.user!, form.data.password);

    return { form };
  },
  // deleteSession: async (event) => {
  //   const form = await superValidate(event, zod(deleteSessionSchema));

  //   if (!form.valid) {
  //     return fail(400, { form });
  //   }

  //   await db.session.delete({
  //     where: {
  //       publicId: form.data.publicId,
  //       userId: event.locals.user!.id,
  //     },
  //   });

  //   return { form };
  // },
};
