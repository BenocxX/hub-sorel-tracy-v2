<script lang="ts">
  import * as FormPrimitive from 'formsnap';
  import type { WithoutChild } from 'bits-ui';
  import { cn } from '$lib/client/utils';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChild<FormPrimitive.LegendProps> = $props();
</script>

<FormPrimitive.Legend
  bind:ref
  class={cn('text-sm font-medium leading-none data-[fs-error]:text-destructive', className)}
  {...restProps}
/>
