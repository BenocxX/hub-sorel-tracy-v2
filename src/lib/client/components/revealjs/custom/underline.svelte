<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  const { class: className, children, ...props }: HTMLAttributes<HTMLSpanElement> = $props();
</script>

<span class={cn('underline underline-offset-4', className)} {...props}>
  {@render children?.()}
</span>
