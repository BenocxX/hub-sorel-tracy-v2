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
  registerInTOC({ page: 26 });
</script>

<BasicSlide>
  <p>
    Votre code CSS devrait toujours se retrouver dans des fichiers CSS externes (e.g. style.css)
    pour vous permettre de pouvoir le réutiliser dans n'importe quelle page facilement.
  </p>
  <p>
    Si vous mettez le CSS dans une balise <InlineCodeBlock>style</InlineCodeBlock>, ce CSS sera
    disponible seulement pour cette page, ce qui le rend impossible à réutiliser.
  </p>
  <p>
    Même si vous avez seulement une page HTML, on utilise quand même un fichier CSS externe pour que
    le fichier soit déjà prêt à être réutiliser pour de nouvelles pages. De plus, cela rend le code
    plus clair puisque nous séparons le CSS et le HTML dans deux fichiers séparés, rendant la
    lecture et la maintenance du code plus facile.
  </p>
</BasicSlide>
