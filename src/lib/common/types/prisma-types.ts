import type { Prisma } from '@prisma/client';

type UserWithoutPassword = Omit<
  Prisma.UserGetPayload<{ include: { discordUser: true } }>,
  'passwordHash'
>;

// If a type has a key "user" that contains the generated User type from prisma, UserSanitizer will
// replace it with our UserWithoutPassword type. We do this because, with prisma, we ALWAYS
// omit the passwordHash when we do a query, but the generated types do not reflect that.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UserSanitizer<T> = T extends { user: any }
  ? Omit<T, 'user'> & { user: UserWithoutPassword }
  : Omit<T, 'passwordHash'>;

export type Session<T extends Prisma.SessionInclude = object> = UserSanitizer<
  Prisma.SessionGetPayload<{ include: T }>
>;

export type User<T extends Prisma.UserInclude = object> = UserSanitizer<
  Prisma.UserGetPayload<{ include: T }>
>;
