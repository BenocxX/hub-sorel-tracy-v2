<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Semantique from './semantique.svelte';
  import ProprieteIntellectuelle from './propriete-intellectuelle.svelte';
  import UtilisationHtml from './utilisation-html.svelte';
  import UtilisationCss from './utilisation-css.svelte';

  const sections = {
    semantique: 'Sémantique',
    proprieteIntellectuelle: 'Propriété intellectuelle',
    utilisationHtml: 'Utilisation depuis la structure HTML',
    utilisationCss: 'Utilisation depuis la structure CSS',
  };

  currentPresentation.title = "Traitement d'images";

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Semantique section={sections.semantique} />
  <ProprieteIntellectuelle section={sections.proprieteIntellectuelle} />
  <UtilisationHtml section={sections.utilisationHtml} />
  <UtilisationCss section={sections.utilisationCss} />
</PresentationRoot>
