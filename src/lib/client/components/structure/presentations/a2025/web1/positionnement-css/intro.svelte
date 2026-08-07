<script lang="ts">
  import {
    BasicSlide,
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
    Il existe une logique de positionnement dans la présentation des éléments d'une page HTML. Il
    s'agit essentiellement de l'ordre dans lequel les balises sont écrites dans le document HTML.
  </p>
  <p>
    Il est possible de modifier le comportement standard pour manipuler le positionnement des
    éléments dans le flux d'une page et offrir des effets qui ne seraient pas possibles dans les
    limites standards.
  </p>
</BasicSlide>
