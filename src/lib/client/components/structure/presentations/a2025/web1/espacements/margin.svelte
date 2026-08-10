<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
    MultiCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 15 });
</script>

<BasicSlide>
  <p>
    Le <Bold>margin</Bold> est l'espace autour des éléments, soit à l'extérieur de la bordure.
  </p>
  <MultiCodeBlock
    codes={[
      {
        code: `div {
  width: max-content;
  background-color: lightgray;
  margin: 20px;
}`,
        language: 'CSS',
      },
      {
        code: `<div>contenu</div>`,
        language: 'HTML',
      },
    ]}
  >
    <div class="m-[20px] w-max bg-[lightgray] dark:bg-secondary">contenu</div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Il est possible de définir le <Bold>margin</Bold> de manière individuelle pour chaque côté de l'élément.
    Ainsi, on peut définir le margin pour le haut, la droite, le bas et la gauche via les propriétés
    <InlineCodeBlock>margin-top</InlineCodeBlock>,
    <InlineCodeBlock>margin-right</InlineCodeBlock>,
    <InlineCodeBlock>margin-bottom</InlineCodeBlock> et
    <InlineCodeBlock>margin-left</InlineCodeBlock>.
  </p>
  <MultiCodeBlock
    codes={[
      {
        code: `div {
  width: max-content;
  background-color: lightgray;
  margin-top: 20px;
  margin-right: 10px;
  margin-bottom: 30px;
  margin-left: 40px;
}`,
        language: 'CSS',
      },
      {
        code: `<div>contenu</div>`,
        language: 'HTML',
      },
    ]}
  >
    <div class="m-[20px_10px_30px_40px] w-max bg-[lightgray] dark:bg-secondary">contenu</div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Vous pouvez également définir le <Bold>margin</Bold> de manière plus concise en utilisant la propriété
    <InlineCodeBlock>margin</InlineCodeBlock> avec 1, 2, 3 ou 4 valeurs.
  </p>
  <MultiCodeBlock
    codes={[
      {
        code: `div {
  width: max-content;
  background-color: lightgray;
  margin: 20px 10px 30px 40px;
}`,
        language: 'CSS',
      },
      {
        code: `<div>contenu</div>`,
        language: 'HTML',
      },
    ]}
  >
    <div class="m-[20px_10px_30px_40px] w-max bg-[lightgray] dark:bg-secondary">contenu</div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    À noter que le <Bold>margin</Bold> est transparent, c'est-à-dire que le fond de la page sera visible
    à travers le margin. Alors que le <Bold>padding</Bold> affiche le fond de l'élément (<InlineCodeBlock
      >background-color</InlineCodeBlock
    >).
  </p>
  <MultiCodeBlock
    codes={[
      {
        code: `div {
  width: max-content;
  background-color: lightgray;
  margin: 20px 10px 30px 40px;
  border: 20px solid black;
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
    <div
      class="m-[20px_10px_30px_40px] w-max border-[20px] border-solid border-[black] bg-[lightgray] p-[20px_10px_30px_40px] dark:bg-secondary"
    >
      contenu
    </div>
  </MultiCodeBlock>
</BasicSlide>
