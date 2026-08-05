import type Reveal from 'reveal.js';

let slides = $state() as Reveal.Api;

export function setPresentation(reveal: Reveal.Api) {
  slides = reveal;
}

export function getPresentation() {
  return {
    get slides() {
      return slides;
    },
  };
}

export const currentPresentation = $state({
  title: '',
  subTitle: '',
  /**
   * The stable id (see registerInTOC in custom/utils.svelte.ts) of the slide currently on
   * screen, kept in sync with Reveal's `slidechanged`/`ready` events in presentation.svelte.
   * `undefined` when the current slide has no id (title/TOC slides, or legacy slides that
   * haven't opted into one) — consumers should treat that as "nothing to anchor to here".
   */
  currentSlideId: undefined as string | undefined,
});
