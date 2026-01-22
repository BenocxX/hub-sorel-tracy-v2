<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    List,
    Bold,
    InlineCodeBlock,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 0 });
</script>

<BasicSlide>
  <p>
    Un paradigme de programmation représente un modèle et une façon de penser qui influence la
    structure et l'organisation du code.
  </p>
  <p class="fragment">
    Personnellement, j'aime plus la définition suivante: Ça représente les différentes familles de
    langages de programmation. Un peu comme les langages parlés, on peut les classer en catégories
    selon leur approche et leur style.
  </p>
  <List class="fragment">
    <li>Français, espagnol, etc.</li>
    <li>Anglais, allemand, etc.</li>
    <li>Mandarin, japonais, etc.</li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    En programmation, les paradigmes les plus courants sont la programmation
    <Bold>procédurale</Bold>, la programmation <Bold>orientée objet</Bold> et la programmation
    <Bold>fonctionnelle</Bold>.
  </p>
  <p class="fragment">
    Chaque paradigme a ses propres concepts, principes et techniques qui influencent la façon dont
    les développeurs conçoivent et écrivent leur code.
  </p>
</BasicSlide>
<BasicSlide>
  <List
    paragraph="Voici quelques exemples de langages de programmation associés à chaque paradigme : "
  >
    <li>
      Paradigme procédural: <InlineCodeBlock>C</InlineCodeBlock>,
      <InlineCodeBlock>Go</InlineCodeBlock>, <InlineCodeBlock>Pascal</InlineCodeBlock>
    </li>
    <li>
      Paradigme orienté objet: <InlineCodeBlock>Java</InlineCodeBlock>,
      <InlineCodeBlock>C#</InlineCodeBlock>, <InlineCodeBlock>C++</InlineCodeBlock>
    </li>
    <li>
      Paradigme fonctionnel: <InlineCodeBlock>Haskell</InlineCodeBlock>,
      <InlineCodeBlock>Lisp</InlineCodeBlock>, <InlineCodeBlock>Elixir</InlineCodeBlock>
    </li>
  </List>
  <p class="fragment">
    À noter que certains langages, comme <InlineCodeBlock>Python</InlineCodeBlock> et
    <InlineCodeBlock>JavaScript</InlineCodeBlock>, supportent plusieurs paradigmes simultanément.
    Par exemple, <InlineCodeBlock>JavaScript</InlineCodeBlock> permet la programmation procédurale, orientée
    objet et fonctionnelle en même temps!
  </p>
</BasicSlide>
