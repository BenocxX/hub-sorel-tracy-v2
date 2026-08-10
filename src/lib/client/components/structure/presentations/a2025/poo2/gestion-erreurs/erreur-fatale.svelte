<script lang="ts">
  import {
    BasicSlide,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 3 });
</script>

<BasicSlide>
  <p>
    Tous les programmeurs ont causé des erreurs fatales à un moment ou un autre. Ces types d'erreurs
    sont les pires et doivent être évités à tout prix. Il s'agit d'un problème si grave que
    l'exécution du programme est compromise.
  </p>
  <p>
    Un code d'erreur est retourné au système d'exploitation qui arrête alors l'exécution du
    processus. Il est rare que ce type d'erreur soit souhaité réellement par l'utilisateur. On évite
    d'inscrire dans le programme (en C par exemple) des instructions
    <InlineCodeBlock>exit -1</InlineCodeBlock>;
  </p>
  <p>
    Une erreur fatale survient souvent lorsqu'on utilise des bibliothèques ou des ressources
    externes. Parfois, il manque des dépendances ou les ressources sont introuvables. Utilisez
    <InlineCodeBlock>Maven</InlineCodeBlock> aide à réduire ses risques.
  </p>
</BasicSlide>
