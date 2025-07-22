import { DiscordAuthService } from '$lib/server/services/discord-auth-service';
import { redirect } from '@sveltejs/kit';
import * as arctic from 'arctic';

export const GET = ({ cookies }) => {
  const discordAuthService = new DiscordAuthService();

  const state = arctic.generateState();

  const url = discordAuthService.createAuthorizationUrl(state);
  discordAuthService.storeStateInCookie(state, cookies);

  return redirect(302, url);
};
