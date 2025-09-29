<script lang="ts">
  import '../app.css';
  import '$lib/client/highlightjs-dark.css';
  import '$lib/client/highlightjs-light.css';
  import { Toaster } from '$lib/client/components/ui/sonner/index.js';
  import HubLogoFavIcon from '$lib/client/assets/images/hub-logo-no-text-removed-bg.ico';

  const { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={HubLogoFavIcon} />
  <title>Hub du Cégep de Sorel-Tracy</title>
</svelte:head>

<Toaster />
{@render children()}
