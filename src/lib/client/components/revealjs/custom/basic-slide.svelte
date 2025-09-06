<script lang="ts" module>
  export type BasicSlideProps = SlideProps & {
    title?: string;
    subTitle?: string;
    subTitleComponent?: Snippet;
    slideClassName?: string;
    center?: boolean;
    links?: { label: Snippet | string; href: string; description?: string }[];
    disableAutoAnimate?: boolean;
  };
</script>

<script lang="ts">
  import { cn } from '$lib/client/utils';
  import { type Snippet } from 'svelte';
  import Slide, { type SlideProps } from '../slide.svelte';
  import { currentPresentation } from '../store.svelte';
  import { ArrowLeft, Link } from 'lucide-svelte';
  import { Button, buttonVariants } from '../../ui/button';
  import { formatToId } from '$lib/common/tools/format';
  import * as Dialog from '../../ui/dialog';
  import List from './list.svelte';
  import { getSlideSection } from './utils.svelte';
  import { OutsideLink } from '../../utils';
  import SnippetOrString from '../../utils/snippet-or-string.svelte';

  const {
    title,
    subTitle,
    subTitleComponent,
    links,
    slideClassName,
    center,
    children,
    class: className,
    disableAutoAnimate,
    ...props
  }: BasicSlideProps = $props();

  const section = getSlideSection();
  const animateId = section ? formatToId(section) : undefined;
</script>

<Slide
  {disableAutoAnimate}
  {animateId}
  class={cn('!h-full overflow-y-auto text-left', slideClassName)}
  {...props}
>
  <div class="flex h-full flex-col overflow-x-hidden">
    <div class="sm:space-y-2">
      <div class="space-y-2">
        <div class="flex items-center gap-2" data-id="buttons-row">
          <a href="#/table-of-content" class={buttonVariants({ variant: 'outline', size: 'xs' })}>
            <ArrowLeft size={16} />
            Table des matières
          </a>
          {#if links?.length}
            <Dialog.Root>
              <Dialog.Trigger>
                {#snippet child({ props })}
                  <Button variant="outline" size="xs" {...props}>
                    <Link size={16} />
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
                      <OutsideLink href={link.href}>
                        <SnippetOrString children={link.label} />
                      </OutsideLink>
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
        <h1 class="text-lg font-light opacity-75 sm:text-2xl">{currentPresentation.title}</h1>
      </div>
      <h1 class="text-3xl font-medium sm:text-5xl">{title || section}</h1>
      {#if subTitleComponent}
        {@render subTitleComponent()}
      {:else if subTitle}
        <h4 class="text-foreground-discreet sm:text-xl">{subTitle}</h4>
      {/if}
    </div>
    <div
      class={cn(
        'flex w-full flex-1 flex-col space-y-6 pt-6 !text-left sm:space-y-10 sm:pt-10 sm:!text-left sm:font-light [&_*]:text-lg sm:[&_*]:text-3xl',
        center && '!text-center sm:items-center sm:justify-center sm:pt-0 sm:!text-center',
        className
      )}
    >
      {@render children()}
    </div>
  </div>
</Slide>
