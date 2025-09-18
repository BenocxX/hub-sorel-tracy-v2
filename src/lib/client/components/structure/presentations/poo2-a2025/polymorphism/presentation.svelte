<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Polymorphism from './polymorphism.svelte';
  import Interfaces from './interfaces.svelte';

  const sections = {
    polymorphism: 'Polymorphisme',
    interfaces: 'Interfaces',
  };

  currentPresentation.title = 'Polymorphisme et interfaces';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Polymorphism section={sections.polymorphism} />
  <Interfaces section={sections.interfaces} />
</PresentationRoot>
