<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import UtilisationGET from './utilisation-get.svelte';
  import UtilisationPost from './utilisation-post.svelte';

  const sections = {
    utilisationGet: 'Utilisation de la méthode GET',
    utilisationPost: 'Utilisation de la méthode POST',
  };

  currentPresentation.title = 'Utilisation des formulaires en PHP';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <UtilisationGET section={sections.utilisationGet} />
  <UtilisationPost section={sections.utilisationPost} />
</PresentationRoot>
