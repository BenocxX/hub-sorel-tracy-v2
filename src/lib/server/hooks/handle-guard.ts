import { redirect, type Handle, type RequestEvent } from '@sveltejs/kit';
import { resolve } from '$app/paths';
import { RedirectToCookie } from '../cookies/redirect-to-cookie';
import { db } from '../prisma';

const guards = [publicGuard, dashboardGuard, teacherGuard, adminGuard, isUserPartOfCourse];

export const handleGuard: Handle = async ({ event, resolve }) => {
  if (!event.route.id) {
    return resolve(event);
  }

  for (const guard of guards) {
    await guard(event, event.locals.user);
  }

  return resolve(event);
};

/**
 * Guard public auth routes from authenticated users
 */
async function publicGuard({ route: { id } }: RequestEvent, user?: App.Locals['user']) {
  if (id!.includes('/(public)/(auth)') && user) {
    throw redirect(303, resolve('/'));
  }
}

/**
 * Guard private routes from unauthenticated users
 */
async function dashboardGuard(event: RequestEvent, user?: App.Locals['user']) {
  if (event.route.id!.includes(resolve('/savant')) && !user) {
    RedirectToCookie.set(event.cookies, event.url);
    throw redirect(303, resolve('/login'));
  }
}

/**
 * Guard private routes from non-teacher users
 */
async function teacherGuard({ route: { id } }: RequestEvent, user?: App.Locals['user']) {
  if (id!.includes(resolve('/savant/teacher')) && (!user || user.role === 'Student')) {
    throw redirect(303, resolve('/savant'));
  }
}

/**
 * Guard admin routes from non-admin users
 */
async function adminGuard({ route: { id } }: RequestEvent, user?: App.Locals['user']) {
  if (id!.includes(resolve('/savant/admin')) && (!user || user.role !== 'Admin')) {
    throw redirect(303, resolve('/savant'));
  }
}

async function isUserPartOfCourse(event: RequestEvent, user?: App.Locals['user']) {
  if (event.route.id!.includes('/savant/courses/[courseId=number]')) {
    const courseId = Number(event.params.courseId);
    const course = await db.course.findFirst({
      where: {
        id: courseId,
        OR: [{ students: { some: { id: user?.id } } }, { teachers: { some: { id: user?.id } } }],
      },
    });

    if (!course) {
      throw redirect(303, resolve('/savant'));
    }
  }
}
