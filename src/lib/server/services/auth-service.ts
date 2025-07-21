import { db } from '../prisma';
import { SessionService } from './session-service';
import type { RequestEvent } from '@sveltejs/kit';
import { base32 } from 'oslo/encoding';
import { Argon2id } from 'oslo/password';

type AuthData = {
  username: string;
  password: string;
};

function generateUserId() {
  // ID with 120 bits of entropy, or about the same as UUID v4.
  const bytes = crypto.getRandomValues(new Uint8Array(15));
  const id = base32.encode(bytes);
  return id;
}

export class AuthService {
  public static readonly EMAIL_PASSWORD_PROVIDER = 'email-password';

  private readonly argon2id = new Argon2id();
  private readonly sessionService = new SessionService();

  /** Creates a new user/key in the database, with the given email and password (hashed with Argon2id). */
  public async signup({ username, password }: AuthData) {
    const userId = generateUserId();
    const passwordHash = await this.argon2id.hash(password);

    return await db.user.create({
      data: {
        id: userId,
        username,
        passwordHash,
      },
    });
  }

  /** Tries to log in the user with the given email and password. */
  public async login({ username, password }: AuthData) {
    const user = await db.user.findFirst({
      where: { username },
      omit: { passwordHash: false },
    });

    if (!user) {
      return;
    }

    if (await this.argon2id.verify(user.passwordHash, password)) {
      return user;
    }
  }

  /** Creates a new session for the given user. */
  public async createSession(event: RequestEvent, user: NonNullable<App.Locals['user']>) {
    const sessionService = new SessionService();

    const sessionToken = sessionService.generateToken();
    const sessionName = event.request.headers.get('user-agent') ?? 'Unknown';
    const session = await sessionService.create(sessionToken, user.id, sessionName);
    sessionService.setCookie(event, sessionToken, session.expiresAt);

    return session;
  }

  /** Logs out the user by invalidating their session. */
  public async logout(event: RequestEvent) {
    if (!event.locals.session?.id) {
      return;
    }

    await this.sessionService.invalidate(event.locals.session.id.toString());
    this.sessionService.deleteCookie(event);
  }

  public async changePassword(user: App.Locals['user'], newPassword: string) {
    const passwordHash = await this.argon2id.hash(newPassword);

    await db.user.update({
      where: { id: user?.id },
      data: { passwordHash },
    });
  }

  public async isUsernameAlreadyUsed(username: string) {
    return Boolean(await db.user.findFirst({ where: { username } }));
  }
}
