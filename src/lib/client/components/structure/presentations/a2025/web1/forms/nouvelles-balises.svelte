<script lang="ts">
  import {
    BasicSlide,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 26 });
</script>

<BasicSlide>
  <p>
    HTML5 a ajouté plusieurs types de balises <InlineCodeBlock>input</InlineCodeBlock> pour les formulaires.
    La liste est longue ... Tous les navigateurs interprètent (ou non) ces balises selon leur propre
    style.
  </p>
  <p>
    Voici une liste des nouveautés : <InlineCodeBlock>color</InlineCodeBlock>,
    <InlineCodeBlock>date</InlineCodeBlock>, <InlineCodeBlock>date+me</InlineCodeBlock>,
    <InlineCodeBlock>email</InlineCodeBlock>, <InlineCodeBlock>month</InlineCodeBlock>,
    <InlineCodeBlock>number</InlineCodeBlock>, <InlineCodeBlock>range</InlineCodeBlock>,
    <InlineCodeBlock>search</InlineCodeBlock>, <InlineCodeBlock>tel</InlineCodeBlock>,
    <InlineCodeBlock>+me</InlineCodeBlock>, <InlineCodeBlock>url</InlineCodeBlock> et
    <InlineCodeBlock>week</InlineCodeBlock>.
  </p>
</BasicSlide>
