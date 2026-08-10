<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Typedef from './typedef.svelte';
  import Structures from './structures.svelte';

  const sections = {
    typedef: 'Le mot clé typedef',
    structures: 'Les structures',
  };

  currentPresentation.title = 'Utilisation des structures';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Typedef section={sections.typedef} />
  <Structures section={sections.structures} />
</PresentationRoot>
