import { resolve } from '$app/paths';
import { json } from '@sveltejs/kit';
import { RedirectToCookie } from '$lib/server/cookies/redirect-to-cookie';
import { AuthService } from '$lib/server/services/auth-service';
import { PasskeyService } from '$lib/server/services/passkey-service';
import type { AuthenticationResponseJSON } from '@simplewebauthn/server';

/** Verifies a passkey login assertion and, if valid, opens a session for the owning user. */
export const POST = async (event) => {
  const passkeyService = new PasskeyService();

  const expectedChallenge = passkeyService.getChallengeFromCookie(event.cookies);
  passkeyService.clearChallengeCookie(event.cookies);

  if (!expectedChallenge) {
    return json({ verified: false, error: 'expired' }, { status: 400 });
  }

  const response = (await event.request.json()) as AuthenticationResponseJSON;

  const user = await passkeyService.verifyPasskeyAuthentication({
    response,
    expectedChallenge,
    rpID: event.url.hostname,
    origin: event.url.origin,
  });

  if (!user) {
    return json({ verified: false, error: 'invalid' }, { status: 400 });
  }

  const authService = new AuthService();
  await authService.createSession(event, user);

  return json({
    verified: true,
    redirectTo: RedirectToCookie.get(event.cookies, resolve('/savant')),
  });
};
