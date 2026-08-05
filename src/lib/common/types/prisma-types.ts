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

// Same idea as UserSanitizer, but Comment's relation to User is named "author" instead of "user".
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CommentAuthorSanitizer<T> = T extends { author: any }
  ? Omit<T, 'author'> & { author: UserWithoutPassword }
  : T;

export type Session<T extends Prisma.SessionInclude = object> = UserSanitizer<
  Prisma.SessionGetPayload<{ include: T }>
>;

export type User<T extends Prisma.UserInclude = object> = UserSanitizer<
  Prisma.UserGetPayload<{ include: T }>
>;

export type Comment<T extends Prisma.CommentInclude = object> = CommentAuthorSanitizer<
  Prisma.CommentGetPayload<{ include: T }>
>;

export type Course<T extends Prisma.CourseInclude = object> = Prisma.CourseGetPayload<{
  include: T;
}>;

export type SchoolSession<T extends Prisma.SchoolSessionInclude = object> =
  Prisma.SchoolSessionGetPayload<{ include: T }>;
