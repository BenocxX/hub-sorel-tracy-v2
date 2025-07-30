import { db } from '../prisma';
import { SessionService } from './session-service';
import type { RequestEvent } from '@sveltejs/kit';
import { base32 } from 'oslo/encoding';
import { Argon2id } from 'oslo/password';
import { DiscordAuthService, type DiscordUser } from './discord-auth-service';
import type { OAuth2Tokens } from 'arctic';
import type { User } from '$lib/common/types/prisma-types';
import { Role } from '@prisma/client';

type LoginData = {
  username: string;
  password: string;
};

type SignupData = LoginData & {
  firstname: string;
  lastname: string;
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

  /** Creates a new user in the database, with the given SignupData, the password is hashed with Argon2id. */
  public async signup({ username, firstname, lastname, password }: SignupData) {
    const passwordHash = await this.argon2id.hash(password);

    return await db.user.create({
      data: {
        id: generateUserId(),
        username,
        firstname,
        lastname,
        passwordHash,
        student: {
          create: {},
        },
      },
    });
  }

  /** Creates a new user in the database, with the given discord user data. */
  public async signupWithDiscord(discordUser: DiscordUser) {
    const newUser = await db.user.create({
      data: {
        id: generateUserId(),
        username: discordUser.username,
      },
    });

    const discordAuthService = new DiscordAuthService();
    await discordAuthService.updateLocalDiscordUserData(discordUser, newUser);

    return newUser;
  }

  /** Tries to log in the user with the given email and password. */
  public async login({ username, password }: LoginData) {
    const user = await db.user.findFirst({
      where: { username },
      omit: { passwordHash: false },
    });

    if (!user || !user.passwordHash) {
      return;
    }

    if (await this.argon2id.verify(user.passwordHash, password)) {
      return user;
    }
  }

  /** Creates a new session for the given user. */
  public async createSession(
    event: RequestEvent,
    user: NonNullable<User>,
    tokens: OAuth2Tokens | null = null
  ) {
    const sessionService = new SessionService();

    const sessionToken = sessionService.generateToken();
    const sessionName = event.request.headers.get('user-agent') ?? 'Unknown';
    const session = await sessionService.create(sessionToken, user.id, sessionName);

    if (tokens) {
      const discordAuthService = new DiscordAuthService();
      await discordAuthService.insertOAuthToken(tokens, session);

      const discordUser = await discordAuthService.getDiscordUser(tokens.accessToken());
      await discordAuthService.updateLocalDiscordUserData(discordUser, user);
    }

    sessionService.setCookie(event, sessionToken, session.expiresAt);

    return session;
  }

  /** Logs out the user by invalidating their session. */
  public async logout(event: RequestEvent) {
    const sessionId = event.locals.session?.id;

    if (!sessionId) {
      return;
    }

    await this.sessionService.invalidate(sessionId.toString());
    this.sessionService.deleteCookie(event);
  }

  /** Logs out the user by invalidating all of their sessions. */
  public async fullLogout(event: RequestEvent) {
    const sessions = await db.session.findMany({ where: { userId: event.locals.user!.id } });
    for (const session of sessions) {
      await this.sessionService.invalidate(session.id);
    }

    this.sessionService.deleteCookie(event);
  }

  public async changePassword(user: User, newPassword: string) {
    const passwordHash = await this.argon2id.hash(newPassword);

    await db.user.update({
      where: { id: user?.id },
      data: { passwordHash },
    });
  }

  public async isUsernameAlreadyUsed(username: string) {
    return Boolean(await db.user.findFirst({ where: { username } }));
  }

  public async getUserByDiscordId(discordId: string) {
    return await db.user.findFirst({
      where: {
        discordUser: {
          discordId,
        },
      },
    });
  }

  public async doesUserHavePassword(id: string) {
    const { passwordHash } = await db.user.findFirstOrThrow({
      where: { id },
      omit: { passwordHash: false },
    });

    return passwordHash !== '' && passwordHash !== null;
  }
}
