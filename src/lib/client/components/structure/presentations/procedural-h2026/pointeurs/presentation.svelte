<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Pointeurs from './pointeurs.svelte';

  const sections = {
    pointeurs: 'Manipulation de la mémoires',
  };

  currentPresentation.title = 'Manipulation de la mémoires';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Pointeurs section={sections.pointeurs} />
</PresentationRoot>
