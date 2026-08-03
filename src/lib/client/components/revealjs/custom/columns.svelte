<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = HTMLAttributes<HTMLDivElement> & {
    cols?: 2 | 3 | 4 | 5;
    children: Snippet;
  };

  const { cols = 2, children, class: className, ...props }: Props = $props();

  // Static class names so Tailwind's JIT scanner can find them — a dynamic
  // `grid-cols-${cols}` string would get purged from the production build.
  const colsClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
  }[cols];
</script>

<div class={cn('grid gap-8', colsClass, className)} {...props}>
  {@render children()}
</div>
