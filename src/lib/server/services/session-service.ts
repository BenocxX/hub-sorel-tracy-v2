/**
 * Lucia auth guide: https://lucia-auth.com/sessions/basic-api/prisma
 */
import type { RequestEvent } from '@sveltejs/kit';
import { TimeConstants } from '$lib/tools/time-constants';
import { db } from '../prisma';
import { base64url, encodeHex } from 'oslo/encoding';
import { sha256 } from 'oslo/crypto';
import type { Session, User } from '@prisma/client';

export class SessionService {
  public static SESSION_COOKIE_NAME = 'auth-session';

  /** The session token is valid for 15 days */
  public static REFRESH_DELAY = TimeConstants.FIFTEEN_DAYS_IN_MS;

  /** The session token is valid for 30 days */
  public static EXPIRY_DELAY = TimeConstants.MONTH_IN_MS;

  private readonly textEncoder = new TextEncoder();

  /** Generates a random session token. */
  public generateToken(): string {
    const bytes = crypto.getRandomValues(new Uint8Array(18));
    const token = base64url.encode(bytes);
    return token;
  }

  /** Creates a new session in the database. The session id is the SHA-256 hash of the token. */
  public async create(token: string, userId: string, name: string): Promise<Session> {
    const sessionId = encodeHex(await sha256(this.textEncoder.encode(token)));
    const publicId = encodeHex(
      await sha256(this.textEncoder.encode(`session-public-id-${token}-${new Date().toString()}`))
    );

    const session = await db.session.create({
      data: {
        id: sessionId,
        publicId,
        userId,
        name,
        lastUsed: new Date(),
        expiresAt: new Date(Date.now() + SessionService.EXPIRY_DELAY),
      },
    });

    return session;
  }

  /**
   * Validates a session token. If the token is invalid or expired, the session is deleted from the database.
   * If the token is valid, the session is refreshed if it is about to expire (< 15 days).
   */
  public async validate(token: string): Promise<SessionValidationResult> {
    const sessionId = encodeHex(await sha256(new TextEncoder().encode(token)));

    const sessionResult = await db.session.findFirst({
      where: { id: sessionId },
      include: {
        user: true,
      },
    });

    if (!sessionResult) {
      return { session: null, user: null };
    }

    const { user, ...session } = sessionResult;

    const sessionExpired = Date.now() >= session.expiresAt.getTime();
    if (sessionExpired) {
      await db.session.delete({ where: { id: session.id } });
      return { session: null, user: null };
    }

    const needRenew = Date.now() >= session.expiresAt.getTime() - SessionService.REFRESH_DELAY;

    await db.session.update({
      where: { id: session.id },
      data: {
        lastUsed: new Date(),
        expiresAt: needRenew
          ? new Date(Date.now() + SessionService.EXPIRY_DELAY) // Refresh the session for 30 days
          : session.expiresAt,
      },
    });

    return { session, user };
  }

  /** Deletes a session from the database. */
  public async invalidate(sessionId: string): Promise<void> {
    await db.session.delete({ where: { id: sessionId } });
  }

  /** Gets the session token from the cookies. */
  public getCookie(event: RequestEvent) {
    return event.cookies.get(SessionService.SESSION_COOKIE_NAME);
  }

  /** Deletes the session token from the cookies. */
  public deleteCookie(event: RequestEvent) {
    event.cookies.delete(SessionService.SESSION_COOKIE_NAME, {
      path: '/',
    });
  }

  /** Sets the session token in the cookies. */
  public setCookie(event: RequestEvent, token: string, expiresAt: Date) {
    event.cookies.set(SessionService.SESSION_COOKIE_NAME, token, {
      expires: expiresAt,
      path: '/',
    });
  }
}

export type SessionValidationResult =
  | { session: Session; user: Omit<User, 'passwordHash'> }
  | { session: null; user: null };
