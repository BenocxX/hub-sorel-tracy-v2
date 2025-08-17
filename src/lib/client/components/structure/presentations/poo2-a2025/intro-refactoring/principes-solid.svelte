<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    setSlideSection,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import List from '$lib/client/components/revealjs/custom/list.svelte';
  import { registerInTOC } from '$lib/client/components/revealjs/custom/utils.svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 4 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      Les principes <Bold class="text-primary dark:text-primary-400">SOLID</Bold> sont <Bold
        >5 principes de conception</Bold
      > qui s'appliquent au paradigme orienté-objet dans le but d'obtenir un code plus compréhensif,
      plus maintenable et plus flexible. Appliquer ces principes lors du développement facilite le refactoring
      et s'assure d'avoir une qualité minimale garantie.
    {/snippet}
    <li>
      <Bold class="text-primary dark:text-primary-400">S</Bold>ingle responsability principle
      (Responsabilité unique)
    </li>
    <li>
      <Bold class="text-primary dark:text-primary-400">O</Bold>pen/close principe
      (Ouverture/Fermeture)
    </li>
    <li>
      <Bold class="text-primary dark:text-primary-400">L</Bold>iskov substitution principle
      (Substitution de Liskov)
    </li>
    <li>
      <Bold class="text-primary dark:text-primary-400">I</Bold>nterface segregation principle
      (Ségrégation des interfaces)
    </li>
    <li>
      <Bold class="text-primary dark:text-primary-400">D</Bold>ependency inversion principle
      (Inversion des dépendances)
    </li>
  </List>
</BasicSlide>
