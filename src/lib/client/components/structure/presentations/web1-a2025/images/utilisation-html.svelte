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
  registerInTOC({ page: 7 });

  const gameOfThroneImage =
    'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg';
</script>

<BasicSlide>
  <p>
    On utilise simplement la balise <InlineCodeBlock>img</InlineCodeBlock> dans la structure HTML pour
    afficher une image. Cette balise n'a pas de contenu, donc s'utilise comme la balise
    <InlineCodeBlock>br</InlineCodeBlock>, <InlineCodeBlock>hr</InlineCodeBlock>, etc.
  </p>
  <p>
    Il faut absolument inclure 2 attributs. Soit <InlineCodeBlock>src</InlineCodeBlock> qui indique où
    se trouve l'image et <InlineCodeBlock>alt</InlineCodeBlock> qui propose un texte alternatif si l'image
    n'existe pas.
  </p>
  <CodeBlock
    language="HTML"
    code={`<img 
  src="${gameOfThroneImage}"
  alt="L'affiche de Game of Thrones saison 1"
/>`}
  >
    <img src={gameOfThroneImage} alt="L'affiche de Game of Thrones saison 1" />
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    On peut modifier les dimensions d'une image depuis le CSS sans problème. Pour garder le ratio
    d'une image, on peut définir uniquement la dimension de la hauteur ou de la largeur et définir
    l'autre valeur comme <Bold>auto</Bold> (ce qui est le fonctionnement par défaut).
  </p>
  <CodeBlock
    language="HTML"
    code={`<img 
  src="${gameOfThroneImage}"
  alt="L'affiche de Game of Thrones saison 1"
  width="200px"
/>`}
  >
    <img src={gameOfThroneImage} alt="L'affiche de Game of Thrones saison 1" width={200} />
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Pour définir une image cliquable, il suffit d'écrire un lien normal (la balise
    <InlineCodeBlock>a</InlineCodeBlock>) et d'inclure une image à l'intérieur. Certains navigateurs
    vont afficher une bordure bleue autour de l'image... On utilise la propriété CSS
    <InlineCodeBlock>border: 0</InlineCodeBlock> pour éliminer ce problème.
  </p>
  <CodeBlock
    language="HTML"
    code={`<a href="https://www.justwatch.com/ca/tv-show/game-of-thrones" target="_blank">
  <img 
    src="${gameOfThroneImage}"
    alt="L'affiche de Game of Thrones saison 1"
  />
</a>`}
  >
    <a href="https://www.justwatch.com/ca/tv-show/game-of-thrones" target="_blank">
      <img src={gameOfThroneImage} alt="L'affiche de Game of Thrones saison 1" />
    </a>
  </CodeBlock>
</BasicSlide>
