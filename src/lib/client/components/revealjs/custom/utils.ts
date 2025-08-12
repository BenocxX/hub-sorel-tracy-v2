import { getContext, setContext } from 'svelte';

const slideSectionSymbol = Symbol('slide-section');

export function setSlideSection(section: string) {
  setContext(slideSectionSymbol, section);
}

export function getSlideSection() {
  return getContext<string | undefined>(slideSectionSymbol);
}
