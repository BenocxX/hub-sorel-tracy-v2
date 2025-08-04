import { z } from 'zod';

// I would've liked to user import "import { Role } from '@prisma/client';" and simply pass the
// prisma Role object to z.nativeEnum(), but Vite doesnt let us import prisma enum yet...
// See: https://github.com/prisma/prisma/issues/12504

export const roleSchema = z.nativeEnum({
  Student: 'Student',
  Teacher: 'Teacher',
  Admin: 'Admin',
} as const);

export const seasonSchema = z.nativeEnum({
  Fall: 'Fall',
  Winter: 'Winter',
  Summer: 'Summer',
} as const);
