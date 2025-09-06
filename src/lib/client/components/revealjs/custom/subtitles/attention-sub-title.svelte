<script lang="ts">
  import { TriangleAlert } from 'lucide-svelte';
  import SubTitle from './sub-title.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    children?: Snippet;
  };

  const { children }: Props = $props();
</script>

<!-- class="flex items-center gap-2 text-red-500 opacity-100 dark:text-red-400 dark:opacity-100" -->
<SubTitle class="flex items-center gap-2 text-destructive opacity-100 dark:opacity-100">
  <TriangleAlert />
  <span>
    {#if children}
      {@render children()}
    {:else}
      ATTENTION
    {/if}
  </span>
  <TriangleAlert />
</SubTitle>
