<script lang="ts">
  import type { Snippet } from 'svelte';
  import UserAvatar from '$lib/client/components/ui-custom/avatar/user-avatar.svelte';
  import { Badge } from '$lib/client/components/ui/badge';
  import { Button } from '$lib/client/components/ui/button';
  import { formatUserNames, formatTimeBetween } from '$lib/common/tools/format';
  import { CheckCircle2, Reply } from 'lucide-svelte';
  import DeleteCommentButton from './delete-comment-button.svelte';
  import type { CommentWithAuthor } from './context.svelte.js';

  type Props = {
    comment: CommentWithAuthor;
    canDelete: boolean;
    isReply?: boolean;
    /** This reply is the teacher's answer to a resolved question — highlight it as such. */
    isPinnedAnswer?: boolean;
    /** Present only for a top-level comment (replies can't themselves be replied to). */
    onReply?: () => void;
    /** Extra icon-button actions rendered before reply/delete — e.g. the teacher's resolve
     * toggle on a top-level comment. */
    extraActions?: Snippet;
  };

  const {
    comment,
    canDelete,
    isReply = false,
    isPinnedAnswer = false,
    onReply,
    extraActions,
  }: Props = $props();
</script>

<div class="flex gap-3">
  <UserAvatar user={comment.author} class="mt-0.5 shrink-0" />
  <div class="min-w-0 flex-1 space-y-1">
    <div class="flex flex-wrap items-center gap-1.5">
      <span class="text-sm font-semibold"
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
    <p class="whitespace-pre-wrap text-sm leading-relaxed">{comment.content}</p>
  </div>
  {#if onReply || canDelete || extraActions}
    <div class="flex shrink-0 items-center gap-0.5">
      {@render extraActions?.()}
      {#if onReply}
        <Button
          variant="ghost"
          size="icon-sm"
          class="text-foreground-discreet hover:text-foreground"
          onclick={onReply}
        >
          <span class="sr-only">Répondre</span>
          <Reply size={16} />
        </Button>
      {/if}
      {#if canDelete}
        <DeleteCommentButton commentId={comment.id} {isReply} />
      {/if}
    </div>
  {/if}
</div>
