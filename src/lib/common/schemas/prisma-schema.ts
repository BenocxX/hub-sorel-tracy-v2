import { Role } from '@prisma/client';
import { z } from 'zod';

export const roleSchema = z.nativeEnum(Role);
