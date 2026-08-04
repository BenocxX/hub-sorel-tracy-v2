import { fail, message, setError, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { db } from '$lib/server/prisma';
import { AuthService } from '$lib/server/services/auth-service';
import {
  deletePasskeySchema,
  deleteSessionSchema,
  resetPasswordSchema,
  setPasswordSchema,
  unlinkDiscordSchema,
  updateNamesSchema,
} from '$lib/common/schemas/settings-schemas';
import { SessionService } from '$lib/server/services/session-service.js';
import { PasskeyService } from '$lib/server/services/passkey-service';
import { redirect } from '@sveltejs/kit';
import { resolve } from '$app/paths';

export const load = async (event) => {
  const userId = event.locals.user!.id;

  const authService = new AuthService();
  const sessionService = new SessionService();
  const passkeyService = new PasskeyService();
  const sessions = await sessionService.getUserSessionsSortedByLastUsed(userId);
  const passkeys = await passkeyService.getUserPasskeys(userId);

  const updateNamesForm = await superValidate(zod(updateNamesSchema), {
    defaults: {
      username: event.locals.user!.username,
      firstname: event.locals.user!.firstname ?? undefined,
      lastname: event.locals.user!.lastname ?? undefined,
    },
  });

  return {
    updateNamesForm,
    resetPasswordForm: await superValidate(zod(resetPasswordSchema)),
    setPasswordForm: await superValidate(zod(setPasswordSchema)),
    deleteSessionForm: await superValidate(zod(deleteSessionSchema)),
    unlinkDiscordForm: await superValidate(zod(unlinkDiscordSchema)),
    deletePasskeyForm: await superValidate(zod(deletePasskeySchema)),
    userHasPassword: await authService.doesUserHavePassword(userId),
    currentSessionPublicId: event.locals.session!.publicId,
    sessions,
    passkeys,
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
      return setError(form, 'oldPassword', 'Mot de passe incorrect.');
    }

    await authService.changePassword(user, form.data.newPassword);
    await authService.fullLogout(event);

    return redirect(300, resolve('/login'));
  },
  setPassword: async (event) => {
    const form = await superValidate(event, zod(setPasswordSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const authService = new AuthService();
    if (await authService.doesUserHavePassword(event.locals.user!.id)) {
      return fail(400, { form });
    }

    await authService.changePassword(event.locals.user!, form.data.password);
    await authService.fullLogout(event);

    return redirect(300, resolve('/login'));
  },
  deleteSession: async (event) => {
    const form = await superValidate(event, zod(deleteSessionSchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    await db.session.delete({
      where: {
        publicId: form.data.publicId,
        userId: event.locals.user!.id,
      },
    });

    return { form };
  },
  unlinkDiscord: async (event) => {
    const form = await superValidate(event, zod(unlinkDiscordSchema));

    const authService = new AuthService();
    if (!(await authService.doesUserHavePassword(event.locals.user!.id))) {
      return message(
        form,
        "Vous devez d'abord définir un mot de passe pour votre compte avant de délier Discord.",
        { status: 400 }
      );
    }

    const userId = event.locals.user!.id;
    await db.discordUser.deleteMany({ where: { userId } });
    // Otherwise the next session refresh would silently re-link it via the OAuth token.
    await db.oAuthToken.deleteMany({ where: { session: { userId } } });

    return { form };
  },
  deletePasskey: async (event) => {
    const form = await superValidate(event, zod(deletePasskeySchema));

    if (!form.valid) {
      return fail(400, { form });
    }

    const passkeyService = new PasskeyService();
    await passkeyService.deletePasskey(event.locals.user!.id, form.data.id);

    return { form };
  },
};
