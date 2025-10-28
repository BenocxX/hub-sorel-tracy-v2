<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    CodeBlock,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 9 });
</script>

<BasicSlide>
  <p>
    Il est possible d'utiliser des spécifications de média beaucoup plus précis en effectuant des
    requêtes sur les dimensions. Il suffit d'indiquer une propriété utilisable de dimension entre
    parenthèses.
  </p>
  <p>
    L'exemple ci-dessous appliquera les paragraphes bleus seulement pour les médias avec une largeur
    maximale de <Bold>500px</Bold>.
  </p>
  <CodeBlock
    language="CSS"
    code={`@media (max-width: 500px) {
    p {
        color: blue;
    }
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    On peut combiner des requêtes médias avec l'opérateur logique
    <InlineCodeBlock>and</InlineCodeBlock>. Le code ci-dessous applique donc les paragraphes rouges
    uniquement pour les écrans (premier sélecteur média) et que leur largeur se trouve entre <Bold
      >400px</Bold
    > et <Bold>700px</Bold>.
  </p>
  <p>
    L'utilisation du <InlineCodeBlock>min-</InlineCodeBlock> et du
    <InlineCodeBlock>max-</InlineCodeBlock> permet de faire l'équivalent de l'opérateur
    <InlineCodeBlock>&lt;</InlineCodeBlock> et <InlineCodeBlock>&gt;</InlineCodeBlock> dans des langages
    de programmation comme Java, C, C#, etc.
  </p>
  <CodeBlock
    language="CSS"
    code={`@media screen and (min-width: 400px) and (max-width: 700px) {
    p {
        color: red;
    }
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Il est ainsi possible de faire des requêtes assez complètes qui permettent de gérer toutes les
    tranches de dimensions que vous désirez contrôler individuellement.
  </p>
  <p>
    Il sera facile de dicter le style d'un site s'il se trouve entre <Bold>320px</Bold> et
    <Bold>600px</Bold> ou entre <Bold>600px</Bold> et <Bold>960px</Bold> ou encore entre
    <Bold>960px</Bold> et plus.
  </p>
  <List>
    {#snippet paragraph()}
      Pour les dimensions, les propriétés de requêtes utilisables sont :
    {/snippet}
    <li>
      <InlineCodeBlock>width</InlineCodeBlock>, <InlineCodeBlock>height</InlineCodeBlock>,
      <InlineCodeBlock>min-width</InlineCodeBlock>,
      <InlineCodeBlock>min-height</InlineCodeBlock>
    </li>
    <li>
      <InlineCodeBlock>device-width</InlineCodeBlock>,
      <InlineCodeBlock>device-height</InlineCodeBlock>,
      <InlineCodeBlock>min-device-width</InlineCodeBlock>,
      <InlineCodeBlock>max-device-width</InlineCodeBlock>;
    </li>
  </List>
</BasicSlide>
