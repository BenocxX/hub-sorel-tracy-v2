<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';
  import CodeSource from './code-source.svelte';
  import type { Snippet } from 'svelte';
  import type { CodeLanguage } from './utils';

  type Props = HTMLAttributes<HTMLElement> & {
    code: string;
    demonstration?: Snippet;
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
    demonstration,
    hideCopyButton,
    codeClassName,
    ...props
  }: Props = $props();

  const hasHeader = !!fileName || !!language || !!demonstration;
</script>

<div
  class={cn(
    'relative h-max w-full max-w-full overflow-x-auto rounded-lg border',
    containerClassName
  )}
>
  <!-- {hasHeader && (
        <div className="absolute flex w-full max-w-full items-center justify-between gap-4 overflow-hidden overflow-x-hidden rounded-t-lg border-b bg-background-100 py-2 pl-4 pr-2">
          <div className="ouverflow-x-hidden flex max-w-[90%] flex-1 items-center gap-2">
            {language && (
              <Button
                variant="secondary"
                className={cn(
                  'pointer-events-none !text-base hover:bg-secondary sm:!text-xl',
                  headerButtonClasses
                )}
              >
                {language.toUpperCase()}
              </Button>
            )}
            {fileName && (
              <Button
                onClick={() => {
                  copyToClipboard(fileName);
                  toast.success('Nom du fichier copié dans le presse-papiers');
                }}
                variant="secondary"
                className={cn('truncate !text-base sm:!text-xl', headerButtonClasses)}
              >
                {fileName}
              </Button>
            )}
          </div>
          <div className="flex items-center gap-2">
            {demonstration && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="secondary"
                    className={cn('!text-base sm:!text-xl', headerButtonClasses)}
                  >
                    Démo
                  </Button>
                </DialogTrigger>
                <DialogContent className="gap-0 p-0">
                  <DialogHeader className="rounded-t-lg border-b bg-background-200 p-4 dark:bg-background-100">
                    <DialogTitle>Démonstration</DialogTitle>
                  </DialogHeader>
                  <div
                    className={cn('flex max-h-[50vh] flex-col overflow-y-auto rounded-b-lg p-4')}
                  >
                    {demonstration}
                  </div>
                </DialogContent>
              </Dialog>
            )}
            {!hideCopyButton && (
              <Button
                onClick={() => {
                  changeButtonIcon();
                  copyToClipboard(code);
                }}
                variant="secondary"
                className={cn('aspect-square px-1.5', headerButtonClasses)}
                aria-label="Copier le code"
              >
                {isCheckIcon ? (
                  <Check className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Clipboard className="h-5 sm:h-6" />
                )}
              </Button>
            )}
          </div>
        </div>
      )} -->
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
  <!-- {!hasHeader && !hideCopyButton && (
        <Button
          onClick={() => {
            changeButtonIcon();
            copyToClipboard(code);
          }}
          variant="ghost"
          className="absolute right-2.5 top-2.5 aspect-square px-1.5"
          aria-label="Copier le code"
        >
          {isCheckIcon ? <Check size="24px" /> : <Clipboard size="24px" />}
        </Button>
      )} -->
</div>
