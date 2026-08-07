<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 12 });
</script>

<BasicSlide>
  <p>
    Il est possible d'effectuer une requête sur l'orientation du média. Concrètement, si la hauteur
    est plus grande que la largeur, nous sommes en mode <Bold>portrait</Bold>. Si c'est le
    contraire, nous sommes en mode <Bold>landscape</Bold>.
  </p>
  <CodeBlock
    language="CSS"
    code={`@media all and (orientation: portrait) {
    p {
        color: red;
    }
}

@media all and (orientation: landscape) {
    p {
        color: blue;
    }
}`}
  />
</BasicSlide>
