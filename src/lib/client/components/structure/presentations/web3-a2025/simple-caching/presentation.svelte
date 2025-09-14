<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Caching from './caching.svelte';

  const sections = {
    caching: 'Mise en cache des résultats',
  };

  currentPresentation.title = "Utilisation d'une mise en cache";

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Caching section={sections.caching} />
</PresentationRoot>
