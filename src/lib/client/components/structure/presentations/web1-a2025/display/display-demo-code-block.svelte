<script lang="ts">
  import { MultiCodeBlock } from '$lib/client/components/revealjs/custom';
  import type { MultiCodeBlockProps } from '$lib/client/components/revealjs/custom/multi-code-block.svelte';

  type Props = Omit<MultiCodeBlockProps, 'codes'> & {
    display: 'block' | 'inline' | 'inline-block' | 'flex' | 'grid' | 'none';
  };

  const { display, ...props }: Props = $props();
</script>

<MultiCodeBlock
  {...props}
  codes={[
    {
      language: 'HTML',
      code: `<div>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, temporibus?
  <div class="div-${display}">
    <span class="child">1</span>
    <span class="child">2</span>
    <span class="child">3</span>
  </div>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, rem?
</div>`,
    },
    {
      language: 'CSS',
      code: `.div-${display} {
  display: ${display};
  border: 2px solid green;
}`,
    },
  ]}
>
  <div>
    Lorem ipsum dolor sit amet consectetur
    <div class="border-2 border-[green]" style="display: {display}">
      <span class="rounded border border-primary bg-secondary px-2">1</span>
      <span class="rounded border border-primary bg-secondary px-2">2</span>
      <span class="rounded border border-primary bg-secondary px-2">3</span>
    </div>
    Lorem ipsum dolor sit amet, consectetur
  </div>
</MultiCodeBlock>
