<script lang="ts">
  import {
    BasicSlide,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 13 });
</script>

<BasicSlide>
  <p>
    Vous pouvez faire une requête sur les couleurs de l'appareil. Pour savoir, par exemple, si
    l'appareil permet l'affichage en couleur ou non. Il existe les propriétés de requête :
    <InlineCodeBlock>color</InlineCodeBlock>, <InlineCodeBlock>monochrome</InlineCodeBlock>,
    <InlineCodeBlock>min-color</InlineCodeBlock> et
    <InlineCodeBlock>min-monochrome</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="CSS"
    code={`@media print and (color) {
    p {
        color: red;
    }
}

@media print and (monochrome) {
    p {
        color: black;
    }
}`}
  />
</BasicSlide>
