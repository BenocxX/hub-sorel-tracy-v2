<script lang="ts">
  import type { Snippet } from 'svelte';

  type Props = { children?: Snippet | string };

  const { children }: Props = $props();
</script>

{#if children}
  {#if typeof children === 'function'}
    {@render children()}
  {:else}
    {children}
  {/if}
{/if}
