<script lang="ts">
  import hljs from 'highlight.js';
  import type { CodeLanguage } from '../../revealjs/custom/utils.svelte';
  import { cn } from '$lib/client/utils';

  type Props = {
    code: string;
    language: CodeLanguage;
    class?: string;
  };

  const { code, language, class: className }: Props = $props();

  const highlightedCode = $derived(hljs.highlight(code, { language }).value);
</script>

<div
  class={cn(
    'w-full max-w-full overflow-x-auto overflow-y-hidden rounded-xl bg-secondary dark:bg-secondary',
    className
  )}
>
  <pre class="-my-[48px] px-4 md:-my-[64px]">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    <div>{@html highlightedCode}</div>
  </pre>
</div>
