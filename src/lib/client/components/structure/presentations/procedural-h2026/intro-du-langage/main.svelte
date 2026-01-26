<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    InlineCodeBlock,
    CodeBlock,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>Tout programme C commence par la fonction <InlineCodeBlock>main</InlineCodeBlock>.</p>
  <p class="fragment">
    C'est le point d'entrée du programme. C'est là que l'exécution du code débute.
  </p>
  <p class="fragment">
    La fonction <InlineCodeBlock>main</InlineCodeBlock> peut recevoir des arguments (paramètres) et peut
    retourner une valeur (généralement un entier). Nous verrons cela plus en détail dans les prochaines
    semaines.
  </p>
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="C"
    code={`int main() {
  // Indique que le programme s'est terminé avec succès
  return 0;
}`}
  />
  <CodeBlock
    fragment
    language="C"
    code={`int main() {
  // Indique que le programme s'est terminé avec une erreur
  return 1;
}`}
  />
</BasicSlide>
