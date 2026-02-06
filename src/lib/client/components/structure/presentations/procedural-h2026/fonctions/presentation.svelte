<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Fonctions from './fonctions.svelte';

  const sections = {
    fonctions: 'Utilisation de fonctions',
  };

  currentPresentation.title = 'Utilisation de fonctions';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Fonctions section={sections.fonctions} />
</PresentationRoot>
