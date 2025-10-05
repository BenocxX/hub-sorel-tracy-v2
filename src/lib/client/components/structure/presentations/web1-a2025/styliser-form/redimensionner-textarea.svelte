<script lang="ts">
  import {
    BasicSlide,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { Textarea } from '$lib/client/components/ui/textarea';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 6 });
</script>

<BasicSlide>
  <p>
    Sous certains navigateurs il est possible d'agrandir les textareas. C'est affreux, car ça peut
    complètement détruire une disposition si on laisse ce traitement au hasard. Il est souvent plus
    simple de supprimer l'option de redimensionnement avec la propriété
    <InlineCodeBlock>resize: none</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="css"
    code={`textarea {
    resize: none;
}`}
  >
    <Textarea class="resize-none" />
  </CodeBlock>
</BasicSlide>
