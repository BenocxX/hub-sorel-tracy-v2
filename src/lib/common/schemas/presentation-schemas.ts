import { z } from 'zod';

export const createPresentationSchema = z.object({
  url: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  chapter: z.number(),
  isExternal: z.boolean().default(false),
});

export const deletePresentationSchema = z.object({
  presentationId: z.number(),
});

export type CreatePresentationSchema = typeof createPresentationSchema;
export type DeletePresentationSchema = typeof deletePresentationSchema;
