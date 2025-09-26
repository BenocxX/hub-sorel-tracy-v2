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
  registerInTOC({ page: 8 });
</script>

<BasicSlide>
  <p>
    Pour utiliser PHP dans une fichier HTML, il suffit de renommer l'extension du fichier en <InlineCodeBlock
      >.php</InlineCodeBlock
    > et d'insérer le code PHP entre les balises
    <InlineCodeBlock>&lt;?php</InlineCodeBlock> et <InlineCodeBlock>?&gt;</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
// Votre code PHP ici
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Exemple PHP</title>
  </head>
  <body>
    <p>Hello world!</p>
  </body>
</html>`}
  >
    <p>Hello world!</p>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Notez que le block de code PHP <InlineCodeBlock>&lt;?php /* ... */ ?&gt;</InlineCodeBlock> peut être
    insérer n'importe où dans le fichier HTML.
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php /* ... */ ?>
<!DOCTYPE html>
<html>
  <head>
    <title>Exemple PHP</title>
  </head>
  <body>
    <p><?php /* ... */ ?></p>
  </body>
</html>`}
  >
    <p></p>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Vous pouvez utiliser <InlineCodeBlock>echo</InlineCodeBlock> afin d'afficher du texte dans le HTML.
  </p>
  <CodeBlock language="PHP" code="<p><?php echo 'Hello World!' ?></p>">
    <p>Hello World!</p>
  </CodeBlock>
  <div class="fragment space-y-8">
    <p>
      Il existe aussi une syntaxe raccourcie pour <InlineCodeBlock>echo</InlineCodeBlock> en utilisant
      <InlineCodeBlock>&lt;?= /* ... */ ?&gt;</InlineCodeBlock>.
    </p>
    <CodeBlock language="PHP" code="<p><?= 'Hello World!' ?></p>">
      <p>Hello World!</p>
    </CodeBlock>
  </div>
</BasicSlide>
