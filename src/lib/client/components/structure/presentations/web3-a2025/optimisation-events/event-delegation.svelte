<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    InlineCodeBlock,
    MultiCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 6 });
</script>

<BasicSlide>
  <p>
    L'<Bold>event delegation</Bold> (<Italic>délégation d'événements</Italic>) est une technique qui
    consiste à attacher un seul écouteur d'événements à un élément parent au lieu d'attacher des
    écouteurs d'événements individuels à chaque élément enfant.
  </p>
  <p class="fragment">
    Lorsque l'événement se produit sur un élément enfant, il remonte à l'élément parent grâce au
    mécanisme de bubbling, où l'écouteur d'événements attaché à l'élément parent peut intercepter
    l'événement et gérer la logique appropriée.
  </p>
  <p class="fragment">
    Cela permet de réduire le nombre d'écouteurs d'événements dans le DOM, ce qui peut améliorer les
    performances, surtout lorsque vous avez un grand nombre d'éléments enfants et facilite l'ajout
    ou la suppression dynamique d'éléments enfants sans avoir à gérer individuellement les écouteurs
    d'événements.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Dans cet exemple, nous avons un élément <InlineCodeBlock>ul</InlineCodeBlock> avec plusieurs éléments
    <InlineCodeBlock>li</InlineCodeBlock> enfants. Au lieu d'attacher un écouteur d'événements de clic
    à chaque élément <InlineCodeBlock>li</InlineCodeBlock>, nous attachons un seul écouteur
    d'événements de clic à l'élément parent <InlineCodeBlock>ul</InlineCodeBlock>.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'HTML',
        code: `<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>`,
      },
      {
        language: 'JS',
        code: `const ul = document.querySelector('ul')
ul.addEventListener('click', (event) => { 
  console.log("Current target: ", event.currentTarget);
  console.log("Click target: ", event.target));
}`,
      },
    ]}
  >
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <ul
      class="space-y-2 rounded p-4"
      onclick={(event) => {
        console.log('Current target: ', event.currentTarget);
        console.log('Click target: ', event.target);
      }}
    >
      <li class="rounded p-2 hover:cursor-pointer hover:bg-secondary">Item 1</li>
      <li class="rounded- p-2 hover:cursor-pointer hover:bg-secondary">Item 2</li>
      <li class="rounded p-2 hover:cursor-pointer hover:bg-secondary">Item 3</li>
      <li class="rounded p-2 hover:cursor-pointer hover:bg-secondary">Item 4</li>
      <li class="rounded p-2 hover:cursor-pointer hover:bg-secondary">Item 5</li>
    </ul>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    En ajoutant des attributs de données personnalisés aux éléments enfants, on peut facilement
    identifier quel élément a déclenché l'événement dans l'écouteur d'événements de l'élément
    parent.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'HTML',
        code: `<ul>
  <li data-id="1">Item 1</li>
  <li data-id="2">Item 2</li>
  <li data-id="3">Item 3</li>
  <li data-id="4">Item 4</li>
  <li data-id="5">Item 5</li>
</ul>`,
      },
      {
        language: 'JS',
        code: `const ul = document.querySelector('ul')
ul.addEventListener('click', (event) => { 
  console.log(event.target.dataset.id));
}`,
      },
    ]}
  >
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
    <ul
      class="space-y-2 rounded p-4"
      onclick={(event) => {
        const target = event.target as HTMLElement;
        console.log(target.dataset.id);
      }}
    >
      <li data-id="1" class="rounded p-2 hover:cursor-pointer hover:bg-secondary">Item 1</li>
      <li data-id="2" class="rounded p-2 hover:cursor-pointer hover:bg-secondary">Item 2</li>
      <li data-id="3" class="rounded p-2 hover:cursor-pointer hover:bg-secondary">Item 3</li>
      <li data-id="4" class="rounded p-2 hover:cursor-pointer hover:bg-secondary">Item 4</li>
      <li data-id="5" class="rounded p-2 hover:cursor-pointer hover:bg-secondary">Item 5</li>
    </ul>
  </MultiCodeBlock>
</BasicSlide>
