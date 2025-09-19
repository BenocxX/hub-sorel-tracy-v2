<script lang="ts" module>
  export type MultiCodeBlockProps = Omit<CodeBlockProps, 'language' | 'code' | 'fileName'> & {
    codes: { code: string; language: CodeLanguage; label?: string }[];
    defaultSelectedId?: number;
  };
</script>

<script lang="ts">
  import { cn, copyToClipboard } from '$lib/client/utils';
  import { Button } from '../../ui/button';
  import type { CodeBlockProps } from './code-block.svelte';
  import type { CodeLanguage } from './utils.svelte';
  import * as Dialog from '../../ui/dialog';
  import { Check, Clipboard } from 'lucide-svelte';
  import CodeSource from './code-source.svelte';

  const {
    fragment,
    codes,
    hideCopyButton,
    class: className,
    containerClassName,
    codeClassName,
    autoAnimateId,
    lines = undefined,
    defaultSelectedId = 0,
    children,
    ...props
  }: MultiCodeBlockProps = $props();

  let isCheckIcon = $state(false);

  function changeButtonIcon() {
    if (isCheckIcon) {
      return;
    }

    isCheckIcon = true;
    setTimeout(() => {
      isCheckIcon = false;
    }, 2000);
  }

  let shownId = $state<number>(defaultSelectedId);
  let codeToCopy = $state<string>(codes[defaultSelectedId].code);

  function changeShownCode(index: number) {
    if (shownId === index) return;

    shownId = index;
    codeToCopy = codes[index].code;
  }

  const headerButtonClasses = 'hover:bg-background-300 rounded-[8px] bg-background-200';
</script>

<div class={fragment ? 'fragment' : ''}>
  <div
    class="flex max-h-[51px] w-full max-w-full items-center justify-between gap-4 overflow-x-auto overflow-y-hidden rounded-t-lg border border-b-0 bg-background-100 py-2 pl-4 pr-2"
  >
    <div class="flex items-center gap-2">
      {#each codes as code, index (index)}
        <Button
          size="sm"
          variant="ghost"
          class={cn(
            '!text-base sm:!text-xl',
            headerButtonClasses,
            index === shownId && 'pointer-events-none bg-background-300'
          )}
          onclick={() => changeShownCode(index)}
        >
          {#if code.label}
            {code.label}
          {:else}
            {code.language}
          {/if}
        </Button>
      {/each}
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
      <Button
        onclick={() => {
          changeButtonIcon();
          copyToClipboard(codeToCopy);
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
    </div>
  </div>
  <div
    class={cn(
      'relative !mt-0 h-max w-full max-w-full overflow-x-auto rounded-b-lg border bg-[#FAFAFA] dark:bg-secondary',
      containerClassName
    )}
  >
    {#each codes as code, index (index)}
      <CodeSource
        code={code.code}
        language={code.language}
        {autoAnimateId}
        lines={lines ?? ''}
        class={cn('mt-0', index !== shownId && 'hidden')}
        codeClassName={cn(
          '[&_table.hljs-ln]:!ml-[8px] [&_table.hljs-ln]:!mb-[-24px] [&.fragment_table.hljs-ln]:!ml-[-8px] [&.fragment_table.hljs-ln]:!mb-0 rounded-t-lg !px-4 [&_table.hljs-ln]:!mt-[-24px] [&.fragment_table.hljs-ln]:!mt-[12px]',
          codeClassName
        )}
        {...props}
      />
    {/each}
  </div>
</div>
