<script lang="ts">
  import {
    BasicSlide,
    CodeBlock,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    Bold,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 5 });
</script>

<BasicSlide>
  <p>
    Si nous voulons faire un lien vers l'extérieur de notre site, il faut indiquer l'adresse
    complète de la page à atteindre incluant le protocole! Sinon, le navigateur va croire que la
    page se trouve à l'interne!
  </p>
  <p>L'exemple ci-dessous pour atteindre Google ne fonctionnera pas!</p>
  <CodeBlock
    language="HTML"
    code={`...
<body>
    <a href="www.google.ca">Google</a>
</body>
...`}
  >
    <a href="www.google.ca" class="text-primary underline">Google</a>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Ajoutons simplement le protocole HTTP (ou HTTPS) et tout devrait fonctionner. En résumé, il faut
    tout simplement prendre l'adresse URL telle qu'elle est présentée dans un navigateur. Ceux-ci
    présentent toujours l'adresse avec le protocole.
  </p>
  <CodeBlock
    language="HTML"
    code={`...
<body>
    <a href="https://www.google.ca">Google</a>
</body>
...`}
  >
    <a href="https://www.google.ca" class="text-primary underline"> Google </a>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Si vous testez le lien externe, vous verrez que nous quittons notre site pour aller vers Google.
    Ceci n'est pas une bonne pratique pour garder votre internaute sur VOTRE site. N'oubliez pas que
    lorsque vous faites un site Web, l'idée est de garder le plus longtemps possible votre
    internaute.
  </p>
  <p>
    Si vous le redirigez vers un autre site, ce qui est totalement légitime, il faudrait le faire
    dans un nouvel onglet pour ainsi garder une référence vers votre site.
  </p>
  <p>
    Normalement, les liens externes que vous allez utiliser ne seront qu'à des fins de références.
    Vous ne voulez pas perdre votre internaute tout bêtement pour cette raison.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    C'est pourquoi pour les liens externes, on ajoute une propriété
    <InlineCodeBlock>target</InlineCodeBlock> à la balise <InlineCodeBlock>a</InlineCodeBlock>
    si vous voulez forcer une ouverture dans un nouvel onglet. Cette propriété permet de spécifier la
    <Bold>cible</Bold> où ouvrir la nouvelle page. Par défaut, c'est la page courante. On peut utiliser
    la valeur standardisée
    <InlineCodeBlock>_blank</InlineCodeBlock> pour spécifier que nous voulons ouvrir un nouvel onglet.
  </p>
  <CodeBlock
    language="HTML"
    code={`...
<body>
 <a href="https://www.google.ca" target="_blank">Google</a>
</body>
...`}
  >
    <a href="https://www.google.ca" target="_blank" class="text-primary underline"> Google </a>
  </CodeBlock>
</BasicSlide>
