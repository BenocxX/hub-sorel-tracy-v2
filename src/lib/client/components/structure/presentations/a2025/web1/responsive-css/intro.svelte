<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
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
    Lors du développement d'un site web, il est important de s'assurer que ce dernier s'affiche
    correctement sur une variété d'appareils et de tailles d'écran. De nos jours, les utilisateurs
    accèdent aux sites web depuis une multitude d'appareils, allant des ordinateurs de bureau aux
    iPhones en passant par les tablettes... et même des montres connectés ou encore des casques VR!
  </p>
  <p>
    Il est possible d'appliquer du style CSS seulement pour certain format d'écran, on appelle cela
    du <Bold>responsive CSS</Bold>. Pour écrire du responsive CSS, on utilise des
    <InlineCodeBlock>media queries</InlineCodeBlock>, qui nous permettent de cibler des
    caractéristiques spécifiques des appareils, comme la largeur de l'écran, son orientation, le
    type, etc.
  </p>
</BasicSlide>
