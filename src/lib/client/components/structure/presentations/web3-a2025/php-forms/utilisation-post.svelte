<script lang="ts">
  import {
    BasicSlide,
    Italic,
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
    Il est commun d'utiliser la méthode POST pour envoyer les données d'un formulaire, car cette
    méthode est plus sécuritaire que la méthode GET (les données ne sont pas visibles dans l'URL).
  </p>
  <p>
    Toutefois, gardez en tête que la méthode POST n'est pas sécuritaire en soi. En effet, les
    données envoyées sont visibles par l'utilisateur via <Italic>l'inspecteur</Italic> du navigateur.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    L'utilisation de la méthode POST est très similaire à celle de la méthode GET. Il suffit de
    spécifier la méthode <InlineCodeBlock>POST</InlineCodeBlock> dans l'attribut
    <InlineCodeBlock>method</InlineCodeBlock> de la balise <InlineCodeBlock>form</InlineCodeBlock> et
    d'utiliser la superglobale <InlineCodeBlock>$_POST</InlineCodeBlock> pour accéder aux données envoyées.
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
print_r($_POST);
?>`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Voici le même code que précédemment, mais cette fois-ci en utilisant la superglobale
    <InlineCodeBlock>$_POST</InlineCodeBlock>:
  </p>
  <CodeBlock
    language="PHP"
    code={`<?php
$firstnameKey = 'firstname';
$lastnameKey = 'lastname';

$firstname = $_POST[$firstnameKey] ?? '';
$lastname = $_POST[$lastnameKey] ?? '';
?>`}
  />
</BasicSlide>
