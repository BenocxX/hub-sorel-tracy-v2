<script lang="ts">
  import {
    BasicSlide,
    Italic,
    Bold,
    MultiCodeBlock,
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
    <Bold>Extraction de méthodes</Bold>. Le <Italic>refactoring</Italic> le plus commun. Il s'agit d'extraire
    un fragment d'une méthode dans une nouvelle méthode. Contribue énormément à la lisibilité du code
    (se lit comme un livre !).
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `public void afficherEcran() {
    afficherEntete();

    // Afficher le menu
    System.out.println("1. Batman");
    System.out.println("2. Joker");
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `public void afficherEcran() {
    afficherEntete();
    afficherMenu();
}`,
      },
    ]}
  />
</BasicSlide>
