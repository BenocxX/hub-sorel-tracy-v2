<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { CodeLanguage } from './utils.svelte';

  type Props = HTMLAttributes<HTMLElement> & {
    code: string;
    language?: CodeLanguage;
    lines?: string;
    autoAnimateId?: string;
    codeClassName?: string;
  };

  const {
    autoAnimateId,
    language,
    codeClassName,
    class: className,
    lines,
    code,
    ...props
  }: Props = $props();

  let codeToDisplay = $state(code);

  // This is a weird work around to correctly format multiline code. Without this, the first
  // line was always indented for no reason.
  const isMultiline = code.includes('\n');
  if (isMultiline) {
    codeToDisplay = '\n' + code;
  }
</script>

<pre
  class={cn(
    'w-full max-w-full overflow-x-auto bg-[#FAFAFA] text-left dark:bg-secondary [&_*]:!text-lg sm:[&_*]:!text-3xl',
    className
  )}
  data-id={autoAnimateId ? `${autoAnimateId}-pre` : undefined}>
  <code
    data-trim
    data-noescape
    class={cn('rounded-b-lg', language ? `language-${language}` : '', codeClassName)}
    data-line-numbers={lines}
    {...props}>
    {codeToDisplay}
  </code>
</pre>
