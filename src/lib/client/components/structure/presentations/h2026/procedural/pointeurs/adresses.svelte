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
  <p>
    La mémoire d'un ordinateur est composée d'une série de "cellules" qui peuvent stocker des
    données. Chaque "cellule" a une adresse unique, ce qui nous permet d'accéder à ces données de
    manière efficace.
  </p>
  <List fragment>
    {#snippet paragraph()}
      Les adresses mémoire sont représentées en hexadécimal, par exemple :
    {/snippet}
    <li class="fragment"><InlineCodeBlock>0x00000001</InlineCodeBlock></li>
    <li class="fragment"><InlineCodeBlock>0x7FFFFFFF</InlineCodeBlock></li>
    <li class="fragment"><InlineCodeBlock>0xFFFFFFFF</InlineCodeBlock></li>
    <li class="fragment"><InlineCodeBlock>0x2230AC32</InlineCodeBlock></li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    Chaque adresse mémoire peut stocker une valeur de la taille fixe d'un octet (8 bits). Par
    exemple, le caractère <InlineCodeBlock>'a'</InlineCodeBlock> en décimal est la valeur
    <InlineCodeBlock>97</InlineCodeBlock>, qui peut être convertie en la valeur binaire
    <InlineCodeBlock>01100001</InlineCodeBlock>.
  </p>
  <p>
    Puisqu'une adresse mémoire peut stocker une valeur de 8 bits, cela signifie que nous pouvons
    stocker notre caractère <InlineCodeBlock>'a'</InlineCodeBlock> dans une seule adresse mémoire.
  </p>
</BasicSlide>
<BasicSlide>
  {@render addressTable([null, null, null, null, null, null, null])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([{ value: '01100001', rawValue: 'a' }, null, null, null, null, null, null])}
</BasicSlide>
<BasicSlide>
  <p>
    En utilisant le même principe, j'aimerais ajouter la valeur
    <InlineCodeBlock>(int) 42</InlineCodeBlock> dans la mémoire. Par où commencer?
  </p>
  <p class="fragment">
    Premièrement, il faut convertir la valeur <InlineCodeBlock>42</InlineCodeBlock> en binaire. Indice:
    Un nombre entier est représenté en utilisant 4 octets (32 bits).
  </p>
  <p class="fragment">
    La valeur <InlineCodeBlock>42</InlineCodeBlock> sera représenté dans la mémoire comme cela :
    <br />
    <InlineCodeBlock class="fragment">
      <span class="fragment !text-lg sm:!text-2xl">00000000</span>
      <span class="fragment !text-lg sm:!text-2xl">00000000</span>
      <span class="fragment !text-lg sm:!text-2xl">00000000</span>
      <span class="fragment !text-lg sm:!text-2xl">00101010</span>
    </InlineCodeBlock>
  </p>
</BasicSlide>
<BasicSlide>
  {@render addressTable([{ value: '01100001', rawValue: 'a' }, null, null, null, null, null, null])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { value: '01100001', rawValue: 'a' },
    { value: '00000000', rawValue: '42' },
    null,
    null,
    null,
    null,
    null,
  ])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { value: '01100001', rawValue: 'a' },
    { value: '00000000', rawValue: '42' },
    { value: '00000000', rawValue: '42' },
    null,
    null,
    null,
    null,
  ])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { value: '01100001', rawValue: 'a' },
    { value: '00000000', rawValue: '42' },
    { value: '00000000', rawValue: '42' },
    { value: '00000000', rawValue: '42' },
    null,
    null,
    null,
  ])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { value: '01100001', rawValue: 'a' },
    { value: '00000000', rawValue: '42' },
    { value: '00000000', rawValue: '42' },
    { value: '00000000', rawValue: '42' },
    { value: '00101010', rawValue: '42' },
    null,
    null,
  ])}
</BasicSlide>
<BasicSlide>
  <p>
    Pour être plus performant, les ordinateurs regroupent les adresses mémoire en blocs de 4 octets
    (32 bits) ou de 8 octets (64 bits). Cela permet de stocker des données plus grandes et d'accéder
    à ces données plus rapidement.
  </p>
  <p>Voici la mémoire réorganisée en blocs de 4 octets (32 bits) :</p>
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { value: '00000000', rawValue: '42' },
    { value: '00000000', rawValue: '42' },
    { value: '00000000', rawValue: '42' },
    { value: '00101010', rawValue: '42' },
    { value: '01100001', rawValue: 'a' },
    null,
    null,
  ])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { address: '0x00000000', rawValue: '42' },
    { address: '0x00000004', rawValue: 'a' },
    { address: '0x00000005', rawValue: ' ' },
    { address: '0x00000006', rawValue: ' ' },
    { address: '0x00000007', rawValue: ' ' },
    { address: '0x00000008', rawValue: ' ' },
    { address: '0x00000009', rawValue: ' ' },
  ])}
</BasicSlide>
<BasicSlide>
  <p>Comment est-ce que le code suivant sera représenté dans la mémoire?</p>
  <CodeBlock
    language="C"
    code={`int main() {
    int x = 42;
    char y = 'a';
    int z = x + 10;
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  {@render addressTable([{ address: '0x00000000', value: 'x', rawValue: '42' }])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { address: '0x00000000', value: 'x', rawValue: '42' },
    { address: '0x00000001', value: 'x', rawValue: '42' },
  ])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { address: '0x00000000', value: 'x', rawValue: '42' },
    { address: '0x00000001', value: 'x', rawValue: '42' },
    { address: '0x00000002', value: 'x', rawValue: '42' },
  ])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { address: '0x00000000', value: 'x', rawValue: '42' },
    { address: '0x00000001', value: 'x', rawValue: '42' },
    { address: '0x00000002', value: 'x', rawValue: '42' },
    { address: '0x00000003', value: 'x', rawValue: '42' },
  ])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { address: '0x00000000', value: 'x', rawValue: '42' },
    { address: '0x00000001', value: 'x', rawValue: '42' },
    { address: '0x00000002', value: 'x', rawValue: '42' },
  ])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { address: '0x00000000', value: 'x', rawValue: '42' },
    { address: '0x00000001', value: 'x', rawValue: '42' },
  ])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([{ address: '0x00000000', value: 'x', rawValue: '42' }])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { address: '0x00000000', value: 'x', rawValue: '42' },
    { address: '0x00000004', value: 'y', rawValue: 'a' },
  ])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { address: '0x00000000', value: 'x', rawValue: '42' },
    { address: '0x00000004', value: 'y', rawValue: 'a' },
    { address: '0x00000005', value: 'z?', rawValue: '52' },
  ])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { address: '0x00000000', value: 'x', rawValue: '42' },
    { address: '0x00000004', value: 'y', rawValue: 'a' },
    { address: '0x00000005', rawValue: '' },
    { address: '0x00000006', value: 'z?', rawValue: '52' },
  ])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { address: '0x00000000', value: 'x', rawValue: '42' },
    { address: '0x00000004', value: 'y', rawValue: 'a' },
    { address: '0x00000005', rawValue: '' },
    { address: '0x00000006', rawValue: '' },
    { address: '0x00000007', value: 'z?', rawValue: '52' },
  ])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { address: '0x00000000', value: 'x', rawValue: '42' },
    { address: '0x00000004', value: 'y', rawValue: 'a' },
    { address: '0x00000005', rawValue: '' },
    { address: '0x00000006', rawValue: '' },
    { address: '0x00000007', rawValue: '' },
    { address: '0x00000008', value: 'z', rawValue: '52' },
  ])}
</BasicSlide>
<BasicSlide>
  {@render addressTable([
    { address: '0x00000000', value: 'x', rawValue: '42' },
    { address: '0x00000004', value: 'y', rawValue: 'a' },
    { address: '0x00000005', rawValue: '' },
    { address: '0x00000006', rawValue: '' },
    { address: '0x00000007', rawValue: '' },
    { address: '0x00000008', value: 'z', rawValue: '52' },
    { address: '0x0000000C', rawValue: '' },
  ])}
</BasicSlide>
<BasicSlide>
  <p>
    Notez que nous allons jamais choisir les adresses mémoire pour nos variables. C'est le système
    d'exploitation qui s'occupe de ça, et il choisit les adresses de manière à optimiser les
    performances de notre programme.
  </p>
  <p class="fragment">
    Les variables qui se retrouvent dans le <InlineCodeBlock>stack</InlineCodeBlock> sont stockées à
    des adresses mémoire proches les unes des autres, tandis que les variables qui se retrouvent dans
    le <InlineCodeBlock>heap</InlineCodeBlock> sont stockées à des adresses mémoire plus éloignées les
    unes des autres.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Advenant le cas où nous voudrions stocker une grande quantité de données, il serait plus
    efficace de les stocker dans le <InlineCodeBlock>heap</InlineCodeBlock> plutôt que dans le
    <InlineCodeBlock>stack</InlineCodeBlock>, car le <InlineCodeBlock>heap</InlineCodeBlock> est conçu
    pour gérer de grandes quantités de données.
  </p>
  <p class="fragment">
    S'il faut agrandir une variable dans le <InlineCodeBlock>stack</InlineCodeBlock>, le système
    d'exploitation doit trouver un nouvel emplacement pour cette variable, ce qui peut être coûteux
    en termes de performances. Dans le <InlineCodeBlock>heap</InlineCodeBlock>, l'ordinateur va
    simplement allouer un nouvel espace mémoire assez grand pour cette variable, ce qui est beaucoup
    plus rapide.
  </p>
</BasicSlide>
