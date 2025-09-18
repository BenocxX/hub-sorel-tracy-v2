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
    Un test unitaire est simplement <Bold>
      un petit morceau de code qui s'assure qu'une autre petite portion de code fonctionne
      correctement
    </Bold>.
  </p>
  <p>
    Il s'agit d'une classe spéciale, dite de tests, qui contient des méthodes destinées à tester une
    fonctionnalité très restreinte d'une autre classe.
  </p>
  <p>
    Une fois que les classes de tests sont bien construites, il suffit de les exécuter pour savoir
    si l'application se comporte comme prévu.
  </p>
</BasicSlide>
