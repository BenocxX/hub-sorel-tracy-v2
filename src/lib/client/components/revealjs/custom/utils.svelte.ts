import { getContext, setContext } from 'svelte';
import { formatToId } from '$lib/common/tools/format';

const slideSectionSymbol = Symbol('slide-section');

export function setSlideSection(section: string) {
  setContext(slideSectionSymbol, section);
}

export function getSlideSection() {
  return getContext<string | undefined>(slideSectionSymbol);
}

// --------------------------------------------------------

const slideLinkSymbol = Symbol('slide-links');
const usedSlideIdsSymbol = Symbol('used-slide-ids');

type SlideLink = {
  title: string;
  page: number;
  /**
   * Stable identifier for this slide, unique within its presentation.
   * Unlike `page` (a position, recomputed from slide order on every build),
   * this survives slides being inserted/reordered/removed elsewhere in the
   * same presentation — anchor comments, deep links, etc. to this instead.
   */
  id: string;
};

// The value is a function, see: https://svelte.dev/docs/svelte/compiler-warnings#state_referenced_locally
export function initializeSlideLinks() {
  const slideLinks = $state<SlideLink[]>([]);
  setContext(slideLinkSymbol, () => slideLinks);
  setContext(usedSlideIdsSymbol, new Set<string>());
}

/**
 * Registers a new link in Table of Content, using the current section as its
 * title, and reserves a stable id for the slide.
 *
 * If `id` is omitted, one is derived by slugifying the current section. When
 * that would collide with an id already used elsewhere in this presentation
 * (e.g. two slides sharing a title), a numeric suffix (`-2`, `-3`, ...) is
 * appended and a warning is logged — pass an explicit `id` for anything that
 * needs to stay stable, since the suffix depends on registration order.
 *
 * Returns the final id so callers can apply it to the slide's DOM element.
 */
export function registerInTOC({ page, id }: { page: number; id?: string }): { id: string } {
  const section = getSlideSection();
  if (!section) {
    return { id: id ?? `slide-${page}` };
  }

  const usedIds = getContext<Set<string>>(usedSlideIdsSymbol);
  const slideId = reserveSlideId(usedIds, id ?? formatToId(section));

  const slideLinks = getContext<() => SlideLink[]>(slideLinkSymbol)();
  slideLinks.push({ title: section, page, id: slideId });

  return { id: slideId };
}

function reserveSlideId(usedIds: Set<string>, baseId: string): string {
  if (!usedIds.has(baseId)) {
    usedIds.add(baseId);
    return baseId;
  }

  let suffix = 2;
  while (usedIds.has(`${baseId}-${suffix}`)) suffix++;
  const disambiguated = `${baseId}-${suffix}`;
  usedIds.add(disambiguated);
  console.warn(
    `[slides] Duplicate slide id "${baseId}" in this presentation — using "${disambiguated}" instead. ` +
      `Pass an explicit id (registerInTOC({ page, id: '...' }), or "## Title {#your-id}" in Markdown) ` +
      `so it doesn't depend on slide order.`
  );
  return disambiguated;
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
