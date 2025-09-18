<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    MultiCodeBlock,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { Button } from '$lib/client/components/ui/button';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 3 });
</script>

<BasicSlide>
  <p>
    Lorsqu'un événement se produit, le navigateur crée un objet d'événement qui contient des
    informations sur l'événement, y compris la cible de l'événement (l'élément sur lequel
    l'événement a été déclenché) et d'autres détails pertinents.
  </p>
  <p class="fragment">
    Ensuite, le navigateur suit un processus appelé "<Bold>bubbling</Bold>" (<Italic
      >remontée</Italic
    >) pour propager l'événement à travers la hiérarchie des éléments DOM. L'événement commence par
    la cible et remonte vers les éléments parents jusqu'à ce qu'il atteigne le document racine.
  </p>
</BasicSlide>
<BasicSlide>
  <MultiCodeBlock
    codes={[
      {
        language: 'HTML',
        code: `<div id="parent">
  <button id="child">Click me</button>
</div>`,
      },
      {
        language: 'JS',
        code: `const parent = document.querySelector('#parent');
parent.addEventListener('click', () => console.log('Div clicked'));

const child = document.querySelector('#child');
child.addEventListener('click', () => console.log('Button clicked'));`,
      },
    ]}
  >
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="rounded bg-secondary" onclick={() => console.log('Div clicked')} id="parent">
      <Button onclick={() => console.log('Button clicked')} id="child">Click me</Button>
    </div>
  </MultiCodeBlock>
  <p class="fragment">
    En d'autres mots, lorsque vous cliquez sur un élément, l'événement de clic est d'abord déclenché
    sur cet élément, puis il "remonte" à travers ses éléments parents jusqu'à la racine du document.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Cela signifie que si vous avez des écouteurs d'événements attachés à des éléments parents, ils
    peuvent également réagir à l'événement déclenché sur un élément enfant.
  </p>
  <p>
    Toutefois, il est possible d'arrêter la propagation de l'événement en utilisant la méthode
    <InlineCodeBlock>event.stopPropagation()</InlineCodeBlock> dans le gestionnaire d'événements.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'JS',
        code: `const parent = document.querySelector('#parent');
parent.addEventListener('click', () => console.log('Div clicked'));

const child = document.querySelector('#child');
child.addEventListener('click', (event) => {
  event.stopPropagation();

  console.log('Button clicked');
});`,
      },
      {
        language: 'HTML',
        code: `<div id="parent">
  <button id="child">I wont propagate the event</button>
</div>`,
      },
    ]}
  >
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="rounded bg-secondary" onclick={() => console.log('Div clicked')} id="parent">
      <Button
        onclick={(event) => {
          event.stopPropagation();
          console.log('Button clicked');
        }}
        id="child">I wont propagate the event</Button
      >
    </div>
  </MultiCodeBlock>
</BasicSlide>
