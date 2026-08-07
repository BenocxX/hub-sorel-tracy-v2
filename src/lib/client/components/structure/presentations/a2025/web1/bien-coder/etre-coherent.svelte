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
  registerInTOC({ page: 14 });
</script>

<BasicSlide>
  <p>
    L'élément le plus important dans l'écriture du code est d'être <Bold>cohérent</Bold>!
  </p>
  <p>
    Si vous utilisez 2 espaces pour votre indentation, vous devez utiliser 2 espaces pour tous les
    éléments. Si vous nommez vos éléments d'une manière, vous devez conserver cette manière pour
    tout le site web.
  </p>
  <p>
    On ne veut pas mixer les styles et les conventions. Quand on regarde un code, il doit être écrit
    pour avoir l'air d'avoir été écrit par une seule personne alors qu'il est possible que ce soit
    une équipe de 10 personnes qui l'ait écrit.
  </p>
  <p>
    On veut être <Bold>cohérent</Bold> du début à la fin!
  </p>
</BasicSlide>
