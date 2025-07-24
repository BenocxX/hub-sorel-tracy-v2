import { z } from 'zod';

export const updateNamesSchema = z.object({
  username: z.string().min(2).max(50).optional(),
  firstname: z.string().min(2).max(50).optional(),
  lastname: z.string().min(2).max(50).optional(),
});

export const resetPasswordSchema = z
  .object({
    oldPassword: z.string().min(2).max(50),
    newPassword: z.string().min(2).max(50),
    confirmNewPassword: z.string().min(2).max(50),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmNewPassword'],
  });

export const setPasswordSchema = z
  .object({
    password: z.string().min(2).max(50),
    confirmPassword: z.string().min(2).max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });

export type UpdateNamesSchema = typeof updateNamesSchema;
export type ResetPasswordSchema = typeof resetPasswordSchema;
export type SetPasswordSchema = typeof setPasswordSchema;
