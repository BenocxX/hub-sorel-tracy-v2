import { z } from 'zod';
import { seasonSchema } from './prisma-schema';

export const createSessionSchema = z.object({
  year: z.string().regex(/^\d{4}$/),
  season: seasonSchema,
});

export const deleteSessionSchema = z.object({
  id: z.number(),
});

export const toggleCurrentSessionSchema = z.object({
  id: z.number(),
});

export type CreateSessionSchema = typeof createSessionSchema;
export type DeleteSessionSchema = typeof deleteSessionSchema;
export type ToggleCurrentSessionSchema = typeof toggleCurrentSessionSchema;
