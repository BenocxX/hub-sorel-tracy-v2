<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import ProprietesParent from './proprietes-parent.svelte';
  import ProprietesEnfants from './proprietes-enfants.svelte';

  const sections = {
    intro: "C'est quoi les flexbox?",
    proprietesParent: 'Propriétés du parent',
    proprietesEnfants: 'Propriétés des enfants',
  };

  currentPresentation.title = "L'utilisation des Flexbox";

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <ProprietesParent section={sections.proprietesParent} />
  <ProprietesEnfants section={sections.proprietesEnfants} />
</PresentationRoot>
