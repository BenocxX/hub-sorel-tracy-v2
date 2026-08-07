import { CHAPTER_PATTERN } from '$lib/common/tools/chapter';
import { z } from 'zod';

const chapterSchema = z
  .string()
  .regex(CHAPTER_PATTERN, 'Doit être un nombre valide (ex: 6, 6.1, 5.12)');

export const createPresentationSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  chapter: chapterSchema.default('1'),
  url: z.string().nullable(),
  componentId: z.string().nullable(),
  isLocked: z.boolean().default(true),
  commentsEnabled: z.boolean().default(true),
});

export const modifyPresentationSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  description: z.string().min(1),
  chapter: chapterSchema.default('1'),
  url: z.string().nullable(),
  componentId: z.string().nullable(),
  isLocked: z.boolean().default(true),
  commentsEnabled: z.boolean().default(true),
});

export const togglePresentationLockedSchema = z.object({
  id: z.number(),
  isLocked: z.boolean(),
});

export const deletePresentationSchema = z.object({
  presentationId: z.number(),
});

export type CreatePresentationSchema = typeof createPresentationSchema;
export type ModifyPresentationSchema = typeof modifyPresentationSchema;
export type TogglePresentationLockedSchema = typeof togglePresentationLockedSchema;
export type DeletePresentationSchema = typeof deletePresentationSchema;
