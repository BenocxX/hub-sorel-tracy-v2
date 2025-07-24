<script lang="ts">
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();
</script>

<h3 class="mt-2 text-lg/7 font-medium tracking-tight text-foreground">{@render children()}</h3>
