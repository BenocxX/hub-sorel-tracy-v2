<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Fichiers from './fichiers.svelte';

  const sections = {
    fichiers: 'Utilisation de plusieurs fichiers C',
  };

  currentPresentation.title = 'Utilisation de plusieurs fichiers C';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Fichiers section={sections.fichiers} />
</PresentationRoot>
