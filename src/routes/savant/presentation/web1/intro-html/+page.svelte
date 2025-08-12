<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import Intro from './intro.svelte';

  const sections = {
    intro: 'Introduction',
    balise: 'Concept de balise',
    html: 'Le langage HTML',
    baliseHtml: 'Balises du langage HTML',
    loremIpsum: 'Lorem Ipsum',
  };

  currentPresentation.title = 'Introduction au langage HTML';
  currentPresentation.subTitle = "La structure d'une page web";
</script>

<PresentationRoot {sections}>
  <Intro section={sections.intro} />
</PresentationRoot>
