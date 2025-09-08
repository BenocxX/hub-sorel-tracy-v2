<script lang="ts">
  import {
    BasicSlide,
    Bold,
    MultiCodeBlock,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 7 });
</script>

<BasicSlide>
  <p>
    Le <Bold>padding</Bold> est l'espace entre le contenu et la bordure d'un élément.
  </p>
  <MultiCodeBlock
    codes={[
      {
        code: `div {
  width: max-content;
  background-color: lightgray;
  padding: 20px;
}`,
        language: 'CSS',
      },
      {
        code: `<div>contenu</div>`,
        language: 'HTML',
      },
    ]}
  >
    <div class="w-max bg-[lightgray] p-[20px] dark:bg-[lightgray]">contenu</div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Il est possible de définir le <Bold>padding</Bold> de manière individuelle pour chaque côté de l'élément.
    Ainsi, on peut définir le padding pour le haut, la droite, le bas et la gauche via les propriétés
    <InlineCodeBlock>padding-top</InlineCodeBlock>,
    <InlineCodeBlock>padding-right</InlineCodeBlock>,
    <InlineCodeBlock>padding-bottom</InlineCodeBlock> et
    <InlineCodeBlock>padding-left</InlineCodeBlock>.
  </p>
  <MultiCodeBlock
    codes={[
      {
        code: `div {
  width: max-content;
  background-color: lightgray;
  padding-top: 20px;
  padding-right: 10px;
  padding-bottom: 30px;
  padding-left: 40px;
}`,
        language: 'CSS',
      },
      {
        code: `<div>contenu</div>`,
        language: 'HTML',
      },
    ]}
  >
    <div class="w-max bg-[lightgray] p-[20px_10px_30px_40px] dark:bg-[lightgray]">contenu</div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Vous pouvez également définir le <Bold>padding</Bold> de manière plus concise en utilisant la propriété
    <InlineCodeBlock>padding</InlineCodeBlock> avec 1, 2, 3 ou 4 valeurs.
  </p>
  <p>
    Si une seule valeur est indiquée, elle s'applique à tous les côtés. Si deux valeurs sont
    indiquées, la première s'applique au haut et au bas, la seconde à gauche et à droite.
  </p>
  <MultiCodeBlock
    codes={[
      {
        code: `div {
  width: max-content;
  background-color: lightgray;
  padding: 20px 10px;
}`,
        language: 'CSS',
      },
      {
        code: `<div>contenu</div>`,
        language: 'HTML',
      },
    ]}
  >
    <div class="w-max bg-[lightgray] p-[20px_10px] dark:bg-[lightgray]">contenu</div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Si trois valeurs sont indiquées, la première s'applique au haut, la seconde à gauche et à
    droite, la troisième au bas.
  </p>
  <MultiCodeBlock
    codes={[
      {
        code: `div {
  width: max-content;
  background-color: lightgray;
  padding: 20px 10px 30px;
}`,
        language: 'CSS',
      },
      {
        code: `<div>contenu</div>`,
        language: 'HTML',
      },
    ]}
  >
    <div class="w-max bg-[lightgray] p-[20px_10px_30px] dark:bg-[lightgray]">contenu</div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Si quatre valeurs sont indiquées, elles s'appliquent dans l'ordre suivant: haut, droite, bas,
    gauche.
  </p>
  <MultiCodeBlock
    codes={[
      {
        code: `div {
  width: max-content;
  background-color: lightgray;
  padding: 20px 10px 30px 40px;
}`,
        language: 'CSS',
      },
      {
        code: `<div>contenu</div>`,
        language: 'HTML',
      },
    ]}
  >
    <div class="w-max bg-[lightgray] p-[20px_10px_30px_40px] dark:bg-[lightgray]">contenu</div>
  </MultiCodeBlock>
</BasicSlide>
