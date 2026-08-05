<script lang="ts">
  import type { Snippet } from 'svelte';
  import BasicSlide from './basic-slide.svelte';
  import { setSlideSection, registerInTOC } from './utils.svelte';

  type Props = {
    title: string;
    page: number;
    /** Explicit stable id, set via "## Title {#your-id}" in the source markdown. */
    id?: string;
    children: Snippet;
  };

  const { title, page, id, children }: Props = $props();

  // Both calls must run synchronously at component init — setContext() requires it.
  setSlideSection(title);
  const { id: slideId } = registerInTOC({ page, id });
</script>

<BasicSlide {title} id={slideId}>
  {@render children()}
</BasicSlide>
