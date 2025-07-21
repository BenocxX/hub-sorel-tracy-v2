<script lang="ts">
  import type { Snippet } from 'svelte';

  const { children }: { children: Snippet } = $props();
</script>

<h5 class="text-sm/4 font-semibold text-primary">{@render children()}</h5>
