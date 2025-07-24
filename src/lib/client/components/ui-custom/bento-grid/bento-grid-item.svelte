<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { Snippet } from 'svelte';

  type Props = {
    edge?: keyof typeof edgeSpecificClasses;
    class: string;
    children: Snippet;
  };

  const { edge, class: className, children }: Props = $props();

  const edgeSpecificClasses = {
    topLeft: 'lg:rounded-tl-[2rem]',
    topRight: 'lg:rounded-tr-[2rem]',
    bottomLeft: 'lg:rounded-bl-[2rem]',
    bottomRight: 'lg:rounded-br-[2rem]',
  };

  const edgeClasses = 'rounded-xl ' + (edge ? edgeSpecificClasses[edge] : '');
</script>

<div class={cn('relative', className)}>
  <div class={cn('absolute inset-px bg-white', edgeClasses)}></div>
  <div class={cn('relative flex h-full flex-col overflow-hidden', edgeClasses)}>
    {@render children()}
  </div>
  <div
    class={cn('pointer-events-none absolute inset-px shadow ring-1 ring-black/5', edgeClasses)}
  ></div>
</div>
