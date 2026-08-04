import { json } from '@sveltejs/kit';
import { PasskeyService } from '$lib/server/services/passkey-service';
import type { RegistrationResponseJSON } from '@simplewebauthn/server';

/** Verifies the browser's response and, if valid, saves the new passkey for the current user. */
export const POST = async (event) => {
  const passkeyService = new PasskeyService();

  const expectedChallenge = passkeyService.getChallengeFromCookie(event.cookies);
  passkeyService.clearChallengeCookie(event.cookies);

  if (!expectedChallenge) {
    return json({ verified: false, error: 'expired' }, { status: 400 });
  }

  const body = (await event.request.json()) as {
    response: RegistrationResponseJSON;
    name: string;
  };

  const passkey = await passkeyService.verifyAndSavePasskeyRegistration({
    userId: event.locals.user!.id,
    response: body.response,
    expectedChallenge,
    rpID: event.url.hostname,
    origin: event.url.origin,
    name: body.name ?? '',
  });

  if (!passkey) {
    return json({ verified: false, error: 'invalid' }, { status: 400 });
  }

  return json({ verified: true, name: passkey.name });
};
