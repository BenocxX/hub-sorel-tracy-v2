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
    <li>Permets d'indiquer au navigateur comment interpréter les caractères.</li>
    <li>
      Par défaut, les caractères <Italic>normaux</Italic> (a-Z, 0-9, etc.) sont interprétés correctement.
    </li>
    <li>
      Pour tous les autres caractères (non présent dans la langue anglaise), il faut préciser un jeu
      de caractères au navigateur pour lui permettre de comprendre ces <Italic>nouveaux</Italic> caractères
      (é, à, è, ê, etc.)
    </li>
  </List>
</BasicSlide>
