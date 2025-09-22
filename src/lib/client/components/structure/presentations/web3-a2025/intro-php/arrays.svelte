<script lang="ts">
  import {
    BasicSlide,
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
    Les tableaux en PHP sont des structures de données qui permettent de stocker plusieurs valeurs
    dans une seule variable. Ils peuvent être indexés numériquement ou associatifs (avec des clés
    personnalisées).
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
$fruits = array("Pomme", "Banane", "Orange");
?>

<h1>Liste de fruits</h1>
<ul>
  <?php foreach ($fruits as $fruit) { ?>
    <li><?= $fruit; ?></li>
  <?php } ?>
</ul>`}
  >
    <h1>Liste de fruits</h1>
    <ul class="list-inside list-disc">
      <li>Pomme</li>
      <li>Banane</li>
      <li>Orange</li>
    </ul>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>Voici un exemple d'un tableau associatif en PHP, où chaque fruit est associé à sa couleur.</p>
  <CodeBlock
    language="PHP"
    code={`<?php
$fruits = array(
  "Pomme" => "Rouge",
  "Banane" => "Jaune",
  "Orange" => "Orange"
);
?>

<h1>Liste de fruits et leurs couleurs</h1>
<ul>
  <?php foreach ($fruits as $key => $value) { ?>
    <li><?= $key; ?> est <?= $value; ?></li>
  <?php } ?>
</ul>`}
  >
    <h1>Liste de fruits et leurs couleurs</h1>
    <ul class="list-inside list-disc">
      <li>Pomme est Rouge</li>
      <li>Banane est Jaune</li>
      <li>Orange est Orange</li>
    </ul>
  </CodeBlock>
</BasicSlide>
