<script lang="ts">
  import { getPresentationComponent } from '$lib/client/components/structure/presentations/index.js';

  const { data } = $props();

  const PresentationComponent = getPresentationComponent(data.presentation);
</script>

{#if PresentationComponent}
  <PresentationComponent />
{:else}
  <span>Aucune présentation trouvée...</span>
{/if}
