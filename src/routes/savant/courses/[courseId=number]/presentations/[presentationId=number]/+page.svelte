<script lang="ts">
  import { getPresentationComponent } from '$lib/client/components/structure/presentations/index.js';

  const { data } = $props();

  const PresentationComponent = getPresentationComponent(data.presentation);
</script>

<svelte:head>
  <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
</svelte:head>

{#if PresentationComponent}
  <PresentationComponent />
{:else}
  <span>Aucune présentation trouvée...</span>
{/if}
