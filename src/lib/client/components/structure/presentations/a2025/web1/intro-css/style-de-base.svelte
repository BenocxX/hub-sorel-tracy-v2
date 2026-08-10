<script lang="ts">
  import {
    BasicSlide,
    List,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 17 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      Par défaut, toutes les balises HTML ont un style de base d'appliqué. Par exemple, la balise
      <InlineCodeBlock>strong</InlineCodeBlock>, de base, sera affichée en gras (avec la propriété
      <InlineCodeBlock>font-weight</InlineCodeBlock>).
    {/snippet}
    <li>
      Quel pourrait être le style pour la balise <InlineCodeBlock>h1</InlineCodeBlock>?
    </li>
    <li>
      Quel pourrait être le style pour la balise <InlineCodeBlock>em</InlineCodeBlock>?
    </li>
    <li>
      Quel pourrait être le style pour la balise <InlineCodeBlock>ins</InlineCodeBlock>?
    </li>
    <li>
      Quel pourrait être le style pour la balise <InlineCodeBlock>del</InlineCodeBlock>?
    </li>
  </List>
</BasicSlide>
