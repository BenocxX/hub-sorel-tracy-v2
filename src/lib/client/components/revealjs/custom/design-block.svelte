<script lang="ts">
  import { cn } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = HTMLAttributes<HTMLElement> & {
    state?: 'good' | 'bad' | 'warning' | 'unknown';
  };

  const { state, class: classes, children, ...props }: Props = $props();

  const icons = {
    good: {
      snippet: goodIcon,
      background: 'bg-green-200 dark:bg-green-800',
      foreground: 'text-green-800 dark:text-green-200',
    },
    bad: {
      snippet: badIcon,
      background: 'bg-destructive-200 dark:bg-destructive-800',
      foreground: 'text-destructive-800 dark:text-destructive-200',
    },
    warning: {
      snippet: warningIcon,
      background: 'bg-yellow-200 dark:bg-yellow-800',
      foreground: 'text-yellow-800 dark:text-yellow-200',
    },
    unknown: {
      snippet: unknownIcon,
      background: 'bg-sky-200 dark:bg-sky-800',
      foreground: 'text-sky-800 dark:text-sky-200',
    },
  };

  const iconData = icons[state ?? 'unknown'];
</script>

<div class="flex gap-4">
  <div class={cn('size-max rounded-full p-3', iconData.background, iconData.foreground)}>
    {@render iconData.snippet()}
  </div>
  {#if children}
    <div
      class={cn(
        'flex-1 rounded-xl border border-background-300 bg-background-100 px-6 py-3',
        classes
      )}
      {...props}
    >
      {@render children?.()}
    </div>
  {/if}
</div>

{#snippet goodIcon()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-thumbs-up-icon lucide-thumbs-up"
    ><path
      d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
    /><path d="M7 10v12" /></svg
  >
{/snippet}

{#snippet badIcon()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-thumbs-down-icon lucide-thumbs-down"
    ><path
      d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"
    /><path d="M17 14V2" /></svg
  >
{/snippet}

{#snippet warningIcon()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-circle-alert-icon lucide-circle-alert"
    ><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line
      x1="12"
      x2="12.01"
      y1="16"
      y2="16"
    /></svg
  >
{/snippet}

{#snippet unknownIcon()}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-circle-question-mark-icon lucide-circle-question-mark"
    ><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path
      d="M12 17h.01"
    /></svg
  >
{/snippet}
