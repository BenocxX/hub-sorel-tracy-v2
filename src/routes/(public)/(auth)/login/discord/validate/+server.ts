import { discord, DISCORD_COOKIE_NAME } from '$lib/server/services/discord-auth-service';
import { error, redirect } from '@sveltejs/kit';
import * as arctic from 'arctic';

export const GET = async ({ url, cookies }) => {
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  const storedState = cookies.get(DISCORD_COOKIE_NAME);

  if (code === null || storedState === null || state !== storedState) {
    return redirect(302, '/login');
  }

  try {
    const tokens = await discord.validateAuthorizationCode(code, null);
    const accessToken = tokens.accessToken();
    const accessTokenExpiresAt = tokens.accessTokenExpiresAt();
    const refreshToken = tokens.refreshToken();

    console.log('Tokens:', tokens);

    const response = await fetch('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const user = await response.json();

    console.log('Discord user:', user);
  } catch (e) {
    if (e instanceof arctic.OAuth2RequestError) {
      // Invalid authorization code, credentials, or redirect URI
      const code = e.code;
      return error(400, `OAuth2 request error: ${code}`);
    }
    if (e instanceof arctic.ArcticFetchError) {
      // Failed to call `fetch()`
      const cause = e.cause;
      return error(500, `Fetch error: ${cause}`);
    }
    return error(500, 'An unexpected error occurred while validating the authorization code');
  }

  return redirect(302, '/savant');
};
