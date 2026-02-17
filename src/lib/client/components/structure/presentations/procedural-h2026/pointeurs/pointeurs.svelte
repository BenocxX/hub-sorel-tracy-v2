<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    List,
    CodeBlock,
    InlineCodeBlock,
    Italic,
  } from '$lib/client/components/revealjs/custom';
  import * as Table from '$lib/client/components/ui/table/index.js';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

{#snippet addressTable(values: ({ value?: string; rawValue: string; address?: string } | null)[])}
  <Table.Root class="mx-auto w-2/3 text-center">
    <Table.Header>
      <Table.Row>
        <Table.Head class="w-1/2 text-center">Adresse</Table.Head>
        <Table.Head class="w-1/2 text-center">Valeur</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {#each values as value, index (index)}
        <Table.Row>
          <Table.Cell>
            <InlineCodeBlock>{value?.address ?? `0x0000000${index}`}</InlineCodeBlock>
          </Table.Cell>
          {#if value}
            <Table.Cell>
              {#if value.value}
                <InlineCodeBlock>{value.value}</InlineCodeBlock> ('{value.rawValue}')
              {:else}
                {value.rawValue}
              {/if}
            </Table.Cell>
          {/if}
        </Table.Row>
      {/each}
    </Table.Body>
  </Table.Root>
{/snippet}

<BasicSlide>
  <p>Qu'est-ce qu'un pointeur?</p>
  <p class="fragment">
    Un pointeur est une variable qui stocke l'adresse mémoire d'une autre variable. Plutôt que de
    contenir une valeur directement, un pointeur contient l'emplacement où cette valeur est stockée
    en mémoire.
  </p>
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="C"
    code={`int x = 42;
int *p = &x; // p est un pointeur qui contient l'adresse de x
int y = *p; // y obtient la valeur stockée à l'adresse pointée par p (c'est-à-dire la valeur de x)}`}
  />
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="C"
    code={`int x = 42;
int *p = &x; // p est un pointeur qui contient l'adresse de x
int y = *p; // y obtient la valeur stockée à l'adresse pointée par p (c'est-à-dire la valeur de x)`}
  />
  {@render addressTable([{ address: '0x00000000', value: 'x', rawValue: '42' }])}
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="C"
    code={`int x = 42;
int *p = &x; // p est un pointeur qui contient l'adresse de x
int y = *p; // y obtient la valeur stockée à l'adresse pointée par p (c'est-à-dire la valeur de x)`}
  />
  {@render addressTable([
    { address: '0x00000000', value: 'x', rawValue: '42' },
    { address: '0x00000004', value: 'p', rawValue: '0x00000000' },
  ])}
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="C"
    code={`int x = 42;
int *p = &x; // p est un pointeur qui contient l'adresse de x
int y = *p; // y obtient la valeur stockée à l'adresse pointée par p (c'est-à-dire la valeur de x)`}
  />
  {@render addressTable([
    { address: '0x00000000', value: 'x', rawValue: '42' },
    { address: '0x00000004', value: 'p', rawValue: '0x00000000' },
    { address: '0x0000000C', value: 'y', rawValue: '42' },
  ])}
</BasicSlide>
<BasicSlide>
  <p>
    La syntaxe des pointeurs en C peut être déroutante au début. Les symboles
    <InlineCodeBlock>*</InlineCodeBlock> et <InlineCodeBlock>&</InlineCodeBlock> rendent le code plus
    lourd et difficile à lire.
  </p>
  <p class="fragment">
    L'utilisation de <InlineCodeBlock>&</InlineCodeBlock> sur une variable est appelée un "accès par
    référence". Elle permet d'obtenir l'adresse mémoire d'une variable, plutôt que sa valeur.
  </p>
</BasicSlide>
<BasicSlide>
  <CodeBlock language="C" code="int *p = &x;" />
  <List fragment>
    {#snippet paragraph()}
      Pour bien comprendre cette ligne de code, il est important de la lire de gauche à droite :
    {/snippet}
    <li class="fragment">
      <InlineCodeBlock>int</InlineCodeBlock> -&gt; type de la valeur pointée dans la variable
    </li>
    <li class="fragment">
      <InlineCodeBlock>*</InlineCodeBlock> -&gt; indique que la variable va contenir une adresse mémoire
    </li>
    <li class="fragment">
      <InlineCodeBlock>p</InlineCodeBlock> -&gt; nom de la variable
    </li>
    <li class="fragment">
      <InlineCodeBlock>=</InlineCodeBlock> -&gt; opérateur permettant d'assigner une valeur à la variable
    </li>
    <li class="fragment">
      <InlineCodeBlock>&</InlineCodeBlock> -&gt; Permet d'obtenir l'adresse mémoire d'une variable au
      lieu de sa valeur
    </li>
    <li class="fragment">
      <InlineCodeBlock>x</InlineCodeBlock> -&gt; nom de la variable dont on veut obtenir l'adresse
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <CodeBlock language="C" code="int y = *p;" />
  <List fragment>
    {#snippet paragraph()}
      Ici, nous avons une syntaxe similaire, mais avec une signification différente. En lisant de
      gauche à droite :
    {/snippet}
    <li class="fragment">
      <InlineCodeBlock>int</InlineCodeBlock> -&gt; type de la valeur dans la variable
    </li>
    <li class="fragment">
      <InlineCodeBlock>y</InlineCodeBlock> -&gt; nom de la variable
    </li>
    <li class="fragment">
      <InlineCodeBlock>=</InlineCodeBlock> -&gt; opérateur permettant d'assigner une valeur à la variable
    </li>
    <li class="fragment">
      <InlineCodeBlock>*</InlineCodeBlock> -&gt; Permet d'obtenir la valeur stockée à l'adresse mémoire
      pointée par la variable
    </li>
    <li class="fragment">
      <InlineCodeBlock>x</InlineCodeBlock> -&gt; nom de la variable dont on veut obtenir la valeur à
      partir de son adresse
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    L'utilisation de <InlineCodeBlock>*</InlineCodeBlock> sur une variable est appelée un "accès par
    déréférencement". Elle permet d'obtenir la valeur stockée à l'adresse mémoire pointée par la variable.
  </p>
  <p class="fragment">
    En d'autres mots, c'est l'inverse de l'accès par référence. Plutôt que d'obtenir l'adresse d'une
    variable, on obtient la valeur à l'adresse pointée par la variable.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Parfois, nous allons vouloir réserver de la mémoire pour stocker des données dynamiques. Ces
    données seront stockées dans le <InlineCodeBlock>heap</InlineCodeBlock>, une zone de mémoire
    utilisée pour l'allocation dynamique.
  </p>
  <List fragment>
    {#snippet paragraph()}
      Il existe plusieurs fonctions en C pour allouer et libérer de la mémoire dans le heap :
    {/snippet}
    <li class="fragment">
      <InlineCodeBlock>malloc</InlineCodeBlock> -&gt; alloue une quantité de mémoire spécifiée et retourne
      un pointeur vers le début de cette zone mémoire
    </li>
    <li class="fragment">
      <InlineCodeBlock>free</InlineCodeBlock> -&gt; libère une zone de mémoire précédemment allouée avec
      <InlineCodeBlock>malloc</InlineCodeBlock>
    </li>
    <li class="fragment">
      <InlineCodeBlock>calloc</InlineCodeBlock> -&gt; alloue de la mémoire pour un nombre spécifié d'objets
      d'une taille donnée et initialise la mémoire à zéro (utile pour les tableaux)
    </li>
    <li class="fragment">
      <InlineCodeBlock>realloc</InlineCodeBlock> -&gt; redimensionne une zone de mémoire précédemment
      allouée avec <InlineCodeBlock>malloc</InlineCodeBlock> ou
      <InlineCodeBlock>calloc</InlineCodeBlock>
    </li>
  </List>
</BasicSlide>
