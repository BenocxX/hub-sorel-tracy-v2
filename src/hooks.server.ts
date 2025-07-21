import { handleSession } from '$lib/hooks/server/handle-session';
import { handleGuard } from '$lib/hooks/server/handle-guard';
import { sequence } from '@sveltejs/kit/hooks';

export const handle = sequence(handleSession, handleGuard);
