<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import { Input } from '$lib/client/components/ui/input/index.js';
  import { cn } from '$lib/client/utils';

  let {
    ref = $bindable(null),
    value = $bindable(''),
    class: className,
    ...restProps
  }: ComponentProps<typeof Input> = $props();
</script>

<Input
  bind:ref
  bind:value
  data-sidebar="input"
  class={cn(
    'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
    className
  )}
  {...restProps}
/>
