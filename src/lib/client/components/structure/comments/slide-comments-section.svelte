<script lang="ts">
  import { currentPresentation } from '../../revealjs/store.svelte.js';
  import { getPresentationCommentsContext, type CommentWithAuthor } from './context.svelte.js';
  import CommentThread from './comment-thread.svelte';
  import CommentComposer from './comment-composer.svelte';
  import { Badge } from '$lib/client/components/ui/badge';
  import Separator from '$lib/client/components/ui/separator/separator.svelte';
  import { MessageSquare } from 'lucide-svelte';

  const ctx = getPresentationCommentsContext();

  const slideId = $derived(currentPresentation.currentSlideId);

  const topLevelComments = $derived(
    slideId
      ? ctx.comments
          .filter((comment) => comment.slideId === slideId && comment.parentId === null)
          .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      : []
  );

  const repliesByParent = $derived.by(() => {
    const map = new Map<number, CommentWithAuthor[]>();
    for (const comment of ctx.comments) {
      if (comment.parentId === null) continue;
      const replies = map.get(comment.parentId) ?? [];
      replies.push(comment);
      map.set(comment.parentId, replies);
    }
    return map;
  });
</script>

<!--
  Deliberately mounted once, below the Reveal deck (in presentation-root.svelte) rather than as a
  per-slide dialog: it reacts to currentPresentation.currentSlideId so the visible thread swaps as
  the user navigates, without remounting the deck itself. Renders nothing when the current slide
  has no stable id (title/TOC slides, or a legacy slide that hasn't opted into one — see
  registerInTOC in revealjs/custom/utils.svelte.ts) since there's nothing to anchor comments to.

  Width mirrors the Presentation component above it (`w-[85%]`, see presentation-root.svelte) so
  the two stay visually aligned and the section scales with the viewport instead of being capped
  at a fixed max-width.

  Renders nothing at all when a teacher has turned comments off for this presentation
  (ctx.commentsEnabled) — not even existing comments are shown, matching createComment's own
  server-side check.
-->
{#if ctx.commentsEnabled && slideId}
  <section class="mx-auto w-[85%] space-y-6 py-12">
    {#if ctx.isLocked && !ctx.isTeacher}
      <p class="rounded-2xl bg-muted/60 p-4 text-sm text-foreground-discreet">
        Cette présentation est verrouillée — vous ne pouvez pas encore commenter.
      </p>
    {:else}
      <CommentComposer
        data={ctx.forms.createComment}
        {slideId}
        formId="new-comment"
        placeholder="Poser une question sur cette diapositive…"
      />
    {/if}

    <Separator />

    <div class="flex items-center gap-2">
      <MessageSquare size={18} />
      <h2 class="text-lg font-semibold">Commentaires</h2>
      {#if topLevelComments.length > 0}
        <Badge variant="secondary">{topLevelComments.length}</Badge>
      {/if}
    </div>

    {#if topLevelComments.length > 0}
      <div class="space-y-8">
        {#each topLevelComments as comment (comment.id)}
          <CommentThread {comment} replies={repliesByParent.get(comment.id) ?? []} />
        {/each}
      </div>
    {:else}
      <p class="text-sm text-foreground-discreet">Aucun commentaire pour cette diapositive.</p>
    {/if}
  </section>
{/if}
