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
  registerInTOC({ page: 11 });
</script>

<BasicSlide>
  <p>
    Pour utiliser une variable en PHP, il suffit de la déclarer avec le symbole
    <InlineCodeBlock>$</InlineCodeBlock> suivi du nom de la variable. Les variables ne sont pas typées,
    et peuvent contenir différents types de données (chaînes de caractères, nombres, tableaux, objets,
    etc.).
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
$maVariable = "Hello World!";
echo $maVariable;
?>`}
  >
    Hello World!
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Vous pouvez utiliser une variable d'un bloc de code PHP dans un autre bloc de code PHP situé
    plus bas dans le fichier.
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
$maVariable = "Hello World!";
?>
<h1>Bienvenu</h1>
<p><?= $maVariable; ?></p>`}
  >
    <h1 class="text-4xl">Bienvenu</h1>
    <p>Hello World!</p>
  </CodeBlock>
</BasicSlide>
