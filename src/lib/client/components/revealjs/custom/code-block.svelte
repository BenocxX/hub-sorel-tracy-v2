<script lang="ts">
  import { cn, copyToClipboard } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';
  import CodeSource from './code-source.svelte';
  import type { Snippet } from 'svelte';
  import type { CodeLanguage } from './utils';
  import { Button } from '../../ui/button';
  import { toast } from 'svelte-sonner';
  import * as Dialog from '../../ui/dialog';
  import { Check, Clipboard } from 'lucide-svelte';

  type Props = HTMLAttributes<HTMLElement> & {
    code: string;
    fileName?: string;
    language?: CodeLanguage;
    hideCopyButton?: boolean;
    containerClassName?: string;
    codeClassName?: string;
    autoAnimateId?: string;
    lines?: string;
  };

  const {
    containerClassName,
    code,
    language,
    autoAnimateId,
    lines,
    fileName,
    children,
    hideCopyButton,
    codeClassName,
    ...props
  }: Props = $props();

  const hasHeader = !!fileName || !!language || !!children;

  const headerButtonClasses = 'hover:bg-background-300 rounded-[8px] bg-background-200';

  let isCheckIcon = $state(false);

  function changeButtonIcon() {
    if (isCheckIcon) {
      return;
    }

    isCheckIcon = true;
    setTimeout(() => (isCheckIcon = false), 2000);
  }
</script>

<div
  class={cn(
    'relative h-max w-full max-w-full overflow-x-auto rounded-lg border',
    containerClassName
  )}
>
  {#if hasHeader}
    <div
      class="absolute flex w-full max-w-full items-center justify-between gap-4 overflow-hidden overflow-x-hidden rounded-t-lg border-b bg-background-100 py-2 pl-4 pr-2"
    >
      <div class="ouverflow-x-hidden flex max-w-[90%] flex-1 items-center gap-2">
        {#if language}
          <Button
            variant="secondary"
            class={cn(
              'pointer-events-none !text-base hover:bg-secondary sm:!text-xl',
              headerButtonClasses
            )}
          >
            {language.toUpperCase()}
          </Button>
        {/if}
        {#if fileName}
          <Button
            onclick={() => {
              copyToClipboard(fileName);
              toast.success('Nom du fichier copié dans le presse-papiers');
            }}
            variant="secondary"
            class={cn('truncate !text-base sm:!text-xl', headerButtonClasses)}
          >
            {fileName}
          </Button>
        {/if}
      </div>
      <div class="flex items-center gap-2">
        {#if children}
          <Dialog.Root>
            <Dialog.Trigger>
              {#snippet child({ props })}
                <Button
                  {...props}
                  variant="secondary"
                  class={cn('!text-base sm:!text-xl', headerButtonClasses)}
                >
                  Démo
                </Button>
              {/snippet}
            </Dialog.Trigger>
            <Dialog.Content class="gap-0 p-0">
              <Dialog.Header
                class="rounded-t-lg border-b bg-background-200 p-4 dark:bg-background-100"
              >
                <Dialog.Title>Démonstration</Dialog.Title>
              </Dialog.Header>
              <div class={cn('flex max-h-[50vh] flex-col overflow-y-auto rounded-b-lg p-4')}>
                {@render children()}
              </div>
            </Dialog.Content>
          </Dialog.Root>
        {/if}
        {#if !hideCopyButton}
          <Button
            onclick={() => {
              changeButtonIcon();
              copyToClipboard(code);
            }}
            variant="secondary"
            class={cn('aspect-square px-1.5', headerButtonClasses)}
            aria-label="Copier le code"
          >
            {#if isCheckIcon}
              <Check class="size-5 sm:size-6" />
            {:else}
              <Clipboard class="h-5 sm:h-6" />
            {/if}
          </Button>
        {/if}
      </div>
    </div>
  {/if}
  <CodeSource
    {code}
    {language}
    {autoAnimateId}
    {lines}
    codeClassName={cn(
      hasHeader ? '!mt-[52px]' : 'rounded-t-lg !px-4',
      !hasHeader && !hideCopyButton ? '!pr-12' : '',
      codeClassName
    )}
    {...props}
  />
  {#if !hasHeader && !hideCopyButton}
    <Button
      onclick={() => {
        changeButtonIcon();
        copyToClipboard(code);
      }}
      variant="ghost"
      class="absolute right-2.5 top-2.5 aspect-square px-1.5"
      aria-label="Copier le code"
    >
      {#if isCheckIcon}
        <Check size="24px" />
      {:else}
        <Clipboard size="24px" />
      {/if}
    </Button>
  {/if}
</div>
