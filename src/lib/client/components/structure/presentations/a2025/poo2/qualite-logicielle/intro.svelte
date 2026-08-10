<script lang="ts">
  import {
    BasicSlide,
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
    La qualité logicielle est un objectif que toutes les équipes de développement tentent
    d'atteindre. Il est cependant plus difficile que l'on pense de s'y rendre.
  </p>
  <p>
    Depuis le début de vos études, on tente de vous sensibiliser à la qualité de vos programmes. Il
    est maintenant temps de définir plus précisément ce qu'est réellement la qualité logicielle
    depuis une norme internationale (ISO 9126).
  </p>
</BasicSlide>
