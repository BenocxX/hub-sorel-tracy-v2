<script lang="ts">
  import {
    BasicSlide,
    InlineCodeBlock,
    CodeBlock,
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
    L'opérateur <InlineCodeBlock>not</InlineCodeBlock> peut être utilisé pour obtenir le résultat inverse
    de la totalité de la requête tout comme l'opérateur de négation
    <InlineCodeBlock>!</InlineCodeBlock> dans les langages de programmation comme Java, C, #, etc.
  </p>
  <CodeBlock
    language="CSS"
    code={`/* @media not (print and (color)) { ... }
 * 
 * En d'autres termes, tous les media qui ne sont PAS une
 * imprimante et qui ne supporte PAS les couleurs.
 */
@media not print and (color) {
    p {
        color: gray;
    }
}`}
  />
</BasicSlide>
