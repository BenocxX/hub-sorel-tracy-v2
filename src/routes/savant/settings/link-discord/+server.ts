import { resolve } from '$app/paths';
import { DiscordAuthService } from '$lib/server/services/discord-auth-service';
import { redirect } from '@sveltejs/kit';

/**
 * Starts the "link Discord to my existing account" flow from the settings page. Reuses the same
 * Discord app / redirect URI as the login flow — /login/discord/validate tells the two apart by
 * checking whether the browser comes back with an active session.
 */
export const GET = ({ cookies, locals }) => {
  if (!locals.user) {
    return redirect(302, resolve('/login'));
  }

  const discordAuthService = new DiscordAuthService();
  const state = discordAuthService.generateState();

  const url = discordAuthService.createAuthorizationUrl(state);
  discordAuthService.storeStateInCookie(state, cookies);

  return redirect(302, url);
};
