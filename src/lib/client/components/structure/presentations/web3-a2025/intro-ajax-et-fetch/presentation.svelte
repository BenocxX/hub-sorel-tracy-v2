<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import CommunicationServeur from './communication-serveur.svelte';
  import RequeteAjax from './requete-ajax.svelte';

  const sections = {
    intro: 'Introduction',
    communicationServeur: 'Communication avec le serveur',
    requeteAjax: 'Comment faire une requête AJAX',
  };

  currentPresentation.title = 'Introduction au AJAX et aux API avec fetch';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <CommunicationServeur section={sections.communicationServeur} />
  <RequeteAjax section={sections.requeteAjax} />
</PresentationRoot>
