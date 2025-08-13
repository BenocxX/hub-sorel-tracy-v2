import { makeBreadcrumbs } from '$lib/client/components/structure/breadcrumb';

export const load = (event) => {
  return {
    breadcrumbs: makeBreadcrumbs(
      { label: 'Web 1', href: '/savant/course/1' },
      { label: 'Intro HTML' }
    ),
  };
};
