<script lang="ts">
  import {
    BasicSlide,
    Bold,
    setSlideSection,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import Italic from '$lib/client/components/revealjs/custom/italic.svelte';
  import { registerInTOC } from '$lib/client/components/revealjs/custom/utils.svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Le <Bold>REFACTORING</Bold> (réusinage) est un processus de restructuration du code source de façon
    à améliorer sa <Bold>qualité non-fonctionnel</Bold> et par conséquent, sa <Bold
      >maintenabilité</Bold
    >.
  </p>
  <p class="fragment">
    Il existe un ensemble de problèmes récurrents au sein du code qui sont facilement détectables.
    Les opérations de <Italic>refactoring</Italic> visent à corriger ces défauts.
  </p>
  <p class="fragment">
    Ces opérations sont, en quelque sorte, des recettes éprouvées pour arriver à un code
    satisfaisant.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Une fonctionnalité ne devrait jamais être considéré comme <Italic>terminée</Italic> tant que le code
    source ne respecte pas les critères de qualité.
  </p>
  <p class="fragment">
    Vos premières sessions visaient sensiblement à vous apprendre à réaliser des applications qui
    répondent à un besoin précis en se souciant minimalement de sa qualité.
  </p>
  <p class="fragment">
    Maintenant, il faut être en mesure de réaliser les fonctionnalités tout en respectant des normes
    de qualité logicielle.
  </p>
</BasicSlide>
