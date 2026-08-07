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
  registerInTOC({ page: 9 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      Habilité du logiciel à maintenir un certain niveau de performance sous des conditions
      spécifiées pour une durée donnée.
    {/snippet}
    <li>
      <Bold>Maturité</Bold>. Concerne les fréquences et le nombre d'occurrences des défaillances du
      logiciel (MTF).
    </li>
    <li>
      <Bold>Tolérance aux fautes</Bold>. Capacité du logiciel à fonctionner dans un environnement
      dégradé après une erreur.
    </li>
    <li>
      <Bold>Possibilité de récupération</Bold>. La facilité de recouvrement du logiciel en cas de
      défaillance à un état normal (données, connexions, etc.).
    </li>
  </List>
</BasicSlide>
