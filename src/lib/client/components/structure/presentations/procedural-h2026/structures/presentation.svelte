<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Structures from './structures.svelte';

  const sections = {
    structures: 'Utilisation des structures',
  };

  currentPresentation.title = 'Utilisation des structures';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Structures section={sections.structures} />
</PresentationRoot>
