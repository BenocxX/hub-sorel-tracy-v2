<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
    Italic,
    setSlideSection,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { registerInTOC } from '$lib/client/components/revealjs/custom/utils.svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 14 });
</script>

<BasicSlide>
  <p>
    Le langage HTML est un <Bold>langage de présentation</Bold> qui définit la structure d'un site Web.
    Il n'y a pas de logique algorithmique dans le langage HTML (pas de 'if' ou de boucles, etc.).
  </p>
  <p>
    Le code HTML d'une page se trouve dans les données de la <Bold>réponse HTTP</Bold> qui est destiné
    à être interprété directement par les navigateurs Internet.
  </p>
  <p>
    L'acronyme HTML signifie <Bold>Hypertext Markup Language</Bold>. Ce langage est constitué
    uniquement de balises (markup).
  </p>
</BasicSlide>
