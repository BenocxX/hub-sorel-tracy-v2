<script lang="ts">
  import { cn } from '$lib/client/utils';
  import { Avatar as AvatarPrimitive } from 'bits-ui';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: AvatarPrimitive.FallbackProps = $props();
</script>

<AvatarPrimitive.Fallback
  bind:ref
  class={cn('flex size-full items-center justify-center bg-muted', className)}
  {...restProps}
/>
