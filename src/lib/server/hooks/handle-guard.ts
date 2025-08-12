import { redirect, type Handle } from '@sveltejs/kit';
import { db } from '../prisma';

const guards = [publicGuard, dashboardGuard, teacherGuard, adminGuard, presentationGuard];

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
    throw redirect(303, '/');
  }
}

/**
 * Guard private routes from unauthenticated users
 */
async function dashboardGuard(route: string, user?: App.Locals['user']) {
  if (route.includes('/savant') && !user) {
    throw redirect(303, '/login');
  }
}

/**
 * Guard private routes from non-teacher users
 */
async function teacherGuard(route: string, user?: App.Locals['user']) {
  if (route.includes('/savant/teacher') && (!user || user.role === 'Student')) {
    throw redirect(303, '/savant');
  }
}

/**
 * Guard admin routes from non-admin users
 */
async function adminGuard(route: string, user?: App.Locals['user']) {
  if (route.includes('/savant/admin') && (!user || user.role !== 'Admin')) {
    throw redirect(303, '/savant');
  }
}

/**
 * Guard presentations routes to allow only admin or user that have access to the course
 */
async function presentationGuard(route: string, user?: App.Locals['user']) {
  // if (!route.includes('/savant/presentation') || user?.role === 'Admin') {
  if (!route.includes('/savant/presentation')) {
    return;
  }

  const segments = route.split('/');

  // segments should be: [ '', 'savant', 'presentation', course, presentation ]
  const courseSegment = segments[3];
  const presentationSegment = segments[4];

  const course = await db.course.findFirst({
    where: { abbreviation: courseSegment },
    include: {
      students: true,
      teachers: true,
      presentations: { where: { abbreviation: presentationSegment } },
    },
  });

  if (!course || course.presentations[0] === undefined) {
    throw redirect(303, '/savant');
  }

  if (
    user!.role === 'Student' &&
    course.students.some((student) => student.id === user!.id) &&
    !course.presentations[0].isLocked
  ) {
    return;
  }

  if (user!.role !== 'Student' && course.teachers.some((teacher) => teacher.id === user!.id)) {
    return;
  }

  throw redirect(303, '/savant');
}
