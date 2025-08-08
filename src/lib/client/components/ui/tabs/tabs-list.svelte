<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import { cn } from '$lib/client/utils';

  let { ref = $bindable(null), class: className, ...restProps }: TabsPrimitive.ListProps = $props();
</script>

<TabsPrimitive.List
  bind:ref
  class={cn(
    'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-foreground-discreet',
    className
  )}
  {...restProps}
/>
