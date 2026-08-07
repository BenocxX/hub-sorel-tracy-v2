<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import StyleModerne from './style-moderne.svelte';
  import PseudoclassFocus from './pseudoclass-focus.svelte';
  import RedimensionnerTextarea from './redimensionner-textarea.svelte';
  import StyliserTeleversement from './styliser-televersement.svelte';
  import ProprieteOutline from './propriete-outline.svelte';

  const sections = {
    styleModerne: 'Style Moderne',
    proprieteOutline: 'Propriété outline',
    pseudoclassFoocus: 'Pseudo-class :focus',
    redimensionnerTextarea: 'Redimensionner un textarea',
    styliserTeleversement: 'Styliser un champ de téléversement',
  };

  currentPresentation.title = 'Styliser un formulaire';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <StyleModerne section={sections.styleModerne} />
  <ProprieteOutline section={sections.proprieteOutline} />
  <PseudoclassFocus section={sections.pseudoclassFoocus} />
  <RedimensionnerTextarea section={sections.redimensionnerTextarea} />
  <StyliserTeleversement section={sections.styliserTeleversement} />
</PresentationRoot>
