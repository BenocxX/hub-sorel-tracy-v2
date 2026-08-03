<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = HTMLAttributes<HTMLDivElement> & {
    /** Swap the visual order of the children (e.g. image on the right). */
    reverse?: boolean;
    /** Apply flex-1 to every direct child for an even split (two text columns). */
    equal?: boolean;
    children: Snippet;
  };

  const { reverse = false, equal = false, children, class: className, ...props }: Props = $props();
</script>

<div
  class={cn('flex gap-16', equal && '*:flex-1', reverse && 'flex-row-reverse', className)}
  {...props}
>
  {@render children()}
</div>
