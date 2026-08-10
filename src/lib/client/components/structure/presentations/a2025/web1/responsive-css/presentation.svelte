<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import MediaQueriesBase from './media-queries-base.svelte';
  import Dimensions from './dimensions.svelte';
  import Orientations from './orientations.svelte';
  import Couleurs from './couleurs.svelte';
  import Negation from './negation.svelte';
  import Combinaison from './combinaison.svelte';
  import Link from './link.svelte';

  const sections = {
    introduction: 'Introduction',
    mediaQueriesBase: 'Media queries de base',
    dimensions: 'Requêtes sur les dimensions',
    orientations: "Requêtes sur l'orientation",
    couleurs: 'Requêtes sur les couleurs',
    negation: 'Négation',
    combinaison: 'Combinaison',
    link: 'Media queries sur un fichier CSS',
  };

  currentPresentation.title = 'Responsive CSS';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.introduction} />
  <MediaQueriesBase section={sections.mediaQueriesBase} />
  <Dimensions section={sections.dimensions} />
  <Orientations section={sections.orientations} />
  <Couleurs section={sections.couleurs} />
  <Negation section={sections.negation} />
  <Combinaison section={sections.combinaison} />
  <Link section={sections.link} />
</PresentationRoot>
