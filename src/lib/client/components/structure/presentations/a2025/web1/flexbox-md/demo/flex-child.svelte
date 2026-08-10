<script lang="ts">
  import { Separator } from '$lib/client/components/ui/separator';
  import { cn } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  const { children, class: className, ...props }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div
  data-id="flex-demo-child"
  class={cn(
    'flex min-h-16 min-w-16 items-center justify-center rounded border-2 border-primary bg-primary/60 p-2 text-primary-foreground',
    className
  )}
  {...props}
>
  {@render children?.()}
</div>
