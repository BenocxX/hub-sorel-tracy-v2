<script lang="ts">
  import {
    BasicSlide,
    Bold,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import DisplayDemoCodeBlock from './display-demo-code-block.svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 13 });
</script>

<BasicSlide>
  <p>
    <Bold>flex</Bold> permet l'utilisation de toutes les propriétés CSS reliés au Flexbox.
  </p>
  <p>
    Elles permettent de créer des mises en page complexes et de gérer l'alignement des éléments de
    manière plus efficace. C'est une propriété très puissante et très utile que nous allons utiliser
    très souvent.
  </p>
  <p>
    Personnellement, j'utilise pratiquement juste <Bold>flex</Bold> lors de la construction d'un site
    web. Cependant, il est important de comprendre les autres valeurs de
    <Bold>display</Bold> pour arriver à faire ce que l'on veut.
  </p>
  <p>
    La propriété <Bold>flex</Bold> est essentielle pour la construction de sites web modernes et responsives.
    Je vous recommande fortement de vous familiariser avec cette propriété le plus rapidement possible.
  </p>
  <p>Nous allons en apprendre plus sur les Flexbox dans une prochaine présentation</p>
</BasicSlide>
<BasicSlide>
  <DisplayDemoCodeBlock display="flex" />
</BasicSlide>
