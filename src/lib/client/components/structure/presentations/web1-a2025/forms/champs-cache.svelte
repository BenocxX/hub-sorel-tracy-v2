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
  registerInTOC({ page: 22 });
</script>

<BasicSlide>
  <p>
    Il peut arriver que vous deviez envoyer une donnée cachée au serveur (sans que l'utilisateur le
    sache). Vous pouvez utiliser la balise
    <InlineCodeBlock>input</InlineCodeBlock> avec le type
    <InlineCodeBlock>hidden</InlineCodeBlock> pour réaliser ce genre de champ. Le champ ne sera jamais
    affiché à l'utilisateur (<InlineCodeBlock>display: none</InlineCodeBlock>
    implicite).
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <input type="hidden" value="un mot magique!" />
</form>`}
  />
</BasicSlide>
