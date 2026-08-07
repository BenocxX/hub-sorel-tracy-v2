<script lang="ts">
  import * as Popover from '$lib/client/components/ui/popover';
  import { Button } from '$lib/client/components/ui/button';
  import Separator from '$lib/client/components/ui/separator/separator.svelte';
  import { Bell, CircleHelp, CheckCircle2 } from 'lucide-svelte';
  import { formatCommentUrl, formatTimeBetween, formatUserNames } from '$lib/common/tools/format';
  import { formatChapterTitle } from '$lib/common/tools/chapter';
  import { cn } from '$lib/client/utils';
  import type { NotificationWithComment } from './types.js';

  type Props = {
    notifications: NotificationWithComment[];
    unreadCount: number;
  };

  const { notifications: initialNotifications, unreadCount: initialUnreadCount }: Props = $props();

  // Local, optimistically-updated copy — clicking a notification (or "mark all read") shouldn't
  // need a full page reload just to update the bell, and mutating the `data` prop directly would
  // fight SvelteKit's data flow (it gets overwritten on the next actual load anyway).
  let notifications = $state(initialNotifications.map((n) => ({ ...n })));
  let unreadCount = $state(initialUnreadCount);

  function markRead(id?: number) {
    let changed = false;
    notifications = notifications.map((n) => {
      if (n.read || (id !== undefined && n.id !== id)) return n;
      changed = true;
      return { ...n, read: true };
    });
    if (!changed) return;

    unreadCount = id === undefined ? 0 : Math.max(0, unreadCount - 1);

    // Fire-and-forget: keepalive lets it complete even though clicking a notification also
    // navigates away immediately.
    fetch('/savant/notifications', {
      method: 'POST',
      keepalive: true,
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ id }),
    }).catch((error) => {
      console.error('Failed to mark notification(s) as read', error);
    });
  }
</script>

<Popover.Root>
  <Popover.Trigger>
    {#snippet child({ props })}
      <Button {...props} variant="outline" size="icon-sm" class="relative">
        <span class="sr-only">Notifications</span>
        <Bell />
        {#if unreadCount > 0}
          <span
            class="absolute -right-1.5 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-medium text-primary-foreground"
          >
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        {/if}
      </Button>
    {/snippet}
  </Popover.Trigger>
  <Popover.Content class="w-80 p-0" align="end">
    <div class="flex items-center justify-between p-3">
      <span class="text-sm font-semibold">Notifications</span>
      {#if unreadCount > 0}
        <Button variant="ghost" size="xs" onclick={() => markRead()}>Tout marquer comme lu</Button>
      {/if}
    </div>
    <Separator />
    <div class="max-h-96 overflow-y-auto">
      {#if notifications.length === 0}
        <p class="p-4 text-sm text-foreground-discreet">Aucune notification récente.</p>
      {:else}
        {#each notifications as notification (notification.id)}
          <a
            href={formatCommentUrl(notification.comment)}
            onclick={() => markRead(notification.id)}
            data-sveltekit-reload
            class={cn(
              'flex gap-2 border-b p-3 text-sm last:border-0 hover:bg-muted/50',
              !notification.read && 'bg-muted/40'
            )}
          >
            <div class="mt-0.5 shrink-0">
              {#if notification.type === 'QuestionAnswered'}
                <CheckCircle2 size={16} class="text-green-600 dark:text-green-400" />
              {:else}
                <CircleHelp size={16} class="text-primary" />
              {/if}
            </div>
            <div class="min-w-0 flex-1 space-y-0.5">
              <p class="line-clamp-2">
                {#if notification.type === 'QuestionAnswered'}
                  Votre question a été répondue
                {:else}
                  {formatUserNames(notification.comment.author, { hideUsername: true })} a posé une question
                {/if}
              </p>
              <p class="truncate text-xs text-foreground-discreet">
                {formatChapterTitle(notification.comment.presentation)}
              </p>
              <p class="text-xs text-foreground-discreet">
                {formatTimeBetween(notification.createdAt)}
              </p>
            </div>
            {#if !notification.read}
              <span class="mt-1.5 size-2 shrink-0 rounded-full bg-primary"></span>
            {/if}
          </a>
        {/each}
      {/if}
    </div>
  </Popover.Content>
</Popover.Root>
