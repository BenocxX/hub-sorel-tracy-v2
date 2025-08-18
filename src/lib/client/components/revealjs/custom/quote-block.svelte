<script lang="ts">
  import * as Avatar from '$lib/client/components/ui/avatar';
  import { cn } from '$lib/client/utils';
  import type { Snippet } from 'svelte';

  type Props = {
    children: Snippet;
    fragment?: boolean;
    src?: string;
    alt?: string;
    fallback?: string;
    personName?: string;
    personTitle?: string;
    class?: string;
    imgClass?: string;
  };

  const {
    children,
    fragment = false,
    src,
    alt,
    fallback,
    personName,
    personTitle,
    class: className,
    imgClass,
  }: Props = $props();
</script>

<div class={cn('space-y-4 border-l-[3px] border-primary pl-10', className)}>
  <q>
    {@render children()}
  </q>
  {#if src}
    <div class="flex items-center gap-4">
      <Avatar.Root class="size-14">
        <Avatar.Image class={imgClass} {src} {alt} />
        {#if fallback}
          <Avatar.Fallback>{fallback}</Avatar.Fallback>
        {/if}
      </Avatar.Root>
      <div class="flex flex-col">
        <span class="!text-base font-bold text-foreground sm:!text-xl">{personName}</span>
        <span class="!text-sm text-foreground-discreet sm:!text-lg">{personTitle}</span>
      </div>
    </div>
  {/if}
</div>
