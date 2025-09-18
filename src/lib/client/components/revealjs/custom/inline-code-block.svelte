<script lang="ts">
  import { cn, copyToClipboard } from '$lib/client/utils';
  import type { Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { toast } from 'svelte-sonner';

  type Props = HTMLAttributes<HTMLSpanElement> & {
    allowCopy?: boolean;
    children: Snippet;
  };

  const { allowCopy, class: className, children, ...props }: Props = $props();

  let codeElement = $state<HTMLSpanElement | null>(null);
</script>

<code
  bind:this={codeElement}
  onclick={() => {
    if (!allowCopy) {
      return;
    }

    const content = codeElement?.textContent;
    copyToClipboard(content ?? '');
    toast.success('Contenu copié dans le presse-papiers');
  }}
  class={cn(
    'rounded bg-background-200 px-2 py-1 !text-lg text-rose-700 dark:bg-background-200 dark:text-blue-300 sm:!text-2xl',
    allowCopy && 'cursor-pointer',
    className
  )}
  {...props}
>
  {@render children()}
</code>
