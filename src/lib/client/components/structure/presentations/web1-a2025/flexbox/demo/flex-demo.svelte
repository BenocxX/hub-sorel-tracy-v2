<script lang="ts">
  import { Separator } from '$lib/client/components/ui/separator';
  import { cn } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  const { children, class: className, ...props }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  data-id="flex-demo-parent"
  class={cn('flex rounded border-2 border-black bg-secondary p-2', className)}
  {...props}
>
  {@render children?.()}
</div>
<Separator data-id="flex-demo-separator" />
