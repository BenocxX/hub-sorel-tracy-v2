<script lang="ts">
  import {
    BasicSlide,
    InlineCodeBlock,
    CodeBlock,
    MultiCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { Button } from '$lib/client/components/ui/button';
  import Separator from '$lib/client/components/ui/separator/separator.svelte';
  import Switch from '$lib/client/components/ui/switch/switch.svelte';
  import { cn } from '$lib/client/utils';

  const { section }: SlideSectionProps = $props();

  let overflowHiddenToggle = $state(false);
  let overflowScrollToggle = $state(false);
  let overflowAutoToggle = $state(false);

  setSlideSection(section);
  registerInTOC({ page: 11 });
</script>

<BasicSlide>
  <p>
    Il arrive parfois qu'il soit nécessaire de gérer comment les débordements se comportent dans un
    élément HTML.
  </p>
  <p>
    Par débordement, on parle d'un enfant qui dépasse les capacités dimensionnelles de son parent.
    Par exemple, un texte beaucoup trop long à l'intérieur d'une
    <InlineCodeBlock>div</InlineCodeBlock> de <InlineCodeBlock>80px</InlineCodeBlock> par
    <InlineCodeBlock>80px</InlineCodeBlock>.
  </p>
  <p>
    La propriété CSS <InlineCodeBlock>overflow</InlineCodeBlock> permet de gérer ce comportement. Par
    défaut la valeur est <InlineCodeBlock>overflow: visible</InlineCodeBlock> ce qui permet de déborder
    du parent pour afficher le texte.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Si on utilise <InlineCodeBlock>overflow: hidden</InlineCodeBlock>, ceci permet de cacher
    complètement le débordement. Ainsi, le texte qui déborde sera non visible hors des bornes du
    parent.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.element {
    width: 80px;
    height: 80px;
    overflow: hidden;
}`,
      },
      {
        language: 'HTML',
        code: `<div class="element">
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
</div>`,
      },
    ]}
  >
    <div class="mb-2 flex items-center gap-2">
      <label for="overflow-scroll-toggle">overflow: visible</label>
      <Switch bind:checked={overflowHiddenToggle} id="overflow-scroll-toggle" />
      <label for="overflow-scroll-toggle">overflow: hidden</label>
    </div>
    <Separator class="mb-4 mt-2" />
    <div class={cn('h-[100px] w-[100px]', overflowHiddenToggle && 'overflow-hidden')}>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Si on utilise <InlineCodeBlock>overflow: scroll</InlineCodeBlock>, ceci permet d'afficher une
    barre de défilement au parent. Ainsi, le contenu trop large n'est pas caché et on peut utiliser
    les barres de défilement pour l'atteindre.
  </p>
  <p>
    Il est a noter que même si le contenu ne déborde pas, mais que la valeur "scroll" est utilisée,
    les barres de défilement seront toujours présentes !
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.element {
    width: 80px;
    height: 80px;
    overflow: scroll;
}`,
      },
      {
        language: 'HTML',
        code: `<div class="element">
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
</div>`,
      },
    ]}
  >
    <div class="mb-2 flex items-center gap-2">
      <label for="overflow-hidden-toggle">overflow: visible</label>
      <Switch bind:checked={overflowScrollToggle} id="overflow-hidden-toggle" />
      <label for="overflow-hidden-toggle">overflow: scroll</label>
    </div>
    <Separator class="mb-4 mt-2" />
    <div class={cn('h-[100px] w-[100px]', overflowScrollToggle && 'overflow-scroll')}>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Si on utilise <InlineCodeBlock>overflow: auto</InlineCodeBlock>, ceci permet d'afficher une
    barre de défilement au besoin. Si le contenu est plus petit que les bornes, il n'y aura pas de
    barres de défilement. Dans le cas contraire, les barres vont apparaître.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.element {
    width: 80px;
    height: 80px;
    overflow: auto;
}`,
      },
      {
        language: 'HTML',
        code: `<div class="element">
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
    <p>Lorem</p>
</div>`,
      },
    ]}
  >
    <div class="mb-2 flex items-center gap-2">
      <label for="overflow-auto-toggle">overflow: visible</label>
      <Switch bind:checked={overflowAutoToggle} id="overflow-auto-toggle" />
      <label for="overflow-auto-toggle">overflow: auto</label>
    </div>
    <Separator class="mb-4 mt-2" />
    <div class={cn('h-[100px] w-[100px]', overflowAutoToggle && 'overflow-auto')}>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
      <p>Lorem</p>
    </div>
  </MultiCodeBlock>
</BasicSlide>
