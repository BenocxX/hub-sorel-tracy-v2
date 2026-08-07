import { sortByChapter } from '$lib/common/tools/chapter.js';
import { db } from '$lib/server/prisma/index.js';

const RECENT_NOTIFICATIONS_LIMIT = 15;

export const load = async (event) => {
  const user = event.locals.user;

  const currentSession = await db.schoolSession.findFirst({ where: { isCurrent: true } });

  const rawCourses = await db.course.findMany({
    where: {
      students: user?.role === 'Student' ? { some: { id: user?.id } } : undefined,
      teachers:
        user?.role === 'Teacher' || user?.role === 'Admin' ? { some: { id: user?.id } } : undefined,
    },
    orderBy: { name: 'asc' },
    include: { presentations: true },
  });

  // Chapter is a dotted string ("6.1", "5.12", ...) now, so it can no longer sort correctly at
  // the database level (that'd be a plain lexicographic sort) — see chapter.ts.
  const courses = rawCourses.map((course) => ({
    ...course,
    presentations: sortByChapter(course.presentations),
  }));

  // Loaded on every /savant page so the bell in the navbar is always current on navigation —
  // there's no live push, so it can still be stale between navigations within the same page.
  const notifications = user
    ? await db.notification.findMany({
        where: { userId: user.id },
        orderBy: { createdAt: 'desc' },
        take: RECENT_NOTIFICATIONS_LIMIT,
        include: {
          comment: {
            include: {
              author: { include: { discordUser: true } },
              presentation: { select: { id: true, title: true, chapter: true } },
            },
          },
        },
      })
    : [];
  const unreadNotificationCount = user
    ? await db.notification.count({ where: { userId: user.id, read: false } })
    : 0;

  return { user, courses, currentSession, notifications, unreadNotificationCount };
};
