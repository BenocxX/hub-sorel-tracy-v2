<script lang="ts">
  import UserAvatar from '$lib/client/components/ui-custom/avatar/user-avatar.svelte';
  import { Badge } from '$lib/client/components/ui/badge';
  import { formatUserNames, formatTimeBetween } from '$lib/common/tools/format';
  import { cn } from '$lib/client/utils';
  import { CheckCircle2 } from 'lucide-svelte';
  import DeleteCommentButton from './delete-comment-button.svelte';
  import type { CommentWithAuthor } from './context.svelte.js';

  type Props = {
    comment: CommentWithAuthor;
    canDelete: boolean;
    isReply?: boolean;
    /** This reply is the teacher's answer to a resolved question — highlight it as such. */
    isPinnedAnswer?: boolean;
  };

  const { comment, canDelete, isReply = false, isPinnedAnswer = false }: Props = $props();
</script>

<div
  class={cn(
    'flex gap-3 rounded-lg border p-3',
    isPinnedAnswer &&
      'border-green-600/30 bg-green-50 dark:border-green-500/20 dark:bg-green-500/10'
  )}
>
  <UserAvatar user={comment.author} class="mt-0.5 shrink-0" />
  <div class="min-w-0 flex-1 space-y-1">
    <div class="flex flex-wrap items-center gap-1.5">
      <span class="text-sm font-medium"
        >{formatUserNames(comment.author, { hideUsername: true })}</span
      >
      {#if comment.isTeacherAuthor}
        <Badge variant="secondary">Enseignant</Badge>
      {/if}
      {#if isPinnedAnswer}
        <Badge variant="success" class="gap-1">
          <CheckCircle2 size={12} />
          Réponse
        </Badge>
      {/if}
      <span class="text-xs text-foreground-discreet">{formatTimeBetween(comment.createdAt)}</span>
    </div>
    <p class="whitespace-pre-wrap text-sm">{comment.content}</p>
  </div>
  {#if canDelete}
    <DeleteCommentButton commentId={comment.id} {isReply} />
  {/if}
</div>
