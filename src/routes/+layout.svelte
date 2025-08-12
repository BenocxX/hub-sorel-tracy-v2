<script lang="ts">
  import '../app.css';
  import { Toaster } from '$lib/client/components/ui/sonner/index.js';

  const { children } = $props();
</script>

<Toaster />
{@render children()}
