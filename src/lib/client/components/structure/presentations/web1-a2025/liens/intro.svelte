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
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    On utilise un lien HTML lorsqu'on veut permettre à un internaute de naviguer vers une autre page
    de notre site ou alors de naviguer vers une page d'un site externe.
  </p>
  <p>
    On peut également utiliser un lien pour former un <Bold>ancrage</Bold> dans la page en cours ou préparer
    un logiciel d'envoi de courriel vers une adresse courriel donnée.
  </p>
</BasicSlide>
