<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  const { children, class: className, ...props }: HTMLAttributes<HTMLElement> = $props();
</script>

<em class={cn('italic', className)} {...props}>{@render children?.()}</em>
