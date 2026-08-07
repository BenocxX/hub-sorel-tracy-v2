<script lang="ts">
  import {
    BasicSlide,
    BoldItalic,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 15 });
</script>

<BasicSlide>
  <p>
    Tout comme le code CSS traditionnel, il est possible d'appliquer un même bloc de code CSS pour
    plusieurs requêtes média. Il suffit de séparer les requêtes par une virgule tout comme les
    sélecteurs pour un bloc de style.
  </p>
  <p>
    Conceptuellement, on peut associer la virgule à un <BoldItalic>ou</BoldItalic> logique (
    <InlineCodeBlock>||</InlineCodeBlock>) pour appliquer un bloc de style.
  </p>
  <CodeBlock
    language="CSS"
    code={`@media (min-device-pixel-ratio: 2),
        handheld and (orientation: portrait),
        screen and (orientation: landscape) {
    p {
        color: red;
    }
}`}
  />
</BasicSlide>
