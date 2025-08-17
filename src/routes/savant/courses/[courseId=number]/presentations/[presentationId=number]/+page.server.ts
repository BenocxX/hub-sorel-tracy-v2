import { makeBreadcrumbs } from '$lib/client/components/structure/breadcrumb/index.js';
import { db } from '$lib/server/prisma/index.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
  const presentation = await db.presentation.findFirst({
    where: { AND: [{ id: Number(params.presentationId) }, { courseId: Number(params.courseId) }] },
    include: { course: { select: { name: true } } },
  });

  if (!presentation) {
    throw redirect(303, '/savant');
  }

  if (presentation.url) {
    throw redirect(303, presentation.url);
  }

  return {
    breadcrumbs: makeBreadcrumbs(
      { label: presentation.course.name, href: `/savant/courses/${params.courseId}` },
      { label: presentation.title }
    ),
    presentation,
  };
};
