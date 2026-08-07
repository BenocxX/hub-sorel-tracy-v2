<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import CestQuoi from './cest-quoi.svelte';
  import EntitesHtml from './entitesHtml.svelte';
  import Utf8 from './utf8.svelte';

  const sections = {
    cestQuoi: "Qu'est-ce qu'un jeu de caractères ?",
    entitesHtml: 'Les entités HTML',
    utf8: 'UTF-8',
  };

  currentPresentation.title = 'Jeux de caractères';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <CestQuoi section={sections.cestQuoi} />
  <EntitesHtml section={sections.entitesHtml} />
  <Utf8 section={sections.utf8} />
</PresentationRoot>
