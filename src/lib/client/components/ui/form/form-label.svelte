<script lang="ts">
  import type { WithoutChild } from 'bits-ui';
  import * as FormPrimitive from 'formsnap';
  import { Label } from '$lib/client/components/ui/label/index.js';
  import { cn } from '$lib/client/utils';

  let {
    ref = $bindable(null),
    children,
    class: className,
    ...restProps
  }: WithoutChild<FormPrimitive.LabelProps> = $props();
</script>

<FormPrimitive.Label {...restProps} bind:ref>
  {#snippet child({ props })}
    <Label {...props} class={cn('data-[fs-error]:text-destructive', className)}>
      {@render children?.()}
    </Label>
  {/snippet}
</FormPrimitive.Label>
