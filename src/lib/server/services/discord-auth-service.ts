import { dev } from '$app/environment';
import {
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  DISCORD_REDIRECT_URI,
} from '$env/static/private';
import { type Cookies } from '@sveltejs/kit';
import * as arctic from 'arctic';
import { db } from '../prisma';
import type { User } from '$lib/common/types/prisma-types';
import type { Session } from '@prisma/client';

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

  public async askDiscordForAccessToken(token: string, isRefresh: boolean = false) {
    try {
      if (isRefresh) {
        return await discord.refreshAccessToken(token);
      } else {
        return await discord.validateAuthorizationCode(token, null);
      }
    } catch (e) {
      console.log(e);

      if (e instanceof arctic.OAuth2RequestError) {
        // Invalid authorization code, credentials, or redirect URI
        const code = e.code;
        console.log(`OAuth2 request error: ${code}`);
        return;
      }

      if (e instanceof arctic.ArcticFetchError) {
        // Failed to call `fetch()`
        const cause = e.cause;
        console.log(`Fetch error: ${cause}`);
        return;
      }

      console.log('An unexpected error occurred while validating the authorization code.');
    }
  }

  public async refreshToken(sessionId: string, refreshToken: string) {
    const tokens = await this.askDiscordForAccessToken(refreshToken, true);
    if (!tokens) {
      return null;
    }

    const accessToken = tokens.accessToken();
    const expiresAt = tokens.accessTokenExpiresAt();
    const newRefreshToken = tokens.refreshToken();

    return await db.oAuthToken.update({
      where: { sessionId: sessionId },
      data: {
        accessToken,
        expiresAt,
        refreshToken: newRefreshToken,
      },
    });
  }

  public async insertOAuthToken(tokens: arctic.OAuth2Tokens, session: Session) {
    const accessToken = tokens.accessToken();
    const expiresAt = tokens.accessTokenExpiresAt();
    const refreshToken = tokens.refreshToken();

    await db.oAuthToken.create({
      data: {
        accessToken,
        expiresAt,
        refreshToken,
        session: {
          connect: session,
        },
      },
    });
  }

  public async updateLocalDiscordUserData(discordUser: DiscordUser, user: User) {
    await db.discordUser.upsert({
      where: { userId: user.id },
      update: {
        discordId: discordUser.id,
        username: discordUser.username,
        avatar: discordUser.avatar,
      },
      create: {
        discordId: discordUser.id,
        username: discordUser.username,
        avatar: discordUser.avatar,
        user: {
          connect: user,
        },
      },
    });
  }

  public async getDiscordUser(accessToken: string) {
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
