import { z } from 'zod';

export const deleteSessionSchema = z.object({
  id: z.number(),
});

export type DeleteSessionSchema = typeof deleteSessionSchema;
