<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
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

<BasicSlide>
  <p>
    Pour écrire <InlineCodeBlock>media query</InlineCodeBlock>, il suffit d'utiliser la propriété
    <InlineCodeBlock>@media</InlineCodeBlock> dans le code CSS.
  </p>
  <CodeBlock
    language="CSS"
    code={`@media /* condition */ {
    /* styles lorsque la condition est respectée */
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Le premier élément à indiquer est la condition qui doit être respectée pour que les styles à
    l'intérieur du bloc soient appliqués. Voici un exemple simple qui applique un style lorsque le
    média est de type <InlineCodeBlock>screen</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="CSS"
    code={`@media screen { /* Cible les écrans */
    body {
        color: red;
    }
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Il est possible de spécifier plusieurs autres types de média comme
    <InlineCodeBlock>print</InlineCodeBlock> afin de cibler les imprimantes.
  </p>
  <CodeBlock
    language="CSS"
    code={`@media print { /* Cible seulement les imprimantes */
    body {
        color: green;
    }
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Il existe plusieurs types de média applicable comme <InlineCodeBlock>tv</InlineCodeBlock>
    qui permet de cibler uniquement les navigateurs qui s'exécutent sur une télévision ou encore
    <InlineCodeBlock>handheld</InlineCodeBlock> qui permet de cibler uniquement les appareils mobiles.
  </p>
  <CodeBlock
    language="CSS"
    code={`@media handheld { /* Cible seulement les appareils mobiles */
    body {
        color: green;
    }
}

@media tv { /* Cible seulement les télévisions */
    body {
        color: blue;
    }
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Attention ! Le média <InlineCodeBlock>handheld</InlineCodeBlock> n'est pas suffisant pour vérifier
    qu'un style doit s'appliquer sur un appareil mobile. Chaque navigateur décide d'implémenter ce fonctionnement
    à leur façon. Par exemple, un navigateur mobile pourrait décider de ne pas
    <Italic>activer</Italic> le média <InlineCodeBlock>handheld</InlineCodeBlock> et faire à croire qu'il
    est de type <InlineCodeBlock>screen</InlineCodeBlock>.
  </p>
  <p>
    De plus, un appareil mobile veut dire plusieurs choses ! Il peut s'agir certes d'un petit
    appareil de 3 pouces ou encore d'un iPad qui peut afficher pratiquement le même design qu'un
    site standard ...
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Il est possible d'utiliser une requête média qui attribue un style pour <Bold>tous</Bold>
    les types de composants (mobile, impression, télévision, écran standard, etc.). Il suffit d'utiliser
    le média <InlineCodeBlock>all</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="CSS"
    code={`@media all {
    body {
        color: pink;
    }
}`}
  />
</BasicSlide>
