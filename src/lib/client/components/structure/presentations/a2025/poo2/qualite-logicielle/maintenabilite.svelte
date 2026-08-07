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
  registerInTOC({ page: 12 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      Constitue l'effort requis en vue de corriger, d'adapter, d'améliorer, de modifier le logiciel
      ou d'y ajouter une nouvelle fonctionnalité.
    {/snippet}
    <li>
      <Bold>Analysabilité</Bold>. Caractérise la capacité d'identifier la cause d'un échec dans le
      logiciel.
    </li>
    <li>
      <Bold>Modificabilité</Bold>. L'effort requis pour effectuer un changement dans le logiciel.
    </li>
    <li>
      <Bold>Stabilité</Bold>. La sensibilité du logiciel aux changements qui risquent de causer de
      nouvelles défaillances. Il s'agit des risques d'effets imprévus à la suite d'une modification.
    </li>
    <li>
      <Bold>Testabilité</Bold>. Représente l'effort nécessaire pour vérifier un changement dans le
      logiciel et s'assure de son bon fonctionnement.
    </li>
  </List>
</BasicSlide>
