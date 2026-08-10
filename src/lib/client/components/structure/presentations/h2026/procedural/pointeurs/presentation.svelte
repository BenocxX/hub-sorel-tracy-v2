<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Adresses from './adresses.svelte';
  import Pointeurs from './pointeurs.svelte';

  const sections = {
    adresses: 'Les adresses mémoire',
    pointeurs: 'Les pointeurs',
  };

  currentPresentation.title = 'Manipulation de la mémoires';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Adresses section={sections.adresses} />
  <Pointeurs section={sections.pointeurs} />
</PresentationRoot>
