<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { WithElementRef } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-sidebar="group-content"
  class={cn('w-full text-sm', className)}
  {...restProps}
>
  {@render children?.()}
</div>
