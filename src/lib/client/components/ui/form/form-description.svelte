<script lang="ts">
  import * as FormPrimitive from 'formsnap';
  import type { WithoutChild } from 'bits-ui';
  import { cn } from '$lib/client/utils';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChild<FormPrimitive.DescriptionProps> = $props();
</script>

<FormPrimitive.Description
  bind:ref
  class={cn('text-sm text-muted-foreground', className)}
  {...restProps}
/>
