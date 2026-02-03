<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Tableaux from './tableaux.svelte';

  const sections = {
    tableaux: 'Tableaux',
  };

  currentPresentation.title = 'Tableaux';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Tableaux section={sections.tableaux} />
</PresentationRoot>
