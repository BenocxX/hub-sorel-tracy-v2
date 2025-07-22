import { dev } from '$app/environment';
import {
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  DISCORD_REDIRECT_URI,
} from '$env/static/private';
import { type Cookies } from '@sveltejs/kit';
import * as arctic from 'arctic';

const discord = new arctic.Discord(DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_REDIRECT_URI);
const DISCORD_COOKIE_NAME = 'discord_auth_state';
const DISCORD_SCOPES = ['identify'];

export class DiscordAuthService {
  public generateState() {
    return arctic.generateState();
  }

  public createAuthorizationUrl(state: string) {
    return discord.createAuthorizationURL(state, null, DISCORD_SCOPES);
  }

  public storeStateInCookie(state: string, cookies: Cookies) {
    cookies.set(DISCORD_COOKIE_NAME, state, {
      secure: dev ? false : true,
      path: '/',
      httpOnly: true,
      maxAge: 60 * 10, // 10 min
    });
  }

  public getCode(url: URL, cookies: Cookies) {
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    const storedState = cookies.get(DISCORD_COOKIE_NAME);

    if (code === null || storedState === null || state !== storedState) {
      return null;
    }

    return code;
  }

  public async validateAuthorizationCode(
    code: string,
    onValidationSuccess: (tokens: arctic.OAuth2Tokens) => Promise<void>
  ) {
    try {
      const tokens = await discord.validateAuthorizationCode(code, null);
      await onValidationSuccess(tokens);
    } catch (e) {
      console.log(e);

      if (e instanceof arctic.OAuth2RequestError) {
        // Invalid authorization code, credentials, or redirect URI
        const code = e.code;
        console.log(`OAuth2 request error: ${code}`);
        return false;
      }

      if (e instanceof arctic.ArcticFetchError) {
        // Failed to call `fetch()`
        const cause = e.cause;
        console.log(`Fetch error: ${cause}`);
        return false;
      }

      console.log('An unexpected error occurred while validating the authorization code.');
      return false;
    }

    return true;
  }

  public async refreshAccessToken(
    refreshToken: string,
    onRefreshSuccess: (tokens: arctic.OAuth2Tokens) => Promise<void>
  ) {
    try {
      const tokens = await discord.refreshAccessToken(refreshToken);
      await onRefreshSuccess(tokens);
    } catch (e) {
      if (e instanceof arctic.OAuth2RequestError) {
        // Invalid authorization code, credentials, or redirect URI
        const code = e.code;
        console.log(`OAuth2 request error: ${code}`);
        return false;
      }

      if (e instanceof arctic.ArcticFetchError) {
        // Failed to call `fetch()`
        const cause = e.cause;
        console.log(`Fetch error: ${cause}`);
        return false;
      }

      console.log('An unexpected error occurred while validating the authorization code.');
      return false;
    }
  }

  public async getDiscordUserFromTokens(tokens: arctic.OAuth2Tokens) {
    const accessToken = tokens.accessToken();

    const response = await fetch('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return (await response.json()) as DiscordUser;
  }
}

export type DiscordUser = {
  id: string;
  username: string;
  avatar: string;
};
