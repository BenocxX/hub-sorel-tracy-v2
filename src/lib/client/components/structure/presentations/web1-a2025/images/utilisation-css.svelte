<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    InlineCodeBlock,
    CodeBlock,
    MultiCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 10 });

  const gameOfThroneImage =
    'https://images.justwatch.com/poster/297859466/s166/game-of-thrones.webp';
</script>

<BasicSlide>
  <p>
    Il existe plusieurs façon d'utiliser une ressource image depuis le code CSS. La façon la plus
    courante est d'utiliser le fond d'un élément pour y mettre une image avec la propriété <InlineCodeBlock
      >background-image</InlineCodeBlock
    >. Il suffit de préciser l'URL vers l'image.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `#GameOfThronesImage {
  height: 400px;
  background-image: url('${gameOfThroneImage}');
}`,
      },
      {
        language: 'HTML',
        code: `<div id="GameOfThronesImage"></div>`,
      },
    ]}
  >
    <div class="h-[400px] bg-[url('{gameOfThroneImage}')]"></div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Par défaut, l'image sera affichée dans le coin supérieur gauche de l'élément ciblé et sera
    répété de façon verticale et de façon horizontale pour couvrir la totalité de la surface.
  </p>
  <p>
    Pour contrôler la répétition de l'image soit verticalement ou horizontalement, on utilise la
    propriété <InlineCodeBlock>background-repeat</InlineCodeBlock> qui peut prendre les valeurs: <Bold
      >no-repeat</Bold
    >, <Bold>repeat</Bold> (défaut), <Bold>repeat-x</Bold> et
    <Bold>repeat-y</Bold>.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `#GameOfThronesImage {
  height: 400px;
  background-image: url('${gameOfThroneImage}');
  background-repeat: no-repeat;
}`,
      },
      {
        language: 'HTML',
        code: `<div id="GameOfThronesImage"></div>`,
      },
    ]}
  >
    <div class="h-[400px] bg-[url('{gameOfThroneImage}')] bg-no-repeat"></div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Il est également possible de contrôler la position de l'image de fond avec la propriété
    <InlineCodeBlock>background-position</InlineCodeBlock> qui peut prendre une valeur textuelle, en
    pourcentage ou en pixel.
  </p>
  <p>On définit deux valeurs: la position horizontale et la position verticale.</p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `#GameOfThronesImage {
  height: 400px;
  background-image: url('${gameOfThroneImage}');
  background-repeat: no-repeat;
  background-position: right bottom;
}`,
      },
      {
        language: 'HTML',
        code: `<div id="GameOfThronesImage"></div>`,
      },
    ]}
  >
    <div class="h-[400px] bg-[url('{gameOfThroneImage}')] bg-right-bottom bg-no-repeat"></div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    On peut également contrôler le comportement lorsqu'on défile la page. Il est possible de définir
    que l'image de fond ne bouge pas lorsqu'on scroll.
  </p>
  <p>
    On utilise la propriété <InlineCodeBlock>background-attachment</InlineCodeBlock> qui peut prendre
    la valeur <Bold>scroll</Bold> (par défaut) ou <Bold>fixed</Bold> qui indique que l'image ne bouge
    pas même lorsqu'on utilise le défilement.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Il existe une façon raccourcie pour définir les propriétés en une ligne comme pour
    <Italic>padding</Italic>, <Italic>margin</Italic>, <Italic>border</Italic>, etc. On utilise
    directement la propriété <InlineCodeBlock>background</InlineCodeBlock> en spécifiant: l'URL de l'image,
    la couleur de fond, la répétition, l'attachement et sa position.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `#GameOfThronesImage {
  height: 400px;
  background: url('${gameOfThroneImage}') no-repeat right bottom;
}`,
      },
      {
        language: 'HTML',
        code: `<div id="GameOfThronesImage"></div>`,
      },
    ]}
  >
    <div class="h-[400px] bg-[url('{gameOfThroneImage}')] bg-right-bottom bg-no-repeat"></div>
  </MultiCodeBlock>
  <p>
    Il n'est évidemment pas nécessaire de définir toutes les valeurs pour utiliser la forme
    raccourcie.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Finalement, il existe la propriété CSS background-size qui définit la dimension de l'image sur
    le fond.
  </p>
  <p>
    Les valeurs possibles sont des dimensions absolues en pixels, des dimensions relatives en
    pourcentage, <Bold>auto</Bold> (par défaut, qui prend automatiquement la largeur et la hauteur de
    l'image), <Bold>cover</Bold> qui s'assure que l'élément est complètement couvert ou <Bold
      >contain</Bold
    > qui s'assure que la largeur et la hauteur peuvent être contenu dans l'élément.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `#GameOfThronesImage {
  height: 400px;
  background: url('${gameOfThroneImage}') no-repeat right bottom;
  background-size: cover;
}`,
      },
      {
        language: 'HTML',
        code: `<div id="GameOfThronesImage"></div>`,
      },
    ]}
  >
    <div
      class="h-[400px] bg-[url('{gameOfThroneImage}')] bg-cover bg-right-bottom bg-no-repeat"
    ></div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    L'exemple ci-dessous permet de former une image de profil dans un cercle. L'image de profil sera
    centrée dans le cercle et s'adaptera peut importe la dimension de l'élément.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `#GameOfThronesImage {
  background: url('${gameOfThroneImage}') #FFFFFF no-repeat center;
  background-size: cover;
  width: 200px;
  height: 200px;
  border-radius: 100%;
}`,
      },
      {
        language: 'HTML',
        code: `<div id="GameOfThronesImage"></div>`,
      },
    ]}
  >
    <div
      class="h-[200px] w-[200px] rounded-[100%] bg-[#FFFFFF] bg-[url('{gameOfThroneImage}')] bg-cover bg-center bg-no-repeat"
    ></div>
  </MultiCodeBlock>
</BasicSlide>
