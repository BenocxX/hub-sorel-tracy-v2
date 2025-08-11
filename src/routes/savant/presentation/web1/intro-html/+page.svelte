<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { Slide } from '$lib/client/components/revealjs/index';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';

  const sections = {
    intro: 'Introduction',
    balise: 'Concept de balise',
    html: 'Le langage HTML',
    baliseHtml: 'Balises du langage HTML',
    loremIpsum: 'Lorem Ipsum',
  };

  currentPresentation.title = 'Introduction au langage HTML';
</script>

<PresentationRoot {sections}>
  <Slide class="h-full place-content-center place-items-center">
    <p>test</p>
  </Slide>
</PresentationRoot>
