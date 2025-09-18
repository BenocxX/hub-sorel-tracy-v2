<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import Debounce from './debounce.svelte';
  import Throttle from './throttle.svelte';

  const sections = {
    intro: 'Introduction',
    debounce: 'Utilisation de debounce',
    throttle: 'Utilisation de throttle',
  };

  currentPresentation.title = 'Utilisation de debounce et throttle';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <Debounce section={sections.debounce} />
  <Throttle section={sections.throttle} />
</PresentationRoot>
