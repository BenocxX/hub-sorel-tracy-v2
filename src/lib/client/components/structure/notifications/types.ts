import type { Prisma } from '@prisma/client';

const notificationInclude = {
  comment: {
    include: {
      author: { include: { discordUser: true } },
      presentation: { select: { id: true, title: true, chapter: true } },
    },
  },
} satisfies Prisma.NotificationInclude;

type NotificationPayload = Prisma.NotificationGetPayload<{ include: typeof notificationInclude }>;

// Same idea as prisma-types.ts's UserSanitizer — passwordHash is omitted globally at the
// PrismaClient level (see src/lib/server/prisma/index.ts), but the generated type doesn't know
// that, so the nested comment.author needs it stripped by hand to match the real shape.
export type NotificationWithComment = Omit<NotificationPayload, 'comment'> & {
  comment: Omit<NotificationPayload['comment'], 'author'> & {
    author: Omit<NotificationPayload['comment']['author'], 'passwordHash'>;
  };
};
