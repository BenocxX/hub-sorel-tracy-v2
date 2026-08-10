<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Lorsqu'on ajoute des écouteurs d'événements à des éléments, comment le navigateur fait-il pour
    savoir qui a déclenché l'événement ?
  </p>
  <p class="fragment">
    Par exemple, si on a un bouton à l'intérieur d'une <InlineCodeBlock>div</InlineCodeBlock> qui est
    elle aussi cliquable, et qu'on clique sur le bouton, comment le navigateur sait-il que c'est le bouton
    qui a été cliqué et non la <InlineCodeBlock>div</InlineCodeBlock> parente ?
  </p>
  <p class="fragment">
    Nous allons voir comment le navigateur gère les événements en utilisant un mécanisme appelé
    <Bold>event bubbling</Bold> (<Italic>remontée d'événements</Italic>). De plus, nous verrons
    comment l'<Bold>event delegation</Bold> (<Italic>délégation d'événements</Italic>) peut être
    utilisé pour optimiser la gestion des événements.
  </p>
</BasicSlide>
