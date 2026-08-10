<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import ObjectifsEtAvantages from './objectifs-et-avantages.svelte';
  import PrincipesDeBases from './principes-de-bases.svelte';
  import Branches from './branches.svelte';
  import InclusionsExclusions from './inclusions-exclusions.svelte';

  const sections = {
    intro: 'Introduction',
    objectifsEtAvantages: 'Objectifs et avantages',
    principesDeBase: 'Principes de base',
    branches: 'Branches',
    inclusionsEtExclusions: 'Inclusions et exclusions',
  };

  currentPresentation.title = 'Gestionnaire de sources';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <ObjectifsEtAvantages section={sections.objectifsEtAvantages} />
  <PrincipesDeBases section={sections.principesDeBase} />
  <Branches section={sections.branches} />
  <InclusionsExclusions section={sections.inclusionsEtExclusions} />
</PresentationRoot>
