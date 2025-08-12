import { getContext, setContext } from 'svelte';

const slideSectionSymbol = Symbol('slide-section');

export function setSlideSection(section: string) {
  setContext(slideSectionSymbol, section);
}

export function getSlideSection() {
  return getContext<string | undefined>(slideSectionSymbol);
}

export type SlideSectionProps = {
  section: string;
};

export type CodeLanguage =
  | 'html'
  | 'css'
  | 'xml'
  | 'js'
  | 'bash'
  | 'ts'
  | 'json'
  | 'scss'
  | 'sass'
  | 'java';
