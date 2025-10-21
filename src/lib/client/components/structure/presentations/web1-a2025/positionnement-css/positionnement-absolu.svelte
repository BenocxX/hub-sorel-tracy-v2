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
  registerInTOC({ page: 7 });
</script>

<BasicSlide>
  <p>
    Le positionnement absolue (<InlineCodeBlock>position: absolute</InlineCodeBlock>) permet de
    positionner l'élément relativement au premier parent qui n'est pas statique (donc, soit relatif,
    fixé ou un autre absolue).
  </p>
  <p>
    Nous pouvons donc appliquer des propriétés de positionnement (
    <InlineCodeBlock>left</InlineCodeBlock>, <InlineCodeBlock>top</InlineCodeBlock>,
    <InlineCodeBlock>right</InlineCodeBlock>, <InlineCodeBlock>bottom</InlineCodeBlock>) et
    celles-ci seront entièrement relatives au premier parent non statique du document.
  </p>
  <CodeBlock
    language="CSS"
    code={`.element {
    position: absolute;
    left: 100px;
    top: 25px;
}`}
  >
    <div class="absolute left-[100px] top-[25px]">Élément absolu</div>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Le positionnement absolu est très puissant et il est souvent très tentant d'utiliser cette
    technique, mais il faut l'utiliser avec précaution.
  </p>
  <p>
    L'idée est de définir un certain conteneur qui lui sera "relative" et de placer à l'intérieur
    les éléments qui doivent être absolus. De cette façon, on ne pourra pas trop briser le flux
    naturel du document puisque l'élément relatif va suivre ce flux. Seuls les éléments à
    l'intérieur seront positionnés de façon absolue.
  </p>
  <p>
    Jouer avec des positionnements absolus est souvent difficile à maintenir si sa conception a été
    mal construite, surtout lorsqu'on veut rendre le site web responsive.
  </p>
</BasicSlide>
