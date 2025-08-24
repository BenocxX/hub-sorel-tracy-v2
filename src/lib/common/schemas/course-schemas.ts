import { z } from 'zod';

export const createCourseSchema = z.object({
  name: z.string().min(1),
  /** should be an `<svg>...</svg>` tag. */
  icon: z.string().min(1),
  group: z.number().default(1),
  sessionId: z.string(),
});

export const modifyCourseSchema = z.object({
  name: z.string().min(1),
  /** should be an `<svg>...</svg>` tag. */
  icon: z.string().min(1),
  group: z.number().default(1),
});

export const deleteCourseSchema = z.object({
  id: z.number(),
});

export const addUserToCourseSchema = z.object({
  userId: z.string().min(1),
});

export const removeUserFromCourseSchema = z.object({
  userId: z.string().min(1),
});

export type CreateCourseSchema = typeof createCourseSchema;
export type ModifyCourseSchema = typeof modifyCourseSchema;
export type DeleteCourseSchema = typeof deleteCourseSchema;
export type AddUserToCourseSchema = typeof addUserToCourseSchema;
export type RemoveUserFromCourseSchema = typeof removeUserFromCourseSchema;
