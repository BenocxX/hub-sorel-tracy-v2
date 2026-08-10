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
  import { Button } from '$lib/client/components/ui/button';
  import { cn } from '$lib/client/utils';

  const { section }: SlideSectionProps = $props();

  let isUnder = $state(false);

  setSlideSection(section);
  registerInTOC({ page: 9 });
</script>

<BasicSlide>
  <p>
    Il existe une propriété <InlineCodeBlock>z-index</InlineCodeBlock> qui permet de déterminer l'ordre
    d'affichage de la pile des éléments qui composent le document.
  </p>
  <p>
    Il faut définir cette propriété lorsqu'on veut par exemple qu'un élément soit.
    <Bold>toujours</Bold> par dessus tous les autres. Comme un message informatif qui doit être au-dessus
    de tous les éléments pour s'afficher correctement.
  </p>
  <CodeBlock
    language="CSS"
    code={`.element {
    z-index: 10;
}`}
  >
    <Button class="w-max" onclick={() => (isUnder = !isUnder)}>
      {isUnder ? 'Mettre au dessus' : 'Mettre en dessous'}
    </Button>
    <div
      class={cn(
        'absolute left-[250px] top-0 h-[200px] w-[200px] bg-blue-400 dark:bg-primary dark:text-white',
        isUnder ? '-z-10' : 'z-10'
      )}
    >
      Élément avec z-index
    </div>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Plus le nombre est gros, plus l'élément sera en avant plan. Par défaut, le
    <InlineCodeBlock>z-index</InlineCodeBlock> d'un élément est le même que son parent.
  </p>
  <p>
    La propriété <InlineCodeBlock>z-index</InlineCodeBlock> peut s'utiliser uniquement avec les éléments
    ayant un positionnement non statique (relatif, absolue ou fixé).
  </p>
</BasicSlide>
