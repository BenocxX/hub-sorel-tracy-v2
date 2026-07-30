<script lang="ts">
  import type { Snippet } from 'svelte';
  import BasicSlide from './basic-slide.svelte';
  import { setSlideSection, registerInTOC } from './utils.svelte';

  type Props = {
    title: string;
    page: number;
    children: Snippet;
  };

  const { title, page, children }: Props = $props();

  // Both calls must run synchronously at component init — setContext() requires it.
  setSlideSection(title);
  registerInTOC({ page });
</script>

<BasicSlide {title}>
  {@render children()}
</BasicSlide>
