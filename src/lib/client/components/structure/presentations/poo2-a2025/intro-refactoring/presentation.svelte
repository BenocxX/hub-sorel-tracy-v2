<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import PrincipesSolid from './principes-solid.svelte';
  import ResponsabiliteUnique from './responsabilite-unique.svelte';

  const sections = {
    intro: 'Introduction au refactoring',
    principesSolid: 'Principes SOLID',
    responsabiliteUnique: 'Responsabilité unique',
    ouvertureFermeture: 'Ouverture / Fermeture',
    substitutionLiskov: 'Substitution de Liskov',
    segregationInterfaces: 'Ségrégation des interfaces',
    inversionDependances: 'Inversion des dépendances',
    loiDemeter: 'Loi de Déméter',
  };

  currentPresentation.title = 'Introduction au refactoring';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <PrincipesSolid section={sections.principesSolid} />
  <ResponsabiliteUnique section={sections.responsabiliteUnique} />
</PresentationRoot>
