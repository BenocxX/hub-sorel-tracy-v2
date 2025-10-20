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
  <List>
    <li>Attributer un sens logique à l'utilisation d'une balise HTML;</li>
    <li>Chaque balise "veut dire quelque chose";</li>
    <li>On utilise une balise uniquement dans son contexte logique;</li>
    <li>
      En harmonie avec le concept de balise (qui tend à ce que la balise
      <Italic>décrive</Italic> le contenu);
    </li>
    <li>Il existe plusieurs balises HTML dénuées de sens... elles sont à éviter;</li>
    <li>Meilleure clarté du code et par conséquent, une maintenance moins difficile;</li>
    <li>Meilleur référencement par les moteurs de recherche.</li>
  </List>
</BasicSlide>
