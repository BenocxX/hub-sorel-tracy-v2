<script lang="ts">
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();
</script>

<p class="mt-2 max-w-lg text-sm/6 text-foreground-discreet">{@render children()}</p>
