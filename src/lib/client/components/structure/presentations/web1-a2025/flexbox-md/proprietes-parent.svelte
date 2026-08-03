<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
    MultiCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { FlexChildHTML } from './demo/flex-child-html';
  import FlexChild from './demo/flex-child.svelte';
  import FlexDemo from './demo/flex-demo.svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 5 });
</script>

<BasicSlide>
  <p>
    Dans cette section, nous allons voir les différentes propriétés CSS que nous pouvons appliquer
    sur le parent suivant le modèle <Bold>Flexbox</Bold>. Ces propriétés permettent de contrôler le
    comportement des éléments enfants.
  </p>
  <p>
    Avant toute chose, il faut appliquer la propriété
    <InlineCodeBlock>display: flex;</InlineCodeBlock> sur le parent pour activer le modèle Flexbox. Sans
    cela, les propriétés Flexbox n'auront aucun effet.
  </p>
</BasicSlide>
<BasicSlide subTitle="display">
  <FlexDemo>Contenu</FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'HTML',
        code: `<div class="parent">
  Contenu
</div>`,
      },
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  /* autres propriétés utilisées pour la démo */
  /* ... */
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="display">
  <FlexDemo>
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
}

.child {
  /* autres propriétés utilisées pour la démo */
  /* ... */
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="display">
  <FlexDemo>
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-direction">
  <FlexDemo class="flex-row">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-direction: row; /* default */
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-direction">
  <FlexDemo class="flex-row-reverse">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-direction: row-reverse; 
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-direction">
  <FlexDemo class="flex-row">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-direction: row; 
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-direction">
  <FlexDemo class="flex-col">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-direction: column;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-direction">
  <FlexDemo class="flex-col-reverse">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-direction: column-reverse;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(10),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-wrap">
  <FlexDemo>
    {#each Array.from({ length: 10 }) as _, i (i)}
      <FlexChild class={i > 2 ? 'fragment' : ''}>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-wrap: nowrap; /* default */
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(10),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-wrap">
  <FlexDemo class="[&>*:nth-child(odd)]:min-w-52">
    {#each Array.from({ length: 10 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-wrap: nowrap; /* default */
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(10),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-wrap">
  <FlexDemo class="flex-wrap [&>*:nth-child(odd)]:min-w-52">
    {#each Array.from({ length: 10 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-wrap: wrap;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(10),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="flex-wrap">
  <FlexDemo class="flex-wrap-reverse [&>*:nth-child(odd)]:min-w-52">
    {#each Array.from({ length: 10 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-wrap: wrap-reverse;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(10),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="justify-content">
  <FlexDemo>
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  justify-content: flex-start; /* default */
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="justify-content">
  <FlexDemo class="justify-end">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  justify-content: flex-end;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="justify-content">
  <FlexDemo class="justify-center">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  justify-content: center;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="justify-content">
  <FlexDemo class="justify-between">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  justify-content: space-between;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="justify-content">
  <FlexDemo class="justify-around">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  justify-content: space-around;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="justify-content">
  <FlexDemo class="justify-evenly">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  justify-content: space-evenly;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="align-items">
  <FlexDemo>
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="align-items">
  <FlexDemo class="h-[150px]">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  height: 150px;
  align-items: stretch; /* default */
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="align-items">
  <FlexDemo class="h-[150px] items-start">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  height: 150px;
  align-items: flex-start;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="align-items">
  <FlexDemo class="h-[150px] items-center">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  height: 150px;
  align-items: center;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="align-items">
  <FlexDemo class="h-[150px] items-end">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  height: 150px;
  align-items: flex-end;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="gap">
  <FlexDemo>
    {#each Array.from({ length: 10 }) as _, i (i)}
      <FlexChild class={i > 2 ? 'fragment' : ''}>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(10),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="gap">
  <FlexDemo class="[&>*:nth-child(odd)]:min-w-52">
    {#each Array.from({ length: 10 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(10),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="gap">
  <FlexDemo class="flex-wrap [&>*:nth-child(odd)]:min-w-52">
    {#each Array.from({ length: 10 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-wrap: wrap;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(10),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="gap">
  <FlexDemo class="flex-wrap gap-4 [&>*:nth-child(odd)]:min-w-52">
    {#each Array.from({ length: 10 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(10),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="gap">
  <FlexDemo class="flex-wrap gap-x-4 [&>*:nth-child(odd)]:min-w-52">
    {#each Array.from({ length: 10 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(10),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="gap">
  <FlexDemo class="flex-wrap gap-y-4 [&>*:nth-child(odd)]:min-w-52">
    {#each Array.from({ length: 10 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-wrap: wrap;
  row-gap: 16px;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(10),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="gap">
  <FlexDemo class="flex-wrap gap-x-8 gap-y-4 [&>*:nth-child(odd)]:min-w-52">
    {#each Array.from({ length: 10 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-wrap: wrap;
  column-gap: 32px;
  row-gap: 16px;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(10),
      },
    ]}
  />
</BasicSlide>
<BasicSlide subTitle="gap">
  <FlexDemo class="flex-wrap gap-[16px_32px] [&>*:nth-child(odd)]:min-w-52">
    {#each Array.from({ length: 10 }) as _, i (i)}
      <FlexChild>{i + 1}</FlexChild>
    {/each}
  </FlexDemo>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.parent {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 32px;
}`,
      },
      {
        language: 'HTML',
        code: FlexChildHTML(10),
      },
    ]}
  />
</BasicSlide>
