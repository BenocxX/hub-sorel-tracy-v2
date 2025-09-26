<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import DisplayInline from './display-inline.svelte';
  import DisplayBlock from './display-block.svelte';
  import DisplayInlineBlock from './display-inline-block.svelte';
  import DisplayTable from './display-table.svelte';
  import DisplayFlex from './display-flex.svelte';
  import DisplayNone from './display-none.svelte';

  const sections = {
    introduction: 'C\'est quoi la propriété "display"?',
    displayInline: 'Display inline',
    displayBlock: 'Display block',
    displayInlineBlock: 'Display inline-block',
    displayTable: 'Display table',
    displayFlex: 'Display flex',
    displayNone: 'Display none',
  };

  currentPresentation.title = 'Les propriétés CSS display';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.introduction} />
  <DisplayInline section={sections.displayInline} />
  <DisplayBlock section={sections.displayBlock} />
  <DisplayInlineBlock section={sections.displayInlineBlock} />
  <DisplayTable section={sections.displayTable} />
  <DisplayFlex section={sections.displayFlex} />
  <DisplayNone section={sections.displayNone} />
</PresentationRoot>
