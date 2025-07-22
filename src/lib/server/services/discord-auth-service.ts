import {
  DISCORD_CLIENT_ID,
  DISCORD_CLIENT_SECRET,
  DISCORD_REDIRECT_URI,
} from '$env/static/private';
import { Discord } from 'arctic';

export const discord = new Discord(DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET, DISCORD_REDIRECT_URI);
export const DISCORD_COOKIE_NAME = 'discord_auth_state';
export const DISCORD_SCOPES = ['identify'];
