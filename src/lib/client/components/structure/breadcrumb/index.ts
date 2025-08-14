import BreadcrumbRenderer from './breadcrumb-renderer.svelte';

type Breadcrumb = {
  label: string;
  href?: string;
};

/** Simple helper function to provide typesafety when constructing breadcrumbs */
function makeBreadcrumbs(...breadcrumbs: Breadcrumb[]) {
  return breadcrumbs;
}

export { type Breadcrumb, makeBreadcrumbs, BreadcrumbRenderer };
