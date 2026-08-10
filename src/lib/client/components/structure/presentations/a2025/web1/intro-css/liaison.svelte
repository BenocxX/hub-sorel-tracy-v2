<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 3 });
</script>

<BasicSlide
  links={[
    {
      label: "Documentation sur la balise 'head'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/head',
    },
  ]}
>
  <List listType="ol" paragraph="Il existe trois façons de lier du code CSS avec un document HTML.">
    <li>Soit en écrivant directement dans le document HTML le code CSS (interne).</li>
    <li>
      Soit en spécifiant dans l'entête du document (dans la balise
      <InlineCodeBlock>head</InlineCodeBlock>) le chemin vers le fichier CSS (externe).
    </li>
    <li>
      Soit en écrivant le style directement dans la balise (inline). Idéalement, il s'agit d'une
      méthode à proscrire!
    </li>
  </List>
</BasicSlide>
<BasicSlide
  subTitle="Liaison interne"
  links={[
    {
      label: "Documentation sur la balise 'head'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/head',
    },
    {
      label: "Documentation sur la balise 'style'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/style',
    },
  ]}
>
  <p>
    Dans la balise <InlineCodeBlock>head</InlineCodeBlock> du document (qui permet de communiquer avec
    le navigateur), nous allons ajouter une balise <InlineCodeBlock>style</InlineCodeBlock> qui va contenir
    le code CSS. Ce code sera donc immédiatement interprété pour la page en cours.
  </p>
  <CodeBlock
    language="HTML"
    lines="4-5"
    code={`...
<head>
    <title>CSS Interne</title>
    <!-- On pourrait écrire du CSS ici, mais c'est déconseillé -->
    <style></style>
</head>
...`}
  />
</BasicSlide>
<BasicSlide
  subTitle="Liaison externe"
  links={[
    {
      label: "Documentation sur la balise 'head'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/head',
    },
    {
      label: "Documentation sur la balise 'link'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/link',
    },
  ]}
>
  <p>
    Dans la balise <InlineCodeBlock>head</InlineCodeBlock> du document, nous allons ajouter une balise
    <InlineCodeBlock>link</InlineCodeBlock> qui permet de faire une liaison vers un fichier CSS externe.
    Il suffit de préciser le chemin vers le fichier ainsi que le type de relation (qui sera toujours
    "<Bold>stylesheet</Bold>" dans ce cas).
  </p>
  <CodeBlock
    language="HTML"
    lines="4-6"
    code={`...
<head>
    <title>CSS Externe</title>
    <link href="style.css" rel="stylesheet" />
    <link href="theme.css" rel="stylesheet" />
    <link href="stylesheets/un-fichier-dans-un-dossier.css" rel="stylesheet" />
</head>
...`}
  />
</BasicSlide>
<BasicSlide subTitle="Liaison externe">
  <List paragraph="Nous allons préférer une liaison externe pour plusieurs raisons:">
    <li>Respecter la séparation entre la structure (HTML) et la présentation (CSS);</li>
    <li>
      Permettre d'utiliser le même code CSS dans plusieurs documents HTML sans répétition de code
      (simplicité de maintenance);
    </li>
    <li>
      En programmation, on essaie souvent d'éviter d'avoir plus d'un langage par fichier source.
      Donc, le code HTML dans un fichier HTML et le code CSS dans un fichier CSS;
    </li>
    <li>Avantages au niveau de la sécurité applicative (CSP).</li>
  </List>
</BasicSlide>
