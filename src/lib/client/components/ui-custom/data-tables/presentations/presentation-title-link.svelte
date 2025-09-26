<script lang="ts">
  import { page } from '$app/state';
  import { cn } from '$lib/client/utils';
  import { formatPresentationUrl } from '$lib/common/tools/format';
  import type { Presentation } from '@prisma/client';

  const presentation: Presentation = $props();

  const target = $derived(presentation.url ? '_blank' : '_self');
  const href = $derived(presentation.url ? presentation.url : formatPresentationUrl(presentation));

  const isLocked = $derived(page.data.user?.role === 'Student' && presentation.isLocked);
</script>

<a
  href={isLocked ? undefined : href}
  {target}
  class={cn(
    'link ml-4 flex items-center gap-2 text-foreground',
    isLocked && 'cursor-default text-foreground-discreet hover:no-underline'
  )}
>
  <!-- We show the lock icon even for teachers to let them know a presentation is currently locked for students -->
  {#if presentation.isLocked}
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
      class="lucide lucide-lock-icon lucide-lock size-4"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  {/if}
  {presentation.title}
  {#if presentation.url}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-external-link-icon lucide-external-link size-4"
    >
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  {/if}
</a>
