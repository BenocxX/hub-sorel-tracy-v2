/**
 * Lucia auth guide: https://lucia-auth.com/sessions/basic-api/prisma
 */
import type { RequestEvent } from '@sveltejs/kit';
import { TimeConstants } from '$lib/tools/time-constants';
import { db } from '../prisma';
import { base64url, encodeHex } from 'oslo/encoding';
import { sha256 } from 'oslo/crypto';
import type { Session, User } from '@prisma/client';
import { DiscordAuthService } from './discord-auth-service';

export class SessionService {
  public static SESSION_COOKIE_NAME = 'auth-session';

  /** The session token is valid for 3 days */
  public static REFRESH_DELAY = TimeConstants.DAY_IN_MS * 3;

  /** The session token is valid for 7 days */
  public static EXPIRY_DELAY = TimeConstants.WEEK_IN_MS;

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

    const session = await this.createFreshSession(sessionId, publicId, userId, name);

    return session;
  }

  /**
   * Validates a session token. If the token is invalid or expired, the session is deleted from the database.
   * If the token is valid, the session is refreshed if it is about to expire (< 3 days).
   */
  public async validate(token: string): Promise<SessionValidationResult> {
    const sessionId = encodeHex(await sha256(new TextEncoder().encode(token)));

    const { session, user } = await this.getSessionAndAssociatedUser(sessionId);
    if (!session || !user) {
      return { session: null, user: null };
    }

    if (this.isExpired(session)) {
      await this.invalidate(session.id);
      return { session: null, user: null };
    }

    await this.refreshSession(session);
    await this.refreshOAuthToken(session);

    return { session, user };
  }

  /** Deletes a session from the database. */
  public async invalidate(sessionId: string): Promise<void> {
    await db.session.delete({ where: { id: sessionId } });
  }

  /** Updates the current session and renew expiration date if needed. */
  public async refreshSession(session: Session) {
    const needRenew = Date.now() >= session.expiresAt.getTime() - SessionService.REFRESH_DELAY;

    await db.session.update({
      where: { id: session.id },
      data: {
        lastUsed: new Date(),
        expiresAt: needRenew
          ? new Date(Date.now() + SessionService.EXPIRY_DELAY) // Refresh the session for 7 days
          : session.expiresAt,
      },
    });
  }

  /** Renew the oauth token if needed. */
  public async refreshOAuthToken(session: Session) {
    const oauthToken = await db.oAuthToken.findFirst({ where: { sessionId: session.id } });
    if (!oauthToken) {
      return;
    }

    const needRenew = Date.now() >= oauthToken?.expiresAt.getTime() - SessionService.REFRESH_DELAY;
    if (!needRenew) {
      return;
    }

    const discordAuthService = new DiscordAuthService();
    await discordAuthService.refreshAccessToken(oauthToken.refreshToken, async (tokens) => {
      const accessToken = tokens.accessToken();
      const expiresAt = tokens.accessTokenExpiresAt();
      const refreshToken = tokens.refreshToken();

      await db.oAuthToken.update({
        where: { sessionId: session.id },
        data: {
          accessToken,
          expiresAt,
          refreshToken,
        },
      });
    });
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

  private isExpired(session: Session) {
    return Date.now() >= session.expiresAt.getTime();
  }

  private async createFreshSession(id: string, publicId: string, userId: string, name: string) {
    return await db.session.create({
      data: {
        id,
        publicId,
        userId,
        name,
        lastUsed: new Date(),
        expiresAt: new Date(Date.now() + SessionService.EXPIRY_DELAY),
      },
    });
  }

  private async getSessionAndAssociatedUser(sessionId: string) {
    const result = await db.session.findFirst({
      where: { id: sessionId },
      include: {
        user: true,
      },
    });

    if (!result) {
      return { user: null, session: null };
    }

    const { user, ...session } = result;
    return { user, session };
  }
}

export type SessionValidationResult =
  | { session: Session; user: Omit<User, 'passwordHash'> }
  | { session: null; user: null };
