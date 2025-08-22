<script lang="ts">
  import {
    BasicSlide,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      Cette présentation a pour but de sensibiliser à l'utilisation d'un gestionnaire de source. Que
      faites-vous présentement pour organiser votre développement? Quelles sont les difficultés
      rencontrées?
    {/snippet}
    <li>Sauvegarde manuelle (plus ou moins fiable et plus ou moins fréquente)</li>
    <li>Difficile (souvent même impossible) de retracer des modifications dans le code</li>
    <li>
      Très difficile de travailler en équipe (écraser le travail des autres, difficulté
      d'intégration du code des coéquipiers, etc.)
    </li>
    <li>Pratiquement aucun historique de l'évolution du code</li>
  </List>
  <p>Un gestionnaire de source permet d'éliminer ces problématiques !</p>
</BasicSlide>
