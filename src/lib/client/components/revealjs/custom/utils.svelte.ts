import { getContext, setContext } from 'svelte';

const slideSectionSymbol = Symbol('slide-section');

export function setSlideSection(section: string) {
  setContext(slideSectionSymbol, section);
}

export function getSlideSection() {
  return getContext<string | undefined>(slideSectionSymbol);
}

// --------------------------------------------------------

const slideLinkSymbol = Symbol('slide-links');

type SlideLink = {
  title: string;
  page: number;
};

// The value is a function, see: https://svelte.dev/docs/svelte/compiler-warnings#state_referenced_locally
export function initializeSlideLinks() {
  const slideLinks = $state<SlideLink[]>([]);
  setContext(slideLinkSymbol, () => slideLinks);
}

/** Registers a new link in Table of Content, using the current section has its title. */
export function registerInTOC({ page }: { page: number }) {
  const section = getSlideSection();
  if (!section) {
    return;
  }

  const slideLinks = getContext<() => SlideLink[]>(slideLinkSymbol)();
  slideLinks.push({ title: section, page });
}

export function getSlideLinks() {
  return getContext<() => SlideLink[]>(slideLinkSymbol)();
}

// ========================================================

export type SlideSectionProps = {
  section: string;
};

export type CodeLanguage =
  | 'HTML'
  | 'PHP'
  | 'CSS'
  | 'XML'
  | 'JS'
  | 'TS'
  | 'Bash'
  | 'JSON'
  | 'YAML'
  | 'SCSS'
  | 'SASS'
  | 'Java'
  | 'C'
  | 'Dockerfile'
  | 'Makefile';
