import { AuthService } from '$lib/server/services/auth-service.js';
import { DiscordAuthService, type DiscordUser } from '$lib/server/services/discord-auth-service.js';
import { redirect, type RequestEvent } from '@sveltejs/kit';
import type { OAuth2Tokens } from 'arctic';

export const GET = async (event) => {
  const discordAuthService = new DiscordAuthService();

  const code = discordAuthService.getCode(event.url, event.cookies);
  if (!code) {
    return redirect(302, '/login');
  }

  const isSuccess = await discordAuthService.validateAuthorizationCode(code, async (tokens) => {
    const discordUser = await discordAuthService.getDiscordUserFromTokens(tokens);
    await authenticate(event, discordUser, tokens);
  });

  if (!isSuccess) {
    return redirect(302, '/login');
  }

  return redirect(302, '/savant');
};

async function authenticate(event: RequestEvent, discordUser: DiscordUser, tokens: OAuth2Tokens) {
  const authService = new AuthService();
  let user = await authService.getUserByDiscordId(discordUser.id);

  if (!user) {
    user = await authService.signupWithDiscord(discordUser);
  }

  await authService.createSession(event, user, tokens);
}
