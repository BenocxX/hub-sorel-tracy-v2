<script lang="ts">
  import {
    BasicSlide,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { cn } from '$lib/client/utils';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 9 });
</script>

<BasicSlide>
  <p>
    L'une des utilités d'un lien est de définir un ancrage dans la page en cours. L'idée sera,
    depuis un autre lien quelque part dans la page, d'aller se positionner directement sur un
    ancrage.
  </p>
  <p>
    Par exemple, remonter en haut d'un site depuis le pied de page en un seul clique sans défilement
    de souris.
  </p>
  <p>Ceci contribue à augmenter la convivialité et l'accessibilité d'un site Web.</p>
</BasicSlide>
<BasicSlide>
  <p>
    Tout d'abord, on définit l'ancrage dans la page. C'est-à-dire l'endroit où on voudrait se rendre
    directement à partir d'une lien. Par exemple, le haut de la page. Nous définissons un élément
    (une balise) avec la propriété id pour identifier l'ancrage qui pourra être utiliser par un lien
    par la suite.
  </p>
  <p>
    Par exemple, nous pouvons utiliser une division (qui sera invisible) au début de la page pour
    nous permettre d'y revenir à l'aide d'un ancrage.
  </p>
  <CodeBlock
    language="HTML"
    lines="3,5"
    code={`...
<body>
    <div id="top">Top</div>
    ...
    <a href="#top">Atteindre le haut de la page</a>
</body>
...`}
  >
    <div class="max-h-[400px]">
      <div id="top">Top</div>
      {#each Array.from({ length: 50 }) as _, i (i)}
        <div class={cn('px-2 py-1 text-white', i % 2 === 0 ? 'bg-slate-500' : 'bg-slate-600')}>
          {i}
        </div>
      {/each}
      <a href="#top" class="text-primary underline"> Atteindre le haut de la page </a>
    </div>
  </CodeBlock>
</BasicSlide>
