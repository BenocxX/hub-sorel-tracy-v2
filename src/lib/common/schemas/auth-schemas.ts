import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(2).max(50),
  password: z.string().min(8).max(50),
});

export const registerSchema = z
  .object({
    username: z.string().min(2).max(50),
    firstname: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
    password: z.string().min(8).max(50),
    confirmPassword: z.string().min(8).max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });

export type LoginSchema = typeof loginSchema;
export type RegisterSchema = typeof registerSchema;
