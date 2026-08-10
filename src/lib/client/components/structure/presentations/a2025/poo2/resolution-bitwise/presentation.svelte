<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Bitwise from './bitwise.svelte';

  const sections = {
    bitwise: 'Résolution par expression Bitwise',
  };

  currentPresentation.title = 'Résolution par expression bitwise';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Bitwise section={sections.bitwise} />
</PresentationRoot>
