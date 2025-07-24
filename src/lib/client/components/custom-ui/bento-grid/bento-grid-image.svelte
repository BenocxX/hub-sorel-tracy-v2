<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  const {
    class: className,
    ...props
  }: HTMLAttributes<HTMLImageElement> & {
    src: string;
    alt: string;
  } = $props();
</script>

<img class={cn('h-80 object-cover object-left', className)} {...props} />
