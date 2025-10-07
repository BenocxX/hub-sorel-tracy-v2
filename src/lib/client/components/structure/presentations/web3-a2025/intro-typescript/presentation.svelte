<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import Configuration from './configuration.svelte';

  const sections = {
    intro: 'Introduction',
    configuration: 'Configuration',
  };

  currentPresentation.title = 'Introduction à TypeScript';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <Configuration section={sections.configuration} />
</PresentationRoot>
