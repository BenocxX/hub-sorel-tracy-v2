<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    List,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 0 });
</script>

<BasicSlide>
  <List paragraph="Pour résoudre un problème en programmation, il faut : ">
    <li>Avoir une bonne compréhension du problème (questionner le client)</li>
    <li>Avoir des spécifications claires et précises</li>
    <li>Connaître les données disponibles</li>
    <li>Connaître le résultat souhaité</li>
    <li>Savoir les traitements à faire sur les données</li>
  </List>
  <p class="fragment">
    Une fois ces éléments en main, on peut commencer à planifier la solution avant de coder. Il est
    conseillé de diviser le problème en sous-problèmes plus petits et de les résoudre un à un.
  </p>
</BasicSlide>
