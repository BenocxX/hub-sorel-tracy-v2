import { makeBreadcrumbs } from '$lib/client/components/structure/breadcrumb';

export const load = async ({ parent }) => {
  const { breadcrumbs } = await parent();

  return {
    breadcrumbs: makeBreadcrumbs(...breadcrumbs, { label: 'Introduction au HTML' }),
  };
};
