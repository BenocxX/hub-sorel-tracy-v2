<script lang="ts" module>
  export type BasicSlideProps = SlideProps & {
    title?: string;
    subTitle?: string;
    subTitleComponent?: Snippet;
    slideClassName?: string;
    center?: boolean;
    links?: { label: Snippet; href: string; description?: string }[];
  };
</script>

<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { Snippet } from 'svelte';
  import Slide, { type SlideProps } from '../slide.svelte';
  import { currentPresentation } from '../store.svelte';
  import { ArrowLeft, Link } from 'lucide-svelte';
  import { Button, buttonVariants } from '../../ui/button';
  import { formatToId } from '$lib/common/tools/format';
  import * as Dialog from '../../ui/dialog';
  import List from './list.svelte';

  const {
    title,
    subTitle,
    subTitleComponent,
    links,
    slideClassName,
    center,
    children,
    class: className,
    ...props
  }: BasicSlideProps = $props();

  // TODO: Replace "SECTION" with current section name
  const id = formatToId('SECTION');
</script>

<Slide
  {id}
  animateId={id}
  class={cn('!h-full overflow-y-auto text-left', slideClassName)}
  {...props}
>
  <div class="flex h-full flex-col">
    <div class="sm:space-y-2">
      <div class="space-y-2">
        <div class="flex items-center gap-2" data-id="buttons-row">
          <a href="#/table-of-content" class={buttonVariants({ variant: 'outline', size: 'sm' })}>
            <ArrowLeft size={16} className="mr-2" />
            Table des matières
          </a>
          {#if links?.length}
            <Dialog.Root>
              <Dialog.Trigger>
                {#snippet child({ props })}
                  <Button variant="outline" size="sm" {...props}>
                    <Link size={16} class="mr-2" />
                    Liens
                  </Button>
                {/snippet}
              </Dialog.Trigger>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Liens utiles</Dialog.Title>
                  <Dialog.Description>
                    Voici une liste de liens utiles pour approfondir le sujet de cette page.
                  </Dialog.Description>
                </Dialog.Header>
                <List class="ml-0 space-y-1 [&>li]:pl-0">
                  {#each links as link, index (link.href + index)}
                    <li class="flex flex-col space-y-1">
                      <a href={link.href} target="_blank">{@render link.label()}</a>
                      {#if link.description}
                        <span class="text-sm text-foreground-discreet">{link.description}</span>
                      {/if}
                    </li>
                  {/each}
                </List>
              </Dialog.Content>
            </Dialog.Root>
          {/if}
        </div>
        <h1 class="text-xl font-light opacity-75 sm:text-3xl">{currentPresentation.title}</h1>
      </div>
      <h1 class="text-4xl font-medium sm:text-6xl">{title}</h1>
      {#if subTitleComponent}
        {@render subTitleComponent()}
      {/if}
    </div>
    <div
      class={cn(
        'flex w-full flex-1 flex-col space-y-6 pt-8 !text-left sm:space-y-10 sm:pt-12 sm:!text-left sm:font-light [&_*]:text-lg sm:[&_*]:text-3xl',
        center && '!text-center sm:items-center sm:justify-center sm:pt-0 sm:!text-center',
        className
      )}
    >
      {@render children()}
    </div>
  </div>
</Slide>
