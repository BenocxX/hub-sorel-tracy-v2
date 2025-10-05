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
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Pour éviter de toujours utiliser des entités HTML pour former les caractères courant de la
    langue française (comme les accents), on va plutôt utiliser un jeu de caractères qui va contenir
    tous ces caractères.
  </p>
  <p>
    On utilise donc une balise <InlineCodeBlock>meta</InlineCodeBlock> dans l'entête du document (<InlineCodeBlock
      >head</InlineCodeBlock
    >) pour indiquer au navigateur notre jeu de caractères.
  </p>
  <CodeBlock
    language="HTML"
    code={`<head>
    <meta charset="utf-8" />
</head>`}
  />
</BasicSlide>
