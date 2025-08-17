<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = HTMLAttributes<HTMLImageElement> & {
    href?: string;
    caption?: string;
    figureClass?: string;
    src: string;
    alt: string;
  };

  const { href, caption, class: className, figureClass, ...props }: Props = $props();
</script>

<figure class={figureClass}>
  <img class={cn('rounded-xl', className)} {...props} />
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
