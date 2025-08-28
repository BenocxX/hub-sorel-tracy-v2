import { resolve } from '$app/paths';
import { makeBreadcrumbs } from '$lib/client/components/structure/breadcrumb/index.js';
import { db } from '$lib/server/prisma/index.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ params }) => {
  const presentation = await db.presentation.findFirst({
    where: { AND: [{ id: Number(params.presentationId) }, { courseId: Number(params.courseId) }] },
    include: { course: { select: { name: true } } },
  });

  if (!presentation) {
    throw redirect(
      303,
      resolve('/savant/courses/[courseId=number]', { courseId: params.courseId })
    );
  }

  if (presentation.url) {
    throw redirect(303, presentation.url);
  }

  return {
    breadcrumbs: makeBreadcrumbs(
      {
        label: presentation.course.name,
        href: resolve('/savant/courses/[courseId=number]', { courseId: params.courseId }),
      },
      { label: presentation.title }
    ),
    presentation,
  };
};
