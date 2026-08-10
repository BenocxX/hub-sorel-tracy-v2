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
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    La gestion des erreurs efficiente dans un programme contribue grandement à sa
    <Bold>robustesse</Bold> (plante le moins possible ... idéalement jamais). Normalement, tous les programmes
    devraient être robustes jusqu'à un certain point selon le contexte.
  </p>
  <List>
    {#snippet paragraph()}
      Certaines applications précises nécessitent une robustesse à toute épreuve. Par exemple, les
      jeux vidéo et les dispositifs médicaux. Il n'est pas facile de prévoir tous les cas de figure
      ... Les tests unitaires aident à trouver des bogues, mais il est nécessaire d'implémenter des
      techniques de gestion d'erreur dans le but :
    {/snippet}
    <li>D'éviter les erreurs;</li>
    <li>De corriger les erreurs;</li>
    <li>De consolider les erreurs.</li>
  </List>
</BasicSlide>
