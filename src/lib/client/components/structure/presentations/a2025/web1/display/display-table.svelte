<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 11 });
</script>

<BasicSlide>
  <p>
    Il existe une valeur <Bold>table-cell</Bold> (et <Bold>table</Bold>) qui permet transformer le
    traitement d'affichage d'un élément comme s'il était une cellule de tableau.
  </p>
  <p>
    L'avantage principal de <InlineCodeBlock>display: table-cell</InlineCodeBlock> est qu'il
    <Bold>permet d'utiliser l'alignement vertical</Bold> puisque c'est possible à l'intérieur d'une cellule
    de tableau. Ainsi, on pourrait transformer une
    <InlineCodeBlock>div</InlineCodeBlock> avec <Bold>table-cell</Bold> pour permettre l'alignement vertical
    au lieu de manipuler des espacements.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Par contre, on évite d'avoir recours à cette valeur <Bold>display</Bold> puisque nous évitons d'utiliser
    un tableau pour former une structure. Alors, pourquoi transformer des divisions en cellules de tableau?
    Ceci brise la sémantique simplement pour avoir accès à une propriété d'alignement vertical.
  </p>
  <p>
    Ça n'en vaut pas la peine. Il existe d'autres moyens pour aligner verticalement des éléments
    sans avoir à transformer la structure en tableau. Notamment avec
    <InlineCodeBlock>display: flex</InlineCodeBlock> et les techniques de positionnement CSS.
  </p>
</BasicSlide>
