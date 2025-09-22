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

  const value = '&lt;script&gt;';
  const html = value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
</script>

<BasicSlide>
  <p>
    Afin de fournir des informations PHP (côté serveur) au JavaScript (côté client), il faut
    utiliser la balise <InlineCodeBlock>&lt;script&gt;</InlineCodeBlock>;
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
$firstname = "Billy";
$lastname = "Bob";
?>
&lt;script&gt;
    const firstname = "<?= $firstname ?>";
    const lastname = "<?= $lastname ?>";

    document.getElementById("firstname").innerText = firstname;
    document.getElementById("lastname").innerText = lastname;
&lt;/script&gt;
<ul>
    <li>Prénom : <span id="firstname"></span></li>
    <li>Nom : <span id="lastname"></span></li>
</ul>`
      .replaceAll('&lt;', '<')
      .replaceAll('&gt;', '>')}
  >
    <ul>
      <li>Prénom : <span id="firstname">Billy</span></li>
      <li>Nom : <span id="lastname">Bob</span></li>
    </ul>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>Toutefois, il est bien mieux d'utiliser AJAX pour récupérer des données PHP en JavaScript.</p>
  <p>
    Pour se faire, il faut avoir une page PHP qui renvoie des données (JSON de préférence) et
    utiliser la fonction <InlineCodeBlock>fetch()</InlineCodeBlock> en JavaScript.
  </p>
  <p class="fragment">Vous allez voir cela plus tard dans la technique.</p>
</BasicSlide>
