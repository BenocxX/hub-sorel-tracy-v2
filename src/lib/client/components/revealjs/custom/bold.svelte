<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  const { children, class: className, ...props }: HTMLAttributes<HTMLElement> = $props();
</script>

<strong class={cn('font-medium dark:text-foreground-100', className)} {...props}>
  {@render children?.()}
</strong>
