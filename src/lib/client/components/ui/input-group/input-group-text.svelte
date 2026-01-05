<script lang="ts">
  import { cn, type WithElementRef } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';
  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();
</script>

<span
  bind:this={ref}
  class={cn(
    "flex items-center gap-2 text-sm text-foreground-discreet [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
    className
  )}
  {...restProps}
>
  {@render children?.()}
</span>
