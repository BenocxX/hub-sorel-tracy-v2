<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Event from './event.svelte';

  const sections = {
    event: 'Event bubbling',
  };

  currentPresentation.title = "Optimisation d'événements";

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Event section={sections.event} />
</PresentationRoot>
