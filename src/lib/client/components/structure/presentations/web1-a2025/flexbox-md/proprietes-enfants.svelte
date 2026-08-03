<script lang="ts">
  import {
    BasicSlide,
    MultiCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import FlexChild from './demo/flex-child.svelte';
  import FlexDemo from './demo/flex-demo.svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 37 });

  function HtmlTemplate() {
    return `<div class="parent">
  <div class="child first-child">1</div>
  <div class="child second-child">2</div>
  <div class="child third-child">3</div>
</div>`;
  }
</script>

<BasicSlide>
  <p>
    Dans cette section, nous allons voir les différentes propriétés CSS que nous pouvons appliquer
    sur les enfants d'un conteneur flex.
  </p>
  <p>
    Ces propriétés permettent de contrôler la manière dont les enfants vont se comporter
    relativement aux autres enfants.
  </p>
</BasicSlide>
<BasicSlide subTitle="order">
  <FlexDemo>
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child { }

.second-child { }

.third-child { }`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="order">
  <FlexDemo>
    <FlexChild>1</FlexChild>
    <FlexChild>2</FlexChild>
    <FlexChild class="order-[-1]">3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.third-child {
  order: -1;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-grow">
  <FlexDemo>
    <FlexChild>1</FlexChild>
    <FlexChild>2</FlexChild>
    <FlexChild>3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.second-child {
  flex-grow: 0; /* default value */
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-grow">
  <FlexDemo>
    <FlexChild>1</FlexChild>
    <FlexChild class="flex-grow">2</FlexChild>
    <FlexChild>3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.second-child {
  flex-grow: 1;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-grow">
  <FlexDemo>
    <FlexChild class="flex-grow">1</FlexChild>
    <FlexChild class="flex-grow">2</FlexChild>
    <FlexChild>3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child {
  flex-grow: 1;
}

.second-child {
  flex-grow: 1;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-grow">
  <FlexDemo>
    <FlexChild class="flex-grow">1</FlexChild>
    <FlexChild class="flex-grow">2</FlexChild>
    <FlexChild class="flex-grow">3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child {
  flex-grow: 1;
}

.second-child {
  flex-grow: 1;
}

.third-child {
  flex-grow: 1;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide
  subTitle="flex-grow"
  links={[
    {
      href: 'https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow#description',
      label: 'MDN - La formule du calcul de flex-grow',
      description:
        'Contient la formule détaillée qui explique pourquoi flex-grow: 4 est plus grand que flex-grow: 1',
    },
  ]}
>
  <FlexDemo>
    <FlexChild class="flex-grow">1</FlexChild>
    <FlexChild class="flex-grow-[4]">2</FlexChild>
    <FlexChild class="flex-grow">3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child {
  flex-grow: 1;
}

.second-child {
  flex-grow: 4;
}

.third-child {
  flex-grow: 1;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-basis">
  <FlexDemo>
    <FlexChild>1</FlexChild>
    <FlexChild>2</FlexChild>
    <FlexChild>3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child {
  flex-basis: auto; /* default value */
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-basis">
  <FlexDemo>
    <FlexChild class="basis-1/2">1</FlexChild>
    <FlexChild>2</FlexChild>
    <FlexChild>3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child {
  flex-basis: 50%;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-basis">
  <FlexDemo>
    <FlexChild class="basis-1/2">1</FlexChild>
    <FlexChild class="basis-1/2">2</FlexChild>
    <FlexChild>3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child {
  flex-basis: 50%;
}

.second-child {
  flex-basis: 50%;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-basis">
  <FlexDemo>
    <FlexChild class="basis-1/2">1</FlexChild>
    <FlexChild class="basis-1/2">2</FlexChild>
    <FlexChild class="basis-1/2">3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child {
  flex-basis: 50%;
}

.second-child {
  flex-basis: 50%;
}

.third-child {
  flex-basis: 50%;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-shrink">
  <FlexDemo>
    <FlexChild class="basis-1/2">1</FlexChild>
    <FlexChild class="shrink basis-1/2">2</FlexChild>
    <FlexChild class="basis-1/2">3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child {
  flex-basis: 50%;
}

.second-child {
  flex-basis: 50%;
  flex-shrink: 1; /* default value */
}

.third-child {
  flex-basis: 50%;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-shrink">
  <FlexDemo>
    <FlexChild class="basis-1/2">1</FlexChild>
    <FlexChild class="shrink-0 basis-1/2">2</FlexChild>
    <FlexChild class="basis-1/2">3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child {
  flex-basis: 50%;
}

.second-child {
  flex-basis: 50%;
  flex-shrink: 0;
}

.third-child {
  flex-basis: 50%;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-shrink">
  <FlexDemo>
    <FlexChild class="basis-1/2">1</FlexChild>
    <FlexChild class="shrink-[2] basis-1/2">2</FlexChild>
    <FlexChild class="basis-1/2">3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child {
  flex-basis: 50%;
}

.second-child {
  flex-basis: 50%;
  flex-shrink: 2;
}

.third-child {
  flex-basis: 50%;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-shrink">
  <FlexDemo>
    <FlexChild class="basis-1/2">1</FlexChild>
    <FlexChild class="shrink-[4] basis-1/2">2</FlexChild>
    <FlexChild class="basis-1/2">3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child {
  flex-basis: 50%;
}

.second-child {
  flex-basis: 50%;
  flex-shrink: 4;
}

.third-child {
  flex-basis: 50%;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-shrink">
  <FlexDemo>
    <FlexChild class="basis-1/2">1</FlexChild>
    <FlexChild class="shrink-[4] basis-1/2">2</FlexChild>
    <FlexChild>3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child {
  flex-basis: 50%;
}

.second-child {
  flex-basis: 50%;
  flex-shrink: 4;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex">
  <FlexDemo>
    <FlexChild class="flex-[0_1_auto]">1</FlexChild>
    <FlexChild>2</FlexChild>
    <FlexChild>3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child {
  flex: 0 1 auto; /* default value */
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex">
  <FlexDemo>
    <FlexChild class="flex-[1_1_auto]">1</FlexChild>
    <FlexChild>2</FlexChild>
    <FlexChild>3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.first-child {
  flex: 1 1 auto;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="align-self">
  <FlexDemo class="h-[150px] items-center">
    <FlexChild>1</FlexChild>
    <FlexChild>2</FlexChild>
    <FlexChild>3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  height: 150px;
  display: flex;
  align-items: center;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="align-self">
  <FlexDemo class="h-[150px] items-center">
    <FlexChild>1</FlexChild>
    <FlexChild>2</FlexChild>
    <FlexChild>3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.second-child {
  align-self: auto; /* default value */
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="align-self">
  <FlexDemo class="h-[150px] items-center">
    <FlexChild>1</FlexChild>
    <FlexChild class="self-start">2</FlexChild>
    <FlexChild>3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.second-child {
  align-self: start;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="align-self">
  <FlexDemo class="h-[150px] items-center">
    <FlexChild>1</FlexChild>
    <FlexChild class="self-end">2</FlexChild>
    <FlexChild>3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.second-child {
  align-self: end;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="align-self">
  <FlexDemo class="h-[150px] items-center">
    <FlexChild>1</FlexChild>
    <FlexChild class="self-stretch">2</FlexChild>
    <FlexChild>3</FlexChild>
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.second-child {
  align-self: stretch;
}`,
      },
      {
        language: 'HTML',
        code: HtmlTemplate(),
      },
    ]}
  />
</BasicSlide>
