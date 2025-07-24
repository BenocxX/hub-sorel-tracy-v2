import type { Session } from './prisma-types';

export type PublicSessionDTO = Omit<Session, 'id' | 'userId'>;
