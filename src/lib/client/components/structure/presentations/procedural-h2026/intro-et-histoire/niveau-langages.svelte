<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    Bold,
    Image,
    InlineCodeBlock,
  } from '$lib/client/components/revealjs/custom';
  import Iceberg from './iceberg.png';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 0 });
</script>

<BasicSlide>
  <div class="flex gap-16">
    <Image src={Iceberg} alt="Iceberg meme des niveaux des languages" figureClass="flex-1" />
    <div class="flex-[2] space-y-8">
      <p>
        Il y a plusieurs niveaux de langages de programmation. Les langages de plus bas niveau sont
        plus proches du langage machine, tandis que les langages de plus haut niveau sont plus
        abstraits et plus faciles à utiliser pour les humains.
      </p>
      <p class="fragment">
        Le langage <InlineCodeBlock>C</InlineCodeBlock> est considéré comme un langage de bas niveau
        car il offre un contrôle direct sur la mémoire et le matériel.
      </p>
      <p class="fragment">
        Alors que des langages comme <InlineCodeBlock>Python</InlineCodeBlock> ou
        <InlineCodeBlock>JavaScript</InlineCodeBlock> sont considérés comme des langages de haut niveau
        en raison de leur syntaxe plus simple.
      </p>
    </div>
  </div>
</BasicSlide>
