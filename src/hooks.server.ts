import { handleGuard } from '$lib/server/hooks/handle-guard';
import { handleSession } from '$lib/server/hooks/handle-session';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(handleSession, handleGuard);
