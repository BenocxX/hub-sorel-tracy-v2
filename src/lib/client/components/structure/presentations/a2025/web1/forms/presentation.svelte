<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import BoutonsSoumission from './boutons-soumission.svelte';
  import ChampsCache from './champs-cache.svelte';
  import ChampsSaisieTextuelle from './champs-saisie-textuelle.svelte';
  import ChampsSelection from './champs-selection.svelte';
  import ChampsTeleversement from './champs-televersement.svelte';
  import Communication from './communication.svelte';
  import ConteneurFormulaire from './conteneur-formulaire.svelte';
  import NouvellesBalises from './nouvelles-balises.svelte';

  const sections = {
    introduction: 'Introduction',
    communication: 'Principe de communication',
    conteneurFormulaire: 'Conteneur de formulaire',
    champsSaisieTextuelle: 'Champs de saisie textuelle',
    champsSelection: 'Champs de sélection',
    champsTeleversement: 'Champs de téléversement',
    champsCache: 'Champs caché',
    boutonsSoumission: 'Boutons et soumission',
    nouvellesBalises: 'Nouvelles balises HTML 5',
  };

  currentPresentation.title = 'Les formulaires HTML';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.introduction} />
  <Communication section={sections.communication} />
  <ConteneurFormulaire section={sections.conteneurFormulaire} />
  <ChampsSaisieTextuelle section={sections.champsSaisieTextuelle} />
  <ChampsSelection section={sections.champsSelection} />
  <ChampsTeleversement section={sections.champsTeleversement} />
  <ChampsCache section={sections.champsCache} />
  <BoutonsSoumission section={sections.boutonsSoumission} />
  <NouvellesBalises section={sections.nouvellesBalises} />
</PresentationRoot>
