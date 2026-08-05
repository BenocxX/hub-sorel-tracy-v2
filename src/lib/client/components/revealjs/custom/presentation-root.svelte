<script lang="ts">
  import { Presentation } from '$lib/client/components/revealjs/index';
  import type { Snippet } from 'svelte';
  import TableOfContentSlide from './table-of-content-slide.svelte';
  import TitleSlide from './title-slide.svelte';
  import SlideCommentsSection from '$lib/client/components/structure/comments/slide-comments-section.svelte';
  import { dev } from '$app/environment';

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<Presentation class="!w-[85%]">
  <TitleSlide />
  <TableOfContentSlide />
  {@render children()}
</Presentation>

<!-- Below the fixed-height Reveal deck, in normal document flow — reached by scrolling. -->
<SlideCommentsSection />
