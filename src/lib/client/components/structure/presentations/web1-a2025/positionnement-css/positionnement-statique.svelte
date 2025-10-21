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
  registerInTOC({ page: 3 });
</script>

<BasicSlide>
  <p>
    Par défaut, tous les éléments suivent un positionnement statique. C'est-à-dire qu'ils suivent
    tous le flux naturel du document HTML. Par exemple, une balise
    <InlineCodeBlock>div</InlineCodeBlock> déclarée avant une autre
    <InlineCodeBlock>div</InlineCodeBlock> sera automatiquement positionnée avant.
  </p>
  <p>
    En CSS, on peut appliquer la propriété <InlineCodeBlock>position: static</InlineCodeBlock>
    pour revenir à l'état par défaut des éléments si nécessaire. Il est quand même rare d'utiliser cette
    propriété explicitement puisqu'il s'agit du comportement par défaut de toutes les balises.
  </p>
  <CodeBlock
    language="CSS"
    code={`.element {
    position: static;
}`}
  />
</BasicSlide>
