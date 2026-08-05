<script lang="ts">
  import CommentItem from './comment-item.svelte';
  import CommentComposer from './comment-composer.svelte';
  import ResolveCommentToggle from './resolve-comment-toggle.svelte';
  import { Badge } from '$lib/client/components/ui/badge';
  import { Button } from '$lib/client/components/ui/button';
  import { CheckCircle2, MessageSquareReply } from 'lucide-svelte';
  import { cn } from '$lib/client/utils';
  import { getPresentationCommentsContext, type CommentWithAuthor } from './context.svelte.js';

  type Props = {
    comment: CommentWithAuthor;
    replies: CommentWithAuthor[];
  };

  const { comment, replies }: Props = $props();

  const ctx = getPresentationCommentsContext();

  let showReplyComposer = $state(false);

  // Once a question is marked answered, the teacher's reply(ies) become "the" answer and are
  // pinned to the top; otherwise just show the conversation in the order it happened. Array#sort
  // is a stable sort, so each group keeps its own chronological order.
  const sortedReplies = $derived(
    comment.resolved
      ? [...replies].sort((a, b) => Number(b.isTeacherAuthor) - Number(a.isTeacherAuthor))
      : replies
  );

  const canComment = $derived(!ctx.isLocked || ctx.isTeacher);
</script>

<div class={cn('space-y-3 rounded-lg border p-3', comment.resolved && 'border-green-600/30')}>
  <div class="space-y-2">
    <CommentItem {comment} canDelete={ctx.isTeacher || comment.authorId === ctx.userId} />
    {#if comment.resolved}
      <Badge variant="success" class="gap-1">
        <CheckCircle2 size={12} />
        Répondu
      </Badge>
    {/if}
  </div>

  {#if sortedReplies.length > 0}
    <div class="ml-6 space-y-2 border-l pl-3">
      {#each sortedReplies as reply (reply.id)}
        <CommentItem
          comment={reply}
          canDelete={ctx.isTeacher || reply.authorId === ctx.userId}
          isReply
          isPinnedAnswer={comment.resolved && reply.isTeacherAuthor}
        />
      {/each}
    </div>
  {/if}

  <div class="ml-6 flex flex-wrap items-center gap-2">
    {#if ctx.isTeacher}
      <ResolveCommentToggle
        data={ctx.forms.resolveComment}
        commentId={comment.id}
        resolved={comment.resolved}
      />
    {/if}
    {#if canComment}
      <Button
        variant="ghost"
        size="sm"
        class="gap-1.5"
        onclick={() => (showReplyComposer = !showReplyComposer)}
      >
        <MessageSquareReply size={14} />
        Répondre
      </Button>
    {/if}
  </div>

  {#if showReplyComposer}
    <div class="ml-6">
      <CommentComposer
        data={ctx.forms.createComment}
        slideId={comment.slideId}
        parentId={comment.id}
        formId={`reply-${comment.id}`}
        placeholder="Écrire une réponse…"
      />
    </div>
  {/if}
</div>
