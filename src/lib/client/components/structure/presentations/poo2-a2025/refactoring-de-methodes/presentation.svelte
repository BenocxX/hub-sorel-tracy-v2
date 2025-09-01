<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import SimplifierAppelMethodes from './simplifier-appel-methodes.svelte';
  import CompositionMethodes from './composition-methodes.svelte';
  import SimplifierConditions from './simplifier-conditions.svelte';

  const sections = {
    intro: 'Introduction',
    simplifierAppelMethodes: "Simplifier l'appel des méthodes",
    compositionMethodes: 'Composition des méthodes',
    simplifierConditions: 'Simplifier les conditions',
  };

  currentPresentation.title = 'Refactoring de méthodes';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <SimplifierAppelMethodes section={sections.simplifierAppelMethodes} />
  <CompositionMethodes section={sections.compositionMethodes} />
  <SimplifierConditions section={sections.simplifierConditions} />
</PresentationRoot>
