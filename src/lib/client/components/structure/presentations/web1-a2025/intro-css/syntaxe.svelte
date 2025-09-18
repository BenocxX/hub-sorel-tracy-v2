<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
    CodeBlock,
    MultiCodeBlock,
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
    En CSS, on applique un bloc de code à un <Bold>sélecteur</Bold> (par exemple:
    <InlineCodeBlock>p</InlineCodeBlock>, <InlineCodeBlock>strong</InlineCodeBlock>,
    <InlineCodeBlock>em</InlineCodeBlock>, etc...). Un bloc de code CSS est formé d'accolades. Dans
    ce bloc, on écrit une <Bold>propriété CSS</Bold> suivie d'un deux-points (:) et de sa valeur. On
    termine chaque instruction CSS par un point virgule (;).
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `p {
    color: red;
}

strong {
    color: blue;
}`,
      },
      {
        language: 'HTML',
        code: `<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <p>Le texte dans "p" est rouge</p>
        <strong>Le texte dans "strong" est bleu</strong>
    </body>
</html>`,
      },
    ]}
  >
    <p class="text-[red]">Le texte dans "p" est rouge</p>
    <strong class="text-[blue]">Le texte dans "strong" est bleu</strong>
  </MultiCodeBlock>
</BasicSlide>
