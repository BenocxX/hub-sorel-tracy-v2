<script module lang="ts">
  // Re-export MdSlide so mdsvex can reference it as Components.MdSlide.
  // mdsvex generates: import Layout, * as Components from '...layout.svelte'
  // This named export makes Components.MdSlide resolve to our slide wrapper.
  export { default as MdSlide } from './md-slide.svelte';
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';
  import PresentationRoot from './presentation-root.svelte';
  import { currentPresentation } from '../store.svelte';
  import { initializeSlideLinks } from './utils.svelte';

  type Props = {
    title: string;
    children: Snippet;
    // mdsvex passes all frontmatter fields as props; extras are ignored
    [key: string]: unknown;
  };

  const { title, children }: Props = $props();

  // Set the presentation title from frontmatter — used by TitleSlide and BasicSlide headers
  currentPresentation.title = title;

  // Initialize the slide links context BEFORE children render,
  // so MdSlide's registerInTOC() calls have a context to write into.
  initializeSlideLinks();
</script>

<PresentationRoot>
  {@render children()}
</PresentationRoot>
