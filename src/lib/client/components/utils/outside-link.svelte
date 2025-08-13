<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = HTMLAttributes<HTMLElement> & { href: string };

  const { href, class: className, children, ...props }: Props = $props();
</script>

<a class={cn('link', className)} {href} target="_blank" {...props}>{@render children?.()}</a>
