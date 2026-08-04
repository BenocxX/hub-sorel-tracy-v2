import { dev } from '$app/environment';
import { db } from '../prisma';
import type { Cookies } from '@sveltejs/kit';
import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  verifyAuthenticationResponse,
  verifyRegistrationResponse,
} from '@simplewebauthn/server';
import type {
  AuthenticationResponseJSON,
  RegistrationResponseJSON,
  WebAuthnCredential,
} from '@simplewebauthn/server';
import type { User } from '$lib/common/types/prisma-types';
import type { Passkey } from '@prisma/client';

const RP_NAME = 'Hub Sorel-Tracy';
const CHALLENGE_COOKIE_NAME = 'webauthn_challenge';

export class PasskeyService {
  public async getUserPasskeys(userId: string) {
    return await db.passkey.findMany({ where: { userId }, orderBy: { createdAt: 'asc' } });
  }

  /** Builds the options object the browser needs to prompt for creating a new passkey. */
  public async generatePasskeyRegistrationOptions(user: NonNullable<User>, rpID: string) {
    const existingPasskeys = await this.getUserPasskeys(user.id);

    return await generateRegistrationOptions({
      rpName: RP_NAME,
      rpID,
      userName: user.username,
      userDisplayName: `${user.firstname ?? ''} ${user.lastname ?? ''}`.trim() || user.username,
      attestationType: 'none',
      excludeCredentials: existingPasskeys.map((passkey) => ({ id: passkey.id })),
      authenticatorSelection: { residentKey: 'required', userVerification: 'preferred' },
    });
  }

  /** Verifies a freshly created passkey and stores it against the user. Returns null if invalid. */
  public async verifyAndSavePasskeyRegistration({
    userId,
    response,
    expectedChallenge,
    rpID,
    origin,
    name,
  }: {
    userId: string;
    response: RegistrationResponseJSON;
    expectedChallenge: string;
    rpID: string;
    origin: string;
    name: string;
  }): Promise<Passkey | null> {
    let verification;
    try {
      verification = await verifyRegistrationResponse({
        response,
        expectedChallenge,
        expectedOrigin: origin,
        expectedRPID: rpID,
      });
    } catch {
      // Malformed/tampered response — the library throws rather than returning verified: false.
      return null;
    }

    if (!verification.verified) {
      return null;
    }

    const { credential, credentialDeviceType, credentialBackedUp } = verification.registrationInfo;

    return await db.passkey.create({
      data: {
        id: credential.id,
        userId,
        publicKey: Buffer.from(credential.publicKey),
        counter: credential.counter,
        transports: credential.transports ?? [],
        deviceType: credentialDeviceType,
        backedUp: credentialBackedUp,
        name: name.trim().slice(0, 100) || 'Clé d’accès',
      },
    });
  }

  /** Builds the options object for a usernameless ("discoverable credential") login prompt. */
  public async generatePasskeyAuthenticationOptions(rpID: string) {
    return await generateAuthenticationOptions({
      rpID,
      userVerification: 'preferred',
    });
  }

  /**
   * Verifies a login assertion against whichever passkey the browser reports it used, identified
   * from the response itself (no username needed). Returns the owning user on success.
   */
  public async verifyPasskeyAuthentication({
    response,
    expectedChallenge,
    rpID,
    origin,
  }: {
    response: AuthenticationResponseJSON;
    expectedChallenge: string;
    rpID: string;
    origin: string;
  }) {
    const passkey = await db.passkey.findUnique({ where: { id: response.id } });
    if (!passkey) {
      return null;
    }

    const credential: WebAuthnCredential = {
      id: passkey.id,
      publicKey: new Uint8Array(passkey.publicKey),
      counter: passkey.counter,
      transports: passkey.transports as WebAuthnCredential['transports'],
    };

    let verification;
    try {
      verification = await verifyAuthenticationResponse({
        response,
        expectedChallenge,
        expectedOrigin: origin,
        expectedRPID: rpID,
        credential,
      });
    } catch {
      // Malformed/tampered response — the library throws rather than returning verified: false.
      return null;
    }

    if (!verification.verified) {
      return null;
    }

    const user = await db.user.findUnique({ where: { id: passkey.userId } });
    if (!user) {
      return null;
    }

    await db.passkey.update({
      where: { id: passkey.id },
      data: { counter: verification.authenticationInfo.newCounter },
    });

    return user;
  }

  public async deletePasskey(userId: string, passkeyId: string) {
    await db.passkey.deleteMany({ where: { id: passkeyId, userId } });
  }

  public storeChallengeInCookie(challenge: string, cookies: Cookies) {
    cookies.set(CHALLENGE_COOKIE_NAME, challenge, {
      secure: dev ? false : true,
      path: '/',
      httpOnly: true,
      maxAge: 60 * 5, // 5 min, just enough to complete the ceremony
    });
  }

  public getChallengeFromCookie(cookies: Cookies) {
    return cookies.get(CHALLENGE_COOKIE_NAME);
  }

  public clearChallengeCookie(cookies: Cookies) {
    cookies.delete(CHALLENGE_COOKIE_NAME, { path: '/' });
  }
}
