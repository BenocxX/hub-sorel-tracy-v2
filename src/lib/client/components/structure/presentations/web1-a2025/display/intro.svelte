<script lang="ts">
  import {
    BasicSlide,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import AttentionSubTitle from '$lib/client/components/revealjs/custom/subtitles/attention-sub-title.svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Il existe une propriété CSS <InlineCodeBlock>display</InlineCodeBlock> qui peut être utilisée sur
    n'importe quelle balise qui permet de définir le traitement de son affichage.
  </p>
  <p>
    Par défaut, chaque balise à une certaine valeur <InlineCodeBlock>display</InlineCodeBlock>
    de déterminer. Cette valeur permet de modifier complètement le comportement positionnel d'un élément.
    Chaque valeur de <InlineCodeBlock>display</InlineCodeBlock> entraine un certain nombre de restrictions.
  </p>
  <p>
    Ainsi, il sera possible de tirer avantage de ces modifications. Par exemple, nous pourrions
    faire en sorte qu'une balise <InlineCodeBlock>a</InlineCodeBlock> agit comme une balise
    <InlineCodeBlock>div</InlineCodeBlock>.
  </p>
</BasicSlide>
<BasicSlide>
  {#snippet subTitleComponent()}
    <AttentionSubTitle />
  {/snippet}
  <p>
    Il faut rester prudent avec cette propriété. Contenu de sa puissance qui permet d'affecter
    grandement les comportements, il faut faire attention à ne pas briser la sémantique des balises.
  </p>
  <p>
    Grâce à display, il serait possible de modifier le comportement de la balise strong de sorte à
    l'utiliser comme une balise div. Ce genre de modification n'est pas à faire! On ne voudrait pas
    briser la sémantique, mais simplement tirer avantage du meilleur dans des situations qui
    l'exige.
  </p>
</BasicSlide>
