<script lang="ts">
  import {
    BasicSlide,
    Bold,
    MultiCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 6 });
</script>

<BasicSlide>
  <p>
    Le <Bold>contenu</Bold> représente le texte ou l'image à l'intérieur d'un élément. C'est le noyaux
    du <Bold>box model</Bold>.
  </p>
  <p>Lorsqu'on définit une hauteur/largeur à un élément, elle affecte le contenu.</p>
  <MultiCodeBlock
    codes={[
      {
        code: `div {
  width: 200px;
  background-color: lightgray;
}`,
        language: 'CSS',
      },
      {
        code: `<div>contenu</div>`,
        language: 'HTML',
      },
    ]}
  >
    <div class="w-[200px] bg-[lightgray] dark:bg-[gray]">contenu</div>
  </MultiCodeBlock>
</BasicSlide>
