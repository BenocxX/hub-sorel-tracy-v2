<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import DisplayDemoCodeBlock from './display-demo-code-block.svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 4 });
</script>

<BasicSlide>
  <p>
    Une première valeur possible de display est <Bold>inline</Bold>. Cette valeur permet de donner à
    un élément la possibilité de pouvoir être inséré à l'intérieur d'une ligne sans tout casser.
  </p>
  <p>
    <InlineCodeBlock>span</InlineCodeBlock>, <InlineCodeBlock>strong</InlineCodeBlock>,
    <InlineCodeBlock>em</InlineCodeBlock>, etc. sont des bons exemples de balises qui, par défaut,
    ont un <InlineCodeBlock>display: inline</InlineCodeBlock>. On peut utiliser ces balises sans que
    ceux-ci forment un retour de ligne et prennent une largeur de 100%. Elles restent simplement sur
    la ligne et leur largeur s'adapte au contenu.
  </p>
  <p>
    Toutes les balises qui, par défaut, peuvent s'insérer sur une ligne utilise un display
    <Bold>inline</Bold>.
  </p>
</BasicSlide>
<BasicSlide>
  <List>
    {#snippet paragraph()}
      <Bold>inline</Bold> apporte un certain comportement restrictif comme n'importe quelle valeur de
      la propriété <InlineCodeBlock>display</InlineCodeBlock>. C'est une façon de s'assurer de
      comment l'élément va se comporter à l'affichage.
    {/snippet}
    <li>
      Un élément <Bold>inline ne pourra JAMAIS avoir de dimension</Bold>. Par exemple, il est
      impossible de définir une largeur pour la balise <InlineCodeBlock>span</InlineCodeBlock>
      . Celle-ci prendra toujours comme largeur le maximum du contenu.
    </li>
    <li>
      Comme expliqué précédemment, un élément <Bold>inline</Bold> ne va pas déranger la disposition des
      éléments sur une même ligne.
    </li>
  </List>
  <p>
    On utilise donc un <InlineCodeBlock>display: inline</InlineCodeBlock> lorsqu'on veut que l'élément
    reste sur une même ligne et que sa dimension soit entièrement définit par son contenu.
  </p>
</BasicSlide>
<BasicSlide>
  <DisplayDemoCodeBlock display="inline" />
</BasicSlide>
