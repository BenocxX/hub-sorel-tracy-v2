import BreadcrumbRenderer from './breadcrumb-renderer.svelte';

type Breadcrumb = {
  label: string;
  href?: string;
};

function makeBreadcrumbs(...breadcrumbs: Breadcrumb[]) {
  return breadcrumbs;
}

export { type Breadcrumb, makeBreadcrumbs, BreadcrumbRenderer };
