<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import { ArrowDownIcon, ArrowUpDownIcon, ArrowUpIcon } from 'lucide-svelte';

  let {
    variant = 'ghost',
    isSorted,
    text,
    ...restProps
  }: ComponentProps<typeof Button> & {
    isSorted: false | 'asc' | 'desc';
    text: string;
  } = $props();
</script>

<Button {variant} {...restProps}>
  {text}
  {#if !isSorted}
    <ArrowUpDownIcon class="ml-2" />
  {:else if isSorted === 'asc'}
    <ArrowUpIcon class="ml-2" />
  {:else}
    <ArrowDownIcon class="ml-2" />
  {/if}
</Button>
