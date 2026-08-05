<script lang="ts">
  import CommentItem from './comment-item.svelte';
  import CommentComposer from './comment-composer.svelte';
  import ResolveCommentToggle from './resolve-comment-toggle.svelte';
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

<div class="space-y-3">
  <CommentItem
    {comment}
    canDelete={ctx.isTeacher || comment.authorId === ctx.userId}
    onReply={canComment ? () => (showReplyComposer = !showReplyComposer) : undefined}
  >
    {#snippet extraActions()}
      {#if ctx.isTeacher}
        <ResolveCommentToggle
          data={ctx.forms.resolveComment}
          commentId={comment.id}
          resolved={comment.resolved}
        />
      {/if}
    {/snippet}
  </CommentItem>

  {#if sortedReplies.length > 0}
    <div class="ml-4 space-y-3 border-l pl-4">
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

  {#if showReplyComposer}
    <div class="ml-11">
      <CommentComposer
        data={ctx.forms.createComment}
        slideId={comment.slideId}
        parentId={comment.id}
        formId={`reply-${comment.id}`}
        placeholder="Écrire une réponse…"
        compact
        autofocus
        onSubmitted={() => (showReplyComposer = false)}
      />
    </div>
  {/if}
</div>
