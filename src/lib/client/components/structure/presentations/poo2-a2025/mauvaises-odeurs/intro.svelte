<script lang="ts">
  import {
    BasicSlide,
    Italic,
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
    Il peut être difficile de voir les signes qui indiquent que le code est sale et nécessite un
    nettoyage par <Italic>refactoring</Italic>. Kent Beck et Matin Fowler se sont penchés sur la
    question et ont identifié des « mauvaises odeurs » (<Italic>code smells</Italic>) que le code
    dégage lorsqu'il est sale.
  </p>
  <p>
    Il suffit donc de regarder le code, de prendre une bonne respiration et d'analyser les odeurs.
    Concrètement, il s'agit de signaux faibles que le code dégage. Il cri a l'aide et personne ne
    l'entend. Il faut simplement être attentif à ses signaux lors de la rédaction du code.
  </p>
</BasicSlide>
