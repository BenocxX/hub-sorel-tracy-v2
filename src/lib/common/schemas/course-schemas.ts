import { z } from 'zod';
import { seasonSchema } from './prisma-schema';

export const createCourseSchema = z.object({
  name: z.string().min(1),
  /** should be an `<svg>...</svg>` tag. */
  icon: z.string().min(1),
  sessionId: z.string(),
});

export const deleteCourseSchema = z.object({
  id: z.number(),
});

export type CreateCourseSchema = typeof createCourseSchema;
export type DeleteCourseSchema = typeof deleteCourseSchema;
