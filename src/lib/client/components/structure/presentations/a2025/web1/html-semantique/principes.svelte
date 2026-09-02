<script lang="ts">
  import {
    BasicSlide,
    Italic,
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
  <List paragraph="Une balise HTML est sémantique lorsqu'elle:">
    <li>A un sens logique;</li>
    <li>Est utilisée dans un contexte approprié;</li>
    <li>Décrit le contenu qu'elle contient;</li>
    <li>Est compréhensible par les humains et les machines.</li>
  </List>
  <p class="fragment">Il existe plusieurs balises nénués de sens... Elles sont à éviter.</p>
</BasicSlide>
