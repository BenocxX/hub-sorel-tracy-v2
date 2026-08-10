<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    List,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import DisplayDemoCodeBlock from './display-demo-code-block.svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 7 });
</script>

<BasicSlide>
  <p>
    <Bold>block</Bold> est probablement la valeur la plus utilisée. Cette valeur permet de définir un
    élément comme étant un <Italic>bloc</Italic>. C'est-à-dire que l'élément aura <Bold
      >un retour de ligne automatique</Bold
    > et aura
    <Bold>une largeur par défaut de 100%</Bold>.
  </p>
  <p>
    On retrouve <InlineCodeBlock>display: block</InlineCodeBlock> sur les balises
    <InlineCodeBlock>div</InlineCodeBlock>, <InlineCodeBlock>p</InlineCodeBlock> et les
    <InlineCodeBlock>h1</InlineCodeBlock> par exemple. Ainsi, nous pourrions prendre un lien (
    <InlineCodeBlock>a</InlineCodeBlock>) qui est par défaut <Bold>inline</Bold> et le transformer en
    <Bold>bloc</Bold>.
  </p>
</BasicSlide>
<BasicSlide>
  <List>
    {#snippet paragraph()}
      L'utilisation d'un <InlineCodeBlock>display: block</InlineCodeBlock> comprend certaines restrictions,
      mais a un avantage très important.
    {/snippet}
    <li>
      Un élément <Bold>block pourra avoir une dimension définie</Bold>! Contrairement aux éléments <Bold
        >inline</Bold
      >, les éléments <Bold>block</Bold> peuvent avoir une largeur et une hauteur tout comme la balise
      <InlineCodeBlock>div</InlineCodeBlock>.
    </li>
    <li>
      Par contre, si on veut avoir deux éléments <Bold>block</Bold> les uns à côtés des autres, il faut
      utiliser des techniques de mise en page CSS pour les aligner. (flexbox, position, etc.)
    </li>
    <li>
      Un élément <Bold>block</Bold> effectue un retour de ligne après l'élément.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <DisplayDemoCodeBlock display="block" />
</BasicSlide>
