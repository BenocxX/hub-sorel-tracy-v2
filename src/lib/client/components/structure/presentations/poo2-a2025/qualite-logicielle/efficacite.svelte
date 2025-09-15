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
  registerInTOC({ page: 11 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      Relation entre le niveau de performance et la quantité de ressources utilisées (matériel,
      temps, personnel) pour un logiciel. Permets d'évaluer le rendement.
    {/snippet}
    <li>
      <Bold>Efficacité en temps</Bold>. Évaluation du temps de réponse des transactions (UTC, E/S,
      attente, réseau, etc.)
    </li>
    <li>
      <Bold>Efficacité en ressource</Bold>. Évaluation des ressources utilisées telle que le
      processeur, la mémoire principale, la mémoire virtuelle, les disques (fichiers) et le réseau.
    </li>
  </List>
</BasicSlide>
