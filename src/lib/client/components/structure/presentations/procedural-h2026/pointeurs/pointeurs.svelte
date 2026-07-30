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
      <InlineCodeBlock>p</InlineCodeBlock> -&gt; nom de la variable dont on veut obtenir la valeur à
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
<BasicSlide>
  <CodeBlock
    language="C"
    code={`#include <stdlib.h>
    
int main() {
    // variable locale stockée dans la pile (stack)
    int x = 10;

    // allocation dynamique dans le heap
    int *p = malloc(sizeof(int));

    // stocke la valeur 20 à l'adresse pointée par p
    *p = 20;

    // libère la mémoire allouée pour p
    free(p);
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="C"
    code={`#include <stdlib.h>

int main() {
    // alloue de la mémoire pour un tableau de 5 entiers
    int *numbers = malloc(5 * sizeof(int));

    // stocke les valeurs 1, 2, 3, 4, 5 dans le tableau
    for (int i = 0; i < 5; i++) {
        numbers[i] = i + 1;
    }

    // libère la mémoire allouée pour le tableau
    free(numbers);
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="C"
    code={`#include <stdlib.h>

int main() {
    // alloue de la mémoire pour un tableau de 5 entiers et initialise la mémoire à zéro
    int *numbers = calloc(5, sizeof(int));

    // syntaxe normale
    numbers[1] = 1;

    // syntaxe avec pointeurs (ne pas utiliser)
    *(numbers + 1) = 2; // équivalent à numbers[1]

    // libère la mémoire allouée pour le tableau
    free(numbers);
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="C"
    code={`#include <stdlib.h>

int main() {
    // alloue de la mémoire pour un tableau de 5 entiers et initialise la mémoire à zéro
    int *numbers = calloc(5, sizeof(int));

    // redimensionne le tableau pour qu'il puisse contenir 10 entiers
    numbers = realloc(numbers, 10 * sizeof(int));

    // libère la mémoire allouée pour le tableau
    free(numbers);
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Vous avez peut-être remarqué qu'il est impossible de retourner un tableau d'une fonction en C.
  </p>
  <p class="fragment">Pour y arriver, il faut retourner un pointeur vers le début du tableau.</p>
  <p class="fragment">
    Cependant, il est important de s'assurer que la mémoire allouée pour le tableau reste valide
    après la fin de la fonction. Cela signifie que le tableau doit être alloué dans le heap, et non
    dans la pile (stack), pour éviter que la mémoire soit libérée automatiquement à la fin de la
    fonction.
  </p>
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="C"
    code={`#include <stdlib.h>

int *createArray(int size) {
    // alloue de la mémoire pour un tableau de 'size' entiers et initialise la mémoire à zéro
    int *array = calloc(size, sizeof(int));

    // initialise le tableau avec des valeurs (par exemple, 0, 1, 2, ...)
    for (int i = 0; i < size; i++) {
        array[i] = i;
    }

    // retourne un pointeur vers le début du tableau
    return array;
}

int main() {
    int *myArray = createArray(5);

    // utilise myArray (par exemple, affiche les valeurs)
    printf("Array value index 1: %d\\n", myArray[1]); // affiche 1

    // libère la mémoire allouée pour myArray
    free(myArray);
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Cette stratégie de retourner un pointeur vers une zone de mémoire allouée dynamiquement est
    couramment utilisée en C pour gérer des données dont la taille n'est pas connue à l'avance ou
    qui doivent persister au-delà de la durée d'une fonction.
  </p>
  <p class="fragment">Notamment pour les tableaux, les strings et les structures.</p>
</BasicSlide>
<BasicSlide>
  <p>
    Notez qu'un pointeur peut également pointer vers un autre pointeur, créant ainsi une chaîne de
    pointeurs. Cela peut être utile pour gérer des structures de données plus complexes, comme les
    tableaux de tableaux (matrices) ou les listes chaînées.
  </p>
  <p>
    Vous ne devriez pas avoir à utiliser cette technique dans le cours, mais vous devez être capable
    de la comprendre si vous la voyez dans le code.
  </p>
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="C"
    code={`int main() {
    int a = 10;

    // p pointe vers l'adresse de a (ex: 0x00000000)
    int *p = &a;

    // pp pointe vers l'adresse de p (ex: 0x00000004) qui 
    // pointe vers l'adresse de a (ex: 0x00000000)
    int **pp = &p; 

    // pour accéder à la valeur de a à partir de pp, on doit déréférencer deux fois
    int addressOfA = *pp; // addressOfA obtient l'adresse de a
    int value = *addressOfA; // value obtient la valeur de a (10)

    // on peut aussi faire cela en une seule ligne
    int valueDirect = **pp; // valueDirect obtient directement la valeur de a (10)
    printf("Valeur de a: %d\\n", valueDirect);
    return 0;
}`}
  />
</BasicSlide>
