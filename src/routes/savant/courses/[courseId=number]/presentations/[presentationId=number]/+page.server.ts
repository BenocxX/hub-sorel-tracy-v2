import { db } from '$lib/server/prisma/index.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
  const presentation = await db.presentation.findFirst({
    where: { AND: [{ id: Number(params.presentationId) }, { courseId: Number(params.courseId) }] },
  });

  if (!presentation) {
    throw redirect(303, '/savant');
  }

  if (presentation.url) {
    throw redirect(303, presentation.url);
  }

  return { presentation };
};
