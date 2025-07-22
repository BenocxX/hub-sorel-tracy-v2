import { dev } from '$app/environment';
import { DISCORD_REDIRECT_URI } from '$env/static/private';
import {
  discord,
  DISCORD_COOKIE_NAME,
  DISCORD_SCOPES,
} from '$lib/server/services/discord-auth-service';
import { redirect } from '@sveltejs/kit';
import * as arctic from 'arctic';

export const GET = ({ cookies }) => {
  const state = arctic.generateState();

  const url = discord.createAuthorizationURL(state, null, DISCORD_SCOPES);

  // store state as cookie
  cookies.set(DISCORD_COOKIE_NAME, state, {
    secure: dev ? false : true,
    path: '/',
    httpOnly: true,
    maxAge: 60 * 10, // 10 min
  });

  return redirect(302, url);
};
