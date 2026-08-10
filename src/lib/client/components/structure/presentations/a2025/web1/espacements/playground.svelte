<script lang="ts">
  import EspacementPlayground from '$lib/client/components/animator/playgrounds/espacement-playground.svelte';
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 19 });
</script>

<BasicSlide>
  <EspacementPlayground />
</BasicSlide>
