<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import ConceptsBases from './concepts-bases.svelte';
  import RappelHeritage from './rappel-heritage.svelte';
  import Abstraction from './abstraction.svelte';
  import Finalisation from './finalisation.svelte';
  import RappelRedefinition from './rappel-redefinition.svelte';
  import ReglesHeritages from './regles-heritages.svelte';

  const sections = {
    conceptsBases: 'Concepts de bases et vocabulaires',
    rappelHeritage: "Rappels sur l'héritage",
    rappelRedefinition: 'Rappels sur la redéfinition',
    reglesHeritages: "Règles sur l'héritages",
    finalisation: 'Finalisation',
    abstraction: 'Abstraction',
  };

  currentPresentation.title = 'Concepts objets avancés';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <ConceptsBases section={sections.conceptsBases} />
  <RappelHeritage section={sections.rappelHeritage} />
  <RappelRedefinition section={sections.rappelRedefinition} />
  <ReglesHeritages section={sections.reglesHeritages} />
  <Finalisation section={sections.finalisation} />
  <Abstraction section={sections.abstraction} />
</PresentationRoot>
