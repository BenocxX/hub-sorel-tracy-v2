import { json } from '@sveltejs/kit';
import { PasskeyService } from '$lib/server/services/passkey-service';

/** Generates the options the browser needs to start creating a new passkey for the current user. */
export const POST = async (event) => {
  const passkeyService = new PasskeyService();

  const options = await passkeyService.generatePasskeyRegistrationOptions(
    event.locals.user!,
    event.url.hostname
  );

  passkeyService.storeChallengeInCookie(options.challenge, event.cookies);

  return json(options);
};
