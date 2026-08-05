import { db } from '$lib/server/prisma/index.js';
import { json } from '@sveltejs/kit';

/**
 * Marks one notification read (`{ id }` in the body) or all of the current user's read (no `id`).
 * Scoped to `userId` in the query itself rather than a separate ownership check — marking a
 * notification that isn't the caller's (or doesn't exist) just matches zero rows, no error.
 */
export const POST = async ({ request, locals }) => {
  const user = locals.user!;
  const body = await request.json().catch(() => ({}));
  const id = typeof body?.id === 'number' ? body.id : undefined;

  await db.notification.updateMany({
    where: { userId: user.id, read: false, ...(id !== undefined ? { id } : {}) },
    data: { read: true },
  });

  return json({ success: true });
};
