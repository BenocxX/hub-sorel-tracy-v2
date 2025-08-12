<script lang="ts">
  import { cn, copyToClipboard } from '$lib/client/utils';
  import type { Snippet } from 'svelte';
  import type { Attachment } from 'svelte/attachments';
  import type { HTMLAttributes } from 'svelte/elements';
  import { toast } from 'svelte-sonner';

  type Props = HTMLAttributes<HTMLSpanElement> & {
    allowCopy?: boolean;
    children: Snippet;
  };

  const { allowCopy, class: className, children, ...props }: Props = $props();

  let content = $state<string | null | undefined>('');
  const myAttachment: Attachment = (element) => {
    content = element.firstChild?.textContent;
  };
</script>

<code
  {@attach myAttachment}
  onclick={() => {
    if (!allowCopy) {
      return;
    }

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
