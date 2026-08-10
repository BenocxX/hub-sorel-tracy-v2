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
  <p>Un formulaire permet la communication avec l'utilisateur dans une page Web.</p>
  <p>
    Par exemple, pour une authentification, nous allons demander un nom d'utilisateur et un mot de
    passe. L'internaute peut saisir les informations au clavier dans un champ de texte. Ceci
    constitue donc un formulaire.
  </p>
</BasicSlide>
