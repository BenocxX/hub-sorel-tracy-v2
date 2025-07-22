import { DiscordAuthService } from '$lib/server/services/discord-auth-service';
import { redirect } from '@sveltejs/kit';

export const GET = ({ cookies }) => {
  const discordAuthService = new DiscordAuthService();
  const state = discordAuthService.generateState();

  const url = discordAuthService.createAuthorizationUrl(state);
  discordAuthService.storeStateInCookie(state, cookies);

  return redirect(302, url);
};
