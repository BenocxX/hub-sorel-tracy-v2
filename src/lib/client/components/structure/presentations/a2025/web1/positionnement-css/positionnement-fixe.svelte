<script lang="ts">
  import {
    BasicSlide,
    Italic,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 5 });
</script>

<BasicSlide>
  <p>
    Le positionnement fixé (<InlineCodeBlock>position: fixed</InlineCodeBlock>) permet de
    positionner l'élément relativement à l'écran directement.
  </p>
  <p>
    Nous pouvons donc appliquer des propriétés de positionnement (left, top, right, bottom) et
    ceux-ci seront entièrement relatifs à l'écran de l'internaute !
  </p>
  <CodeBlock
    language="CSS"
    code={`.element {
    position: fixed;
    left: 100px;
    top: 25px;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Un élément positionné <Italic>fixe</Italic> est comme "inexistant" dans le flux naturel du document.
    Il ne sera jamais pris en compte par la suite de la page. C'est comme s'il flottait au-dessus du
    reste du contenu.
  </p>
  <p>Lorsque le navigateur déroule la page, l'élément restera toujours au même endroit.</p>
  <p>
    On utilise souvent cette technique pour faire apparaître un message d'information à l'internaute
    dans un coin de l'écran, ou pour mettre un entête de site qui reste toujours en haut de l'écran
    ou encore un pied de page toujours présent.
  </p>
</BasicSlide>
