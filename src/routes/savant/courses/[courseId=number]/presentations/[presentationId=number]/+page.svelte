<script lang="ts">
  import { getPresentationComponent } from '$lib/client/components/structure/presentations/index.js';
  import { setPresentationCommentsContext } from '$lib/client/components/structure/comments/context.svelte.js';

  const { data } = $props();

  const PresentationComponent = getPresentationComponent(data.presentation);

  // Getters, not plain values, so children always see live data as `data` updates after a
  // comment form action reloads it — Svelte context is only set once, but a getter re-reads
  // the (reactive) `data` prop on every access.
  setPresentationCommentsContext({
    presentationId: data.presentation.id,
    isTeacher: data.isTeacher,
    userId: data.user!.id,
    get isLocked() {
      return data.presentation.isLocked;
    },
    get comments() {
      return data.comments;
    },
    forms: {
      createComment: data.createCommentForm,
      deleteComment: data.deleteCommentForm,
      resolveComment: data.resolveCommentForm,
    },
  });
</script>

<svelte:head>
  <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
</svelte:head>

{#if PresentationComponent}
  <PresentationComponent />
{:else}
  <span>Aucune présentation trouvée...</span>
{/if}
