<script lang="ts">
  import {
    BasicSlide,
    Bold,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 24 });
</script>

<BasicSlide>
  <p>
    La couverture de tests permet d'obtenir le
    <Bold>pourcentage du code qui se trouve sous test</Bold> pour l'ensemble du projet, pour chaque classe
    et chaque ligne de code individuellement.
  </p>
  <p>
    Les IDE vont normalement fournir une façon d'obtenir la couverture de tests directement une fois
    les tests exécutés. Sinon, il faut manuellement installé un plugin à cet effet comme Cobertura.
  </p>
</BasicSlide>
