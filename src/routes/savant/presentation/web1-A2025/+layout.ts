import { makeBreadcrumbs } from '$lib/client/components/structure/breadcrumb';

export const load = () => {
  return {
    breadcrumbs: makeBreadcrumbs({ label: 'Web 1', href: '/savant/course/web1-A2025' }),
  };
};
