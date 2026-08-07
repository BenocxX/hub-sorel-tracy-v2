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
  registerInTOC({ page: 4 });
</script>

<BasicSlide>
  <p>
    Le positionnement relatif (<InlineCodeBlock>position: relative</InlineCodeBlock>) permet de
    positionner l'élément relativement à sa position actuelle dans le flux naturel du document.
  </p>
  <p>
    Essentiellement, il s'agit de dire que l'élément demeure à son emplacement normal dans le
    document comme s'il était "statique", mais nous pouvons appliquer des propriétés de
    positionnement sur l'élément : <InlineCodeBlock>left</InlineCodeBlock>,
    <InlineCodeBlock>top</InlineCodeBlock>, <InlineCodeBlock>right</InlineCodeBlock>,
    <InlineCodeBlock>bottom</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="CSS"
    code={`.element {
    position: relative;
    left: 100px;
    top: 25px;
}`}
  >
    <div class="relative left-[100px] top-[25px]">Élément</div>
  </CodeBlock>
</BasicSlide>
