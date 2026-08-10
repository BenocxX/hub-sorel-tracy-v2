<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Principes from './principes.svelte';
  import Exemples from './exemples.svelte';
  import Autres from './autres.svelte';
  import Attributs from './attributs.svelte';

  const sections = {
    principes: 'Principe de sémantique dans le langage HTML',
    exemples: 'Exemples de balises sémantiques',
    autres: "D'autres balises HTML",
    attributs: 'Attribut de balises',
  };

  currentPresentation.title = 'HTML sémantique';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Principes section={sections.principes} />
  <Exemples section={sections.exemples} />
  <Autres section={sections.autres} />
  <Attributs section={sections.attributs} />
</PresentationRoot>
