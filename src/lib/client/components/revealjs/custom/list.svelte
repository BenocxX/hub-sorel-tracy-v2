<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import SnippetOrString from '../../utils/snippet-or-string.svelte';

  type Props = {
    fragment?: boolean;
    paragraph?: Snippet | string;
    listType?: 'ul' | 'ol';
    children: Snippet;
  } & HTMLAttributes<HTMLUListElement>;

  const {
    fragment = false,
    paragraph,
    listType = 'ul',
    children,
    class: className,
    ...props
  }: Props = $props();
</script>

<div class={cn('space-y-4 sm:space-y-6', fragment && 'fragment')}>
  <p>
    <SnippetOrString children={paragraph} />
  </p>
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
