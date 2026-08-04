import { TimeConstants } from '$lib/common/tools/time-constants';
import { RateLimiter } from './rate-limiter';

/** Keyed by `${ip}:${username}` — throttles repeated login attempts against a given account from a given IP. */
export const loginRateLimiter = new RateLimiter(10, 15 * TimeConstants.MINUTE_IN_MS);

/**
 * Keyed by IP — throttles account creation to slow down mass/bot signups.
 * Set high enough to cover a full classroom registering at once from the same school-wifi IP.
 */
export const registerRateLimiter = new RateLimiter(50, TimeConstants.HOUR_IN_MS);
