import { Role } from '@prisma/client';
import { z } from 'zod';

export const changeRoleSchema = z.object({
  id: z.string().min(1),
  role: z.nativeEnum(Role),
});

export const deleteUserSchema = z.object({
  id: z.string().min(1),
});

export type ChangeRoleSchema = typeof changeRoleSchema;
export type DeleteUserSchema = typeof deleteUserSchema;
