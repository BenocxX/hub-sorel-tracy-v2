<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 10 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      Il s'agit de l'interaction entre le logiciel et un utilisateur final. Fais référence aux
      principes ergonomiques.
    {/snippet}
    <li>
      <Bold>Compréhensibilité</Bold>. Détermine la facilité avec laquelle les fonctionnalités du
      logiciel peuvent être comprises et interprétées par l'utilisateur.
    </li>
    <li>
      <Bold>Facilité d'apprentissage</Bold>. Représente l'effort nécessaire pour différents types
      d'utilisateurs ciblés à apprendre comment utiliser le logiciel.
    </li>
    <li>
      <Bold>Exploitabilité</Bold>. Facilité d'opération au quotidien par un type d'utilisateur donné
      dans un environnement précis.
    </li>
  </List>
</BasicSlide>
