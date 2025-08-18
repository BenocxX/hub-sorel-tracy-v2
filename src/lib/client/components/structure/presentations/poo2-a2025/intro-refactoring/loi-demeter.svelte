<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    Bold,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 23 });
</script>

<BasicSlide>
  <p>
    La <Bold>LOI DE DÉMÉTER</Bold> est un principe de développement qui s'applique à l'orienté-objet
    ayant pour but de limiter les connaissances d'une classe et ainsi simplifier l'utilisation général.
  </p>
  <p>
    C'est l'idée qu'une classe doit faire le minimum d'hypothèse à propos de la structure des
    classes autre que lui-même.
  </p>
  <p>
    Par exemple : A().B().C() ... Dans ce cas, la classe A connait trop la représentation interne de
    B (pour savoir qu'il peut aller atteindre la classe C). Pour régler ces cas, il suffit de créer
    un service au sein de B qui fera l'interface vers C.
  </p>
</BasicSlide>
