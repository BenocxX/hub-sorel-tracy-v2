import { redirect, type Handle } from '@sveltejs/kit';

const guards = [publicGuard, dashboardGuard, teacherGuard, adminGuard];

export const handleGuard: Handle = async ({ event, resolve }) => {
  const routeId = event.route.id;

  if (!routeId) {
    return resolve(event);
  }

  guards.forEach((guard) => guard(routeId, event.locals.user));

  return resolve(event);
};

/**
 * Guard public auth routes from authenticated users
 */
function publicGuard(route: string, user?: App.Locals['user']) {
  if (route.includes('/(public)/(auth)') && user) {
    throw redirect(303, '/');
  }
}

/**
 * Guard private routes from unauthenticated users
 */
function dashboardGuard(route: string, user?: App.Locals['user']) {
  if (route.includes('/savant') && !user) {
    throw redirect(303, '/login');
  }
}

/**
 * Guard private routes from non-teacher users
 */
function teacherGuard(route: string, user?: App.Locals['user']) {
  if (route.includes('/savant/teacher') && (!user || user.role === 'Student')) {
    throw redirect(303, '/savant');
  }
}

/**
 * Guard admin routes from non-admin users
 */
function adminGuard(route: string, user?: App.Locals['user']) {
  if (route.includes('/savant/admin') && (!user || user.role !== 'Admin')) {
    throw redirect(303, '/savant');
  }
}
