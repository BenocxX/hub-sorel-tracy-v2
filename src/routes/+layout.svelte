<script lang="ts">
  import '../app.css';
  import '$lib/client/highlightjs-dark.css';
  import '$lib/client/highlightjs-light.css';
  import { Toaster } from '$lib/client/components/ui/sonner/index.js';

  const { children } = $props();
</script>

<Toaster />
{@render children()}
