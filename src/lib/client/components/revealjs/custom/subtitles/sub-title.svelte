<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { Snippet } from 'svelte';

  type Props = {
    class?: string;
    children: Snippet;
  };

  const { class: className, children }: Props = $props();
</script>

<h4 class={cn('text-foreground-discreet sm:text-xl', className)}>
  {@render children()}
</h4>
