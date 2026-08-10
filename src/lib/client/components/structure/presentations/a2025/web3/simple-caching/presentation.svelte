<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import Expiry from './expiry.svelte';
  import Write from './write.svelte';
  import Read from './read.svelte';
  import Usage from './usage.svelte';

  const sections = {
    intro: 'Introduction',
    expiry: 'Expiration du cache',
    write: 'Mise en cache des résultats',
    read: 'Lecture du cache',
    usage: "Utilisation d'une mise en cache",
  };

  currentPresentation.title = "Utilisation d'une mise en cache";

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <Expiry section={sections.expiry} />
  <Write section={sections.write} />
  <Read section={sections.read} />
  <Usage section={sections.usage} />
</PresentationRoot>
