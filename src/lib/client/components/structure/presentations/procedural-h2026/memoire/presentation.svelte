<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Memoire from './memoire.svelte';

  const sections = {
    memoire: 'Représentation de la mémoire',
  };

  currentPresentation.title = 'Représentation de la mémoire';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Memoire section={sections.memoire} />
</PresentationRoot>
