<script lang="ts" module>
  export type CodeBlockProps = Omit<HTMLAttributes<HTMLElement>, 'lang'> & {
    fragment?: boolean;
    code: string;
    fileName?: string;
    label?: string;
    language?: CodeLanguage;
    hideCopyButton?: boolean;
    containerClassName?: string;
    codeClassName?: string;
    autoAnimateId?: string;
    lines?: string;
  };
</script>

<script lang="ts">
  import { cn, copyToClipboard } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';
  import CodeSource from './code-source.svelte';
  import type { CodeLanguage } from './utils.svelte';
  import { Button } from '../../ui/button';
  import { toast } from 'svelte-sonner';
  import * as Dialog from '../../ui/dialog';
  import { Check, Clipboard } from 'lucide-svelte';

  const {
    fragment = false,
    containerClassName,
    code,
    language,
    autoAnimateId,
    lines,
    fileName,
    label,
    children,
    hideCopyButton,
    codeClassName,
    ...props
  }: CodeBlockProps = $props();

  const hasHeader = !!fileName || !!language || !!label || !!children;

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

<div class={fragment ? 'fragment' : ''}>
  {#if hasHeader}
    <div
      class="flex max-h-[51px] w-full max-w-full items-center justify-between gap-4 overflow-hidden overflow-x-auto rounded-t-lg border border-b-0 bg-background-100 py-2 pl-4 pr-2"
    >
      <div class="ouverflow-x-hidden flex max-w-[90%] flex-1 items-center gap-2">
        {#if language}
          <Button
            variant="secondary"
            size="sm"
            class={cn(
              'pointer-events-none !text-base hover:bg-secondary sm:!text-lg',
              headerButtonClasses
            )}
          >
            {language}
          </Button>
        {/if}
        {#if label}
          <Button
            variant="secondary"
            size="sm"
            class={cn(
              'pointer-events-none !text-base hover:bg-secondary sm:!text-lg',
              headerButtonClasses
            )}
          >
            {label}
          </Button>
        {/if}
        {#if fileName}
          <Button
            onclick={() => {
              copyToClipboard(fileName);
              toast.success('Nom du fichier copié dans le presse-papiers');
            }}
            size="sm"
            variant="secondary"
            class={cn('truncate !text-base sm:!text-lg', headerButtonClasses)}
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
                  size="sm"
                  variant="secondary"
                  class={cn('!text-base sm:!text-lg', headerButtonClasses)}
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
            size="sm"
            variant="secondary"
            class={cn('aspect-square px-1.5', headerButtonClasses)}
            aria-label="Copier le code"
          >
            {#if isCheckIcon}
              <Check class="!size-5 sm:!size-6" />
            {:else}
              <Clipboard class="!size-5 sm:!size-6" />
            {/if}
          </Button>
        {/if}
      </div>
    </div>
  {/if}
  <div
    class={cn(
      'relative h-max w-full max-w-full overflow-x-auto rounded-lg border bg-[#FAFAFA] dark:bg-secondary',
      hasHeader && 'rounded-t-none',
      containerClassName
    )}
  >
    <CodeSource
      {code}
      {language}
      {autoAnimateId}
      lines={lines ?? ''}
      codeClassName={cn(
        '[&_table.hljs-ln]:!ml-[8px] [&_table.hljs-ln]:!mb-[-24px] [&.fragment_table.hljs-ln]:!mb-0 rounded-t-lg !pl-2 !pr-4 [&_table.hljs-ln]:!mt-[-24px] [&.fragment_table.hljs-ln]:!mt-[12px]',
        !hasHeader && !hideCopyButton ? '!pr-12' : '',
        codeClassName
      )}
      {...props}
    />
  </div>
</div>
