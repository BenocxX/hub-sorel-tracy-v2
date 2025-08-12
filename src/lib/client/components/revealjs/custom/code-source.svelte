<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { CodeLanguage } from './utils';

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
</script>

<pre
  class={cn(
    'w-full max-w-full overflow-x-auto text-left [&_*]:!text-lg sm:[&_*]:!text-3xl',
    className
  )}
  data-id={autoAnimateId ? `${autoAnimateId}-pre` : undefined}>
  <code
    data-trim
    data-noescape
    class={cn('rounded-b-lg', language ? `language-${language}` : '', codeClassName)}
    data-line-numbers={lines}
    {...props}>
    {code}
  </code>
</pre>
