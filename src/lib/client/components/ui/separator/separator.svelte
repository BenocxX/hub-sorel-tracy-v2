<script lang="ts">
  import { Separator as SeparatorPrimitive } from 'bits-ui';
  import { cn } from '$lib/client/utils';

  let {
    ref = $bindable(null),
    class: className,
    orientation = 'horizontal',
    ...restProps
  }: SeparatorPrimitive.RootProps = $props();
</script>

<SeparatorPrimitive.Root
  bind:ref
  class={cn(
    'shrink-0 bg-border',
    orientation === 'horizontal' ? 'h-[1px] w-full' : 'min-h-full w-[1px]',
    className
  )}
  {orientation}
  {...restProps}
/>
