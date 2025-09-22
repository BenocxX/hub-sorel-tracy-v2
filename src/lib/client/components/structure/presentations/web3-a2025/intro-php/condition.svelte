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
    En PHP, il est possible d'utiliser des structures conditionnelles pour exécuter du code en
    fonction de certaines conditions. Par exemple, on pourrait vouloir afficher un message seulement
    si une variable a une certaine valeur.
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
$age = 20;
?>

<h1>Vérification âge</h1>
<?php if ($age >= 18) { ?>
    <p>Vous êtes majeur.</p>
<?php } else { ?>
    <p>Vous êtes mineur.</p>
<?php } ?>`}
  >
    <p>Vous êtes majeur.</p>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Voici une autre manière d'écrire la même condition en utilisant les
    <InlineCodeBlock>echo</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
$age = 20;
?>

<h1>Vérification âge</h1>
<?php 
if ($age >= 18) {
  echo "<p>Vous êtes majeur.</p>";
} else {
  echo "<p>Vous êtes mineur.</p>";
} 
?>`}
  >
    <p>Vous êtes majeur.</p>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>Évidemment, PHP permet aussi de faire des boucles, comme dans beaucoup d'autres langages.</p>
  <CodeBlock
    language="PHP"
    code={`<?php
$count = 5;
?>

<h1>Compteur</h1>
<?php
for ($i = 1; $i <= $count; $i++) {
    echo "<p>Compteur : $i</p>";
}
?>`}
  >
    <p>Compteur : 1</p>
    <p>Compteur : 2</p>
    <p>Compteur : 3</p>
    <p>Compteur : 4</p>
    <p>Compteur : 5</p>
  </CodeBlock>
</BasicSlide>
