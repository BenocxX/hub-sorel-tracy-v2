import { z } from 'zod';

export const createPresentationSchema = z.object({
  url: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  chapter: z.number().min(1).default(1),
  isExternal: z.boolean().default(false),
  isLocked: z.boolean().default(true),
  abbreviation: z.string().min(1),
});

export const modifyPresentationSchema = z.object({
  id: z.number(),
  url: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  chapter: z.number().min(1).default(1),
  isExternal: z.boolean().default(false),
  isLocked: z.boolean().default(true),
  abbreviation: z.string().min(1),
});

export const deletePresentationSchema = z.object({
  presentationId: z.number(),
});

export type CreatePresentationSchema = typeof createPresentationSchema;
export type ModifyPresentationSchema = typeof modifyPresentationSchema;
export type DeletePresentationSchema = typeof deletePresentationSchema;
