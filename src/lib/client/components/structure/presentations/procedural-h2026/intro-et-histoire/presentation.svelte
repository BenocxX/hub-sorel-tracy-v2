<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Historique from './historique.svelte';
  import NiveauLangages from './niveau-langages.svelte';

  const sections = {
    historique: "Introduction et l'historique du langage C",
    niveauLangages: 'Niveau des langages de programmation',
  };

  currentPresentation.title = 'Introduction et histoire du langage C';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Historique section={sections.historique} />
  <NiveauLangages section={sections.niveauLangages} />
</PresentationRoot>
