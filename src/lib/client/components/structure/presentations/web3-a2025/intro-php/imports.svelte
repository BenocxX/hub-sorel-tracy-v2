<script lang="ts">
  import {
    BasicSlide,
    InlineCodeBlock,
    MultiCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 23 });
</script>

<BasicSlide>
  <p>
    Vous pouvez utiliser la fonction <InlineCodeBlock>include</InlineCodeBlock> et
    <InlineCodeBlock>include_once</InlineCodeBlock> pour importer un fichier PHP dans un autre fichier
    PHP.
  </p>
  <p>
    Il existe aussi les fonctions <InlineCodeBlock>require</InlineCodeBlock> et
    <InlineCodeBlock>require_once</InlineCodeBlock> qui fonctionnent de la même manière, mais qui génèrent
    une erreur fatale si le fichier n'est pas trouvé.
  </p>
  <p>
    La variante <InlineCodeBlock>_once</InlineCodeBlock> permet d'éviter les inclusions multiples d'un
    même fichier.
  </p>
</BasicSlide>
<BasicSlide>
  <MultiCodeBlock
    codes={[
      {
        language: 'PHP',
        label: 'index.php',
        code: `<?php
include_once "utils.php";

$displayer = new MessageDisplayer("Hello world");
$displayer->setMessage("Test message");
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title><?= $displayer->getMessage() ?> en PHP!</title>
    </head>
    <body>
        <?php include_once 'header.php';?>
        <h1><?php sayHello(); ?></h1>
        <?php include_once 'footer.php';?>
    </body>
</html>
`,
      },
      {
        language: 'PHP',
        label: 'utils.php',
        code: `<?php

function sayHello() {
    echo "Hello World!";
}

class MessageDisplayer {
    private $message;

    function __construct($message) {
        $this->message = $message;
    }

    public function getMessage() {
        return $this->message;
    }

    public function setMessage($message) {
        $this->message = $message;
    }
}`,
      },
      {
        language: 'PHP',
        label: 'header.php',
        code: `<header>
    <a href="../../">Home</a>
    <a href="../hello-world">Hello World</a>
    <a href="../arrays">Arrays</a>
</header>`,
      },
      {
        language: 'PHP',
        label: 'footer.php',
        code: `<footer>Footer</footer>`,
      },
    ]}
  ></MultiCodeBlock>
</BasicSlide>
