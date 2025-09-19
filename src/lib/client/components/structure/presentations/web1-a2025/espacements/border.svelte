<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    InlineCodeBlock,
    MultiCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 12 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      La propriété <Bold>border</Bold> permet de définir une bordure autour d'un élément. La bordure
      est composée de 3 parties:
    {/snippet}
    <li>
      <InlineCodeBlock>border-width</InlineCodeBlock>: définit l'épaisseur de la bordure.
    </li>
    <li>
      <InlineCodeBlock>border-style</InlineCodeBlock>: définit le style de la bordure (
      <InlineCodeBlock>solid</InlineCodeBlock>, <InlineCodeBlock>dashed</InlineCodeBlock>,
      <InlineCodeBlock>dotted</InlineCodeBlock>, ...).
    </li>
    <li>
      <InlineCodeBlock>border-color</InlineCodeBlock>: définit la couleur de la bordure.
    </li>
  </List>
  <MultiCodeBlock
    codes={[
      {
        code: `div {
  width: max-content;
  border-width: 2px;
  border-style: solid;
  border-color: black;
}`,
        language: 'CSS',
      },
      {
        code: `<div>contenu</div>`,
        language: 'HTML',
      },
    ]}
  >
    <div class="w-max border-2 border-solid border-foreground">contenu</div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Tout comme pour le <InlineCodeBlock>padding</InlineCodeBlock>, il est possible de définir la
    bordure de manière individuelle pour chaque côté de l'élément. Ainsi, on peut définir la bordure
    pour le haut, la droite, le bas et la gauche via les propriétés
    <InlineCodeBlock>border-top</InlineCodeBlock>,
    <InlineCodeBlock>border-right</InlineCodeBlock>,
    <InlineCodeBlock>border-bottom</InlineCodeBlock> et
    <InlineCodeBlock>border-left</InlineCodeBlock>.
  </p>
  <MultiCodeBlock
    codes={[
      {
        code: `div {
  width: max-content;
  border-top-width: 2px;
  border-top-style: solid;
  border-top-color: black;
}`,
        language: 'CSS',
      },
      {
        code: `<div>contenu</div>`,
        language: 'HTML',
      },
    ]}
  >
    <div class="w-max border-t-2 border-solid border-t-foreground">contenu</div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Vous pouvez également définir la <Bold>border</Bold> de manière plus concise en utilisant la propriété
    <InlineCodeBlock>border</InlineCodeBlock> avec 1, 2, 3 ou 4 valeurs.
  </p>
  <MultiCodeBlock
    codes={[
      {
        code: `div {
  width: max-content;
  border: 2px solid black;
}`,
        language: 'CSS',
      },
      {
        code: `<div>contenu</div>`,
        language: 'HTML',
      },
    ]}
  >
    <div class="w-max border-2 border-solid border-foreground">contenu</div>
  </MultiCodeBlock>
</BasicSlide>
