import { sequence } from '@sveltejs/kit/hooks';
import { handleSession } from '$lib/server/hooks/handle-session';
import { handleGuard } from '$lib/server/hooks/handle-guard';
import { handlePublicApi } from '$lib/server/hooks/handle-public-api';

export const handle = sequence(handleSession, handleGuard, handlePublicApi);
