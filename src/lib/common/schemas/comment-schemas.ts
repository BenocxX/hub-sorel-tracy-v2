import { z } from 'zod';

export const createCommentSchema = z.object({
  slideId: z.string().min(1),
  content: z.string().trim().min(1).max(2000),
  // Set when replying to a top-level comment; null for a new top-level comment (a "question").
  parentId: z.number().nullable().default(null),
});

export const deleteCommentSchema = z.object({
  commentId: z.number(),
});

export const resolveCommentSchema = z.object({
  commentId: z.number(),
  resolved: z.boolean(),
});

export type CreateCommentSchema = typeof createCommentSchema;
export type DeleteCommentSchema = typeof deleteCommentSchema;
export type ResolveCommentSchema = typeof resolveCommentSchema;
