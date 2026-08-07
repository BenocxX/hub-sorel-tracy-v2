<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 14 });
</script>

<BasicSlide>
  <p>
    Il existe plusieurs autres normes ou cadres de référence qui définissent ce qu'est la qualité
    logiciel sous plusieurs angles (par exemple, IEEE 830). Tous s'accordent pour donner de
    l'importance aux exigences non fonctionnelles.
  </p>
  <p>
    Pour évaluer si un logiciel est dit de "qualité", il ne faut pas s'arrêter uniquement aux
    fonctionnalités que le logiciel doit effectuer.
  </p>
  <p>
    Si le code est incroyablement sale, mais qu'il répond aux exigences, on peut dire du logiciel
    qu'il est fonctionnel sans dire qu'il est de qualité.
  </p>
</BasicSlide>
