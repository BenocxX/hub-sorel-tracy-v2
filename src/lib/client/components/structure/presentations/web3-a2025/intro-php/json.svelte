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
    L'utilisation de JSON en PHP est courante pour échanger des données entre un serveur et une
    application web. PHP offre une fonction intégrée appelée
    <InlineCodeBlock>json_encode()</InlineCodeBlock> pour convertir des structures de données PHP en
    une chaîne JSON.
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
$fruits = array(
  "Pomme" => "Rouge",
  "Banane" => "Jaune",
  "Orange" => "Orange"
);

echo json_encode($fruits);`}
  >
    {`{"Pomme":"Rouge","Banane":"Jaune","Orange":"Orange"}`}
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Il est aussi possible de décoder une chaîne JSON en une structure de données PHP à l'aide de la
    fonction <InlineCodeBlock>json_decode()</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
$jsonString = '{"Pomme":"Rouge","Banane":"Jaune","Orange":"Orange"}';
$fruits = json_decode($jsonString);

print_r($fruits);`}
  >
    stdClass Object ( [Pomme] =&gt; Rouge [Banane] =&gt; Jaune [Orange] =&gt; Orange )
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Notez qu'il est possible de passer un second argument à <InlineCodeBlock
      >json_decode()</InlineCodeBlock
    >
    pour obtenir un tableau associatif au lieu d'un objet.
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
$jsonString = '{"Pomme":"Rouge","Banane":"Jaune","Orange":"Orange"}';
$fruits = json_decode($jsonString, true);

print_r($fruits);`}
  >
    Array ( [Pomme] =&gt; Rouge [Banane] =&gt; Jaune [Orange] =&gt; Orange )
  </CodeBlock>
</BasicSlide>
