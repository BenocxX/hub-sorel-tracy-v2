<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    paragraph?: string;
    listType?: 'ul' | 'ol';
    children: Snippet;
  } & HTMLAttributes<HTMLUListElement>;

  const { paragraph, listType = 'ul', children, class: className, ...props }: Props = $props();
</script>

<div class="space-y-4 sm:space-y-6">
  {#if paragraph}
    {paragraph}
  {/if}
  <svelte:element
    this={listType}
    class={cn(
      'ml-10 mt-4 space-y-4 [&>li]:pl-4',
      listType === 'ul' ? 'list-disc' : 'list-decimal',
      className
    )}
    {...props}
  >
    {@render children()}
  </svelte:element>
</div>
