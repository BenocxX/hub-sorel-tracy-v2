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
  registerInTOC({ page: 21 });
</script>

<BasicSlide>
  <p>
    Vous pouvez utiliser un type de saisie qui permet de prendre un fichier sur le disque local de
    l'internaute pour l'envoyer au serveur (upload). Pour se faire, il faut utiliser la balise
    <InlineCodeBlock>input</InlineCodeBlock> avec l'attribut type à
    <InlineCodeBlock>file</InlineCodeBlock>.
  </p>
  <p>
    Tout d'abord, il est nécessaire de faire une manipulation dans la déclaration du formulaire. Il
    faut ajouter un attribut qui précise qu'il est permis d'envoyer des fichiers. Il s'agit
    essentiellement de l'encodage du fichier.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form enctype="multipart/form-data" method="POST" action="https://www.hubcst.ca">
  <input type="file" />
</form>`}
  >
    <form>
      <input type="file" />
    </form>
  </CodeBlock>
</BasicSlide>
