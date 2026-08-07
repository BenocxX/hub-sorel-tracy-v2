<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import Anatomie from './anatomie.svelte';
  import AvantagesInconvenients from './avantages-inconvenients.svelte';
  import JUnit from './junit.svelte';
  import EtatInitial from './etat-initial.svelte';
  import AnnotationsAssertions from './annotations-assertions.svelte';
  import Couverture from './couverture.svelte';
  import TDD from './tdd.svelte';
  import Conseils from './conseils.svelte';
  import AutresTests from './autres-tests.svelte';

  const sections = {
    intro: 'Introduction',
    anatomie: "Anatomie d'un test unitaire",
    avantagesInconvenients: 'Avantages et inconvénients',
    junit: 'Framework JUnit',
    etatInitial: 'État initial',
    annotationsAssertions: 'Annotations et assertions',
    couverture: 'Couverture de tests',
    tdd: 'Développement piloté par les tests',
    conseils: 'Conseils',
    autresTests: 'Autres types de tests',
  };

  currentPresentation.title = 'Tests unitaires';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <Anatomie section={sections.anatomie} />
  <AvantagesInconvenients section={sections.avantagesInconvenients} />
  <JUnit section={sections.junit} />
  <EtatInitial section={sections.etatInitial} />
  <AnnotationsAssertions section={sections.annotationsAssertions} />
  <Couverture section={sections.couverture} />
  <TDD section={sections.tdd} />
  <Conseils section={sections.conseils} />
  <AutresTests section={sections.autresTests} />
</PresentationRoot>
