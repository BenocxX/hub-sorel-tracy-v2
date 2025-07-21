<script lang="ts">
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
    class: string;
  };

  const { children, class: className }: Props = $props();
</script>

<div class={cn('grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2', className)}>
  {@render children()}
</div>
