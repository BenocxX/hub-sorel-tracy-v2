<script lang="ts">
  import { Presentation } from '$lib/client/components/revealjs/index';
  import type { Snippet } from 'svelte';
  import TableOfContentSlide from './table-of-content-slide.svelte';
  import TitleSlide from './title-slide.svelte';

  type Props = {
    sections: Record<string, string>;
    children: Snippet;
  };

  const { sections, children }: Props = $props();
</script>

<Presentation class="!w-[85%]">
  <TitleSlide />
  <TableOfContentSlide slideLinks={Object.values(sections)} />
  {@render children()}
</Presentation>
