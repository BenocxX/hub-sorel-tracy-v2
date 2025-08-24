import { redirect, type Handle } from '@sveltejs/kit';
import { resolve } from '$app/paths';

const guards = [publicGuard, dashboardGuard, teacherGuard, adminGuard];

export const handleGuard: Handle = async ({ event, resolve }) => {
  const routeId = event.route.id;

  if (!routeId) {
    return resolve(event);
  }

  for (const guard of guards) {
    await guard(routeId, event.locals.user);
  }

  return resolve(event);
};

/**
 * Guard public auth routes from authenticated users
 */
async function publicGuard(route: string, user?: App.Locals['user']) {
  if (route.includes('/(public)/(auth)') && user) {
    throw redirect(303, resolve('/'));
  }
}

/**
 * Guard private routes from unauthenticated users
 */
async function dashboardGuard(route: string, user?: App.Locals['user']) {
  if (route.includes(resolve('/savant')) && !user) {
    throw redirect(303, resolve('/login'));
  }
}

/**
 * Guard private routes from non-teacher users
 */
async function teacherGuard(route: string, user?: App.Locals['user']) {
  if (route.includes(resolve('/savant/teacher')) && (!user || user.role === 'Student')) {
    throw redirect(303, resolve('/savant'));
  }
}

/**
 * Guard admin routes from non-admin users
 */
async function adminGuard(route: string, user?: App.Locals['user']) {
  if (route.includes(resolve('/savant/admin')) && (!user || user.role !== 'Admin')) {
    throw redirect(303, resolve('/savant'));
  }
}
