import { json } from '@sveltejs/kit';
import { PasskeyService } from '$lib/server/services/passkey-service';

/**
 * Generates a usernameless ("discoverable credential") authentication prompt — the browser shows
 * whichever passkeys it has for this site without the student needing to type a username first.
 */
export const POST = async (event) => {
  const passkeyService = new PasskeyService();

  const options = await passkeyService.generatePasskeyAuthenticationOptions(event.url.hostname);
  passkeyService.storeChallengeInCookie(options.challenge, event.cookies);

  return json(options);
};
