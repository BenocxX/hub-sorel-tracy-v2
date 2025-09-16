import { redirect, type Handle, type RequestEvent } from '@sveltejs/kit';
import { resolve } from '$app/paths';

const guards = [publicGuard, dashboardGuard, teacherGuard, adminGuard];

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
    event.cookies.set('redirectTo', event.url.pathname + event.url.search, { path: '/' });
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
