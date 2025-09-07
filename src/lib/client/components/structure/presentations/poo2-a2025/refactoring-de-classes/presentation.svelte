<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import ConstructionClasse from './construction-classe.svelte';
  import Cohesion from './cohesion.svelte';
  import Couplage from './couplage.svelte';

  const sections = {
    constructionClasse: "Construction d'une classe",
    cohesion: 'Cohésion',
    couplage: 'Couplage',
  };

  currentPresentation.title = 'Refactoring de méthodes';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <ConstructionClasse section={sections.constructionClasse} />
  <Cohesion section={sections.cohesion} />
  <Couplage section={sections.couplage} />
</PresentationRoot>
