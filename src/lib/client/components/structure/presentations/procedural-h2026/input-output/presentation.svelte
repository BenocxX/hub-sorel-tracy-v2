<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Introduction from './introduction.svelte';
  import Librairies from './librairies.svelte';
  import FonctionsSorties from './fonctions-sorties.svelte';
  import FonctionsEntrees from './fonctions-entrees.svelte';
  import CaractereNull from './caractere-null.svelte';

  const sections = {
    introduction: 'Introduction',
    librairies: 'Les bibliothèques standard',
    fonctionsDeSorties: 'Les fonctions de sorties',
    fonctionsDEntrees: "Les fonctions d'entrées",
    caractereNull: 'Le caractère null et son utilité',
  };

  currentPresentation.title = 'Utilisation des entrées et sorties';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Introduction section={sections.introduction} />
  <Librairies section={sections.librairies} />
  <FonctionsSorties section={sections.fonctionsDeSorties} />
  <FonctionsEntrees section={sections.fonctionsDEntrees} />
  <CaractereNull section={sections.caractereNull} />
</PresentationRoot>
