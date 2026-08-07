<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import TypesEspacements from './types-espacements.svelte';
  import BoxModel from './box-model.svelte';
  import Contenu from './contenu.svelte';
  import Padding from './padding.svelte';
  import Border from './border.svelte';
  import Margin from './margin.svelte';
  import Playground from './playground.svelte';

  const sections = {
    typesEspacements: "Types d'espacements",
    boxModel: 'Box model',
    contenu: 'Contenu',
    padding: 'Padding',
    border: 'Border',
    margin: 'Margin',
    playground: 'Bac à sable',
  };

  currentPresentation.title = 'Les espacements';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <TypesEspacements section={sections.typesEspacements} />
  <BoxModel section={sections.boxModel} />
  <Contenu section={sections.contenu} />
  <Padding section={sections.padding} />
  <Border section={sections.border} />
  <Margin section={sections.margin} />
  <Playground section={sections.playground} />
</PresentationRoot>
