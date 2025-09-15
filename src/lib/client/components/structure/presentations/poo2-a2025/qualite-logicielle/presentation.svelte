<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import NormalisationStandard from './normalisation-standard.svelte';
  import NormeQualite from './norme-qualite.svelte';
  import Fonctionnalite from './fonctionnalite.svelte';
  import Fiabilite from './fiabilite.svelte';
  import FaciliteUtilisation from './facilite-utilisation.svelte';
  import Efficacite from './efficacite.svelte';
  import Maintenabilite from './maintenabilite.svelte';
  import Portabilite from './portabilite.svelte';
  import Conclusion from './conclusion.svelte';

  const sections = {
    intro: 'Introduction',
    normalisationStandard: 'Normalisation et standard',
    normeQualite: 'Norme de qualité logicielle (ISO 9126)',
    fonctionnalite: 'Fonctionnalité',
    fiabilite: 'Fiabilité',
    faciliteUtilisation: "Facilité d'utilisation",
    efficacite: 'Efficacité',
    maintenabilite: 'Maintenabilité',
    portabilite: 'Portabilité',
    conclusion: 'Conclusion',
  };

  currentPresentation.title = 'Qualité logicielle';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <NormalisationStandard section={sections.normalisationStandard} />
  <NormeQualite section={sections.normeQualite} />
  <Fonctionnalite section={sections.fonctionnalite} />
  <Fiabilite section={sections.fiabilite} />
  <FaciliteUtilisation section={sections.faciliteUtilisation} />
  <Efficacite section={sections.efficacite} />
  <Maintenabilite section={sections.maintenabilite} />
  <Portabilite section={sections.portabilite} />
  <Conclusion section={sections.conclusion} />
</PresentationRoot>
