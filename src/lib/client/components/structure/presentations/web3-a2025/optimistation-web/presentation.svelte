<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import Debounce from './debounce.svelte';
  import Caching from './caching.svelte';
  import Throttle from './throttle.svelte';
  import Event from './event.svelte';

  const sections = {
    intro: 'Introduction',
    debounce: 'Utilisation de debounce',
    throttle: 'Utilisation de throttle',
    caching: 'Mise en cache des résultats',
    event: 'Optimisation de la propagation des événements',
  };

  currentPresentation.title = "Optimisation des événements et des appels d'API";

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <Debounce section={sections.debounce} />
  <Throttle section={sections.throttle} />
  <Caching section={sections.caching} />
  <Event section={sections.event} />
</PresentationRoot>
