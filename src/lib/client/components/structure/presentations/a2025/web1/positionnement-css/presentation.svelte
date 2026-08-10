<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import PositionnementStatique from './positionnement-statique.svelte';
  import PositionnementRelatif from './positionnement-relatif.svelte';
  import PositionnementFixe from './positionnement-fixe.svelte';
  import PositionnementAbsolu from './positionnement-absolu.svelte';
  import Profondeur from './profondeur.svelte';
  import Debordement from './debordement.svelte';

  const sections = {
    intro: 'Introduction',
    positionnementStatique: 'Positionnement statique',
    positionnementRelatif: 'Positionnement relatif',
    positionnementFixe: 'Positionnement fixé',
    positionnementAbsolu: 'Positionnement absolu',
    profondeur: 'Positionnement en profondeur',
    debordement: 'Débordement',
  };

  currentPresentation.title = 'Positionnement CSS';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <PositionnementStatique section={sections.positionnementStatique} />
  <PositionnementRelatif section={sections.positionnementRelatif} />
  <PositionnementFixe section={sections.positionnementFixe} />
  <PositionnementAbsolu section={sections.positionnementAbsolu} />
  <Profondeur section={sections.profondeur} />
  <Debordement section={sections.debordement} />
</PresentationRoot>
