<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Strings from './strings.svelte';

  const sections = {
    strings: 'Chaines de caractères',
  };

  currentPresentation.title = 'Chaines de caractères';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Strings section={sections.strings} />
</PresentationRoot>
