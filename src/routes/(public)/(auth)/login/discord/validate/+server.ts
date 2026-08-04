import { resolve } from '$app/paths';
import { RedirectToCookie } from '$lib/server/cookies/redirect-to-cookie';
import { AuthService } from '$lib/server/services/auth-service.js';
import { DiscordAuthService, type DiscordUser } from '$lib/server/services/discord-auth-service.js';
import { redirect, type RequestEvent } from '@sveltejs/kit';
import type { OAuth2Tokens } from 'arctic';

export const GET = async (event) => {
  const discordAuthService = new DiscordAuthService();

  const code = discordAuthService.getCode(event.url, event.cookies);
  if (!code) {
    return redirect(302, resolve('/login'));
  }

  const tokens = await discordAuthService.askDiscordForAccessToken(code);
  if (!tokens) {
    return redirect(302, resolve('/login'));
  }

  const discordUser = await discordAuthService.getDiscordUser(tokens.accessToken());

  // If the browser comes back here with an active session, this is a "link Discord to my
  // existing account" flow started from /savant/settings, not a login/signup.
  if (event.locals.user) {
    return await linkDiscordAccount(event, discordUser);
  }

  await authenticate(event, discordUser, tokens);

  return redirect(302, RedirectToCookie.get(event.cookies, resolve('/savant')));
};

async function authenticate(event: RequestEvent, discordUser: DiscordUser, tokens: OAuth2Tokens) {
  const authService = new AuthService();
  let user = await authService.getUserByDiscordId(discordUser.id);

  if (!user) {
    user = await authService.signupWithDiscord(discordUser);
  }

  await authService.createSession(event, user, tokens);
}

async function linkDiscordAccount(event: RequestEvent, discordUser: DiscordUser) {
  const authService = new AuthService();
  const existingOwner = await authService.getUserByDiscordId(discordUser.id);

  if (existingOwner && existingOwner.id !== event.locals.user!.id) {
    return redirect(302, `${resolve('/savant/settings')}?discordError=already-linked`);
  }

  const discordAuthService = new DiscordAuthService();
  await discordAuthService.updateLocalDiscordUserData(discordUser, event.locals.user!);

  return redirect(302, resolve('/savant/settings'));
}
