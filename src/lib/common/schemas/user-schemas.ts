import { z } from 'zod';
import { roleSchema } from './prisma-schema';

export const changeRoleSchema = z.object({
  id: z.string().min(1),
  role: roleSchema,
});

export const deleteUserSchema = z.object({
  id: z.string().min(1),
});

export type ChangeRoleSchema = typeof changeRoleSchema;
export type DeleteUserSchema = typeof deleteUserSchema;
