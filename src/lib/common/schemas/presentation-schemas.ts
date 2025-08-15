import { z } from 'zod';

export const createPresentationSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  chapter: z.number().min(1).default(1),
  url: z.string().nullable(),
  componentId: z.string().nullable(),
  isLocked: z.boolean().default(true),
});

export const modifyPresentationSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  description: z.string().min(1),
  chapter: z.number().min(1).default(1),
  url: z.string().nullable(),
  componentId: z.string().nullable(),
  isLocked: z.boolean().default(true),
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
