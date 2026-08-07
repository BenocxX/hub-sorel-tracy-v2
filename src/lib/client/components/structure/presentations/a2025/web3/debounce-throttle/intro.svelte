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
    Lors de la conception d'un site web, il est crucial de prendre en compte les performances et
    l'optimisation. Un site web optimisé offre une meilleure expérience utilisateur, améliore le
    référencement sur les moteurs de recherche et réduit les coûts d'hébergement.
  </p>
  <p>
    L'optimisation doit avoir lieu autant au niveau client que serveur. Toutefois, dans le cadre du
    cours, nous nous concentrerons principalement sur l'optimisation côté client.
  </p>
</BasicSlide>
