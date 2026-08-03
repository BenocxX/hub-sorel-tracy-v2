<script module lang="ts">
  // Re-export components so mdsvex can reference them as Components.*.
  // mdsvex generates: import Layout, * as Components from '...layout.svelte'
  // These named exports make Components.MdSlide, Components.Bold, etc. resolve correctly.
  export { default as MdSlide } from './md-slide.svelte';
  export { default as Bold } from './bold.svelte';
  export { default as Italic } from './italic.svelte';
  export { default as BoldItalic } from './bold-italic.svelte';
  export { default as InlineCodeBlock } from './inline-code-block.svelte';
  export { default as CodeBlock } from './code-block.svelte';
  export { default as MultiCodeBlock } from './multi-code-block.svelte';
  export { default as List } from './list.svelte';
  export { default as Image } from './image.svelte';
  export { default as QuoteBlock } from './quote-block.svelte';
  export { default as SideBySide } from './side-by-side.svelte';
  export { default as Columns } from './columns.svelte';
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
