<script lang="ts">
  import * as Button from '$lib/client/components/ui/button/index.js';
  import { LoaderCircle } from 'lucide-svelte';
  import type { Readable } from 'svelte/store';

  let {
    ref = $bindable(null),
    children,
    delayed,
    ...restProps
  }: Button.Props & {
    delayed?: Readable<boolean>;
  } = $props();
</script>

<Button.Root bind:ref type="submit" disabled={$delayed} {...restProps}>
  {@render children?.()}
  {#if $delayed}
    <LoaderCircle class="animate-spin" />
  {/if}
</Button.Root>
