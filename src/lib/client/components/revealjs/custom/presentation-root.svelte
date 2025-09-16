<script lang="ts">
  import { Presentation } from '$lib/client/components/revealjs/index';
  import type { Snippet } from 'svelte';
  import TableOfContentSlide from './table-of-content-slide.svelte';
  import TitleSlide from './title-slide.svelte';
  import { dev } from '$app/environment';

  type Props = {
    children: Snippet;
  };

  const { children }: Props = $props();
</script>

<Presentation class="!w-[85%]" options={{ reload: dev ? true : false }}>
  <TitleSlide />
  <TableOfContentSlide />
  {@render children()}
</Presentation>
