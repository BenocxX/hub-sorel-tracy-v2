<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import EventBubbling from './event-bubbling.svelte';
  import EventDelegation from './event-delegation.svelte';

  const sections = {
    intro: 'Introduction',
    eventBubbling: 'Event bubbling',
    eventDelegation: 'Event delegation',
  };

  currentPresentation.title = "Optimisation d'événements";

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <EventBubbling section={sections.eventBubbling} />
  <EventDelegation section={sections.eventDelegation} />
</PresentationRoot>
