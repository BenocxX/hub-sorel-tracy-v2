<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = HTMLAttributes<HTMLImageElement> & {
    src: string;
    alt: string;
    href?: string;
    caption?: string;
    figureClass?: string;
  };

  const { href, caption, class: className, figureClass, ...props }: Props = $props();
</script>

<figure class={figureClass}>
  <img class={cn('rounded-xl', caption && 'mb-4', className)} {...props} />
  {#if caption}
    {#if href}
      <figcaption>
        <a {href} class="link" target="_blank">
          {caption}
        </a>
      </figcaption>
    {:else}
      <figcaption>{caption}</figcaption>
    {/if}
  {/if}
</figure>
