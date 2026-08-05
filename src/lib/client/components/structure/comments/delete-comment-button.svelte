<script lang="ts">
  import { Trash2 } from 'lucide-svelte';
  import { Button } from '$lib/client/components/ui/button';
  import * as AlertDialog from '$lib/client/components/ui/alert-dialog';
  import SingleButtonForm from '$lib/client/components/structure/forms/single-button-form.svelte';
  import { deleteCommentSchema } from '$lib/common/schemas/comment-schemas';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { getPresentationCommentsContext } from './context.svelte.js';

  type Props = {
    commentId: number;
    /** Replies get a slightly softer confirmation copy than top-level questions. */
    isReply?: boolean;
  };

  const { commentId, isReply = false }: Props = $props();

  const ctx = getPresentationCommentsContext();
</script>

<AlertDialog.Root>
  <AlertDialog.Trigger>
    {#snippet child({ props })}
      <Button
        {...props}
        variant="ghost"
        size="icon-sm"
        class="shrink-0 text-foreground-discreet hover:text-destructive"
      >
        <span class="sr-only">Supprimer le commentaire</span>
        <Trash2 size={16} />
      </Button>
    {/snippet}
  </AlertDialog.Trigger>
  <AlertDialog.Portal>
    <AlertDialog.Content>
      <AlertDialog.Header>
        <AlertDialog.Title>Supprimer ce commentaire ?</AlertDialog.Title>
        <AlertDialog.Description>
          {#if isReply}
            Cette réponse sera supprimée de façon permanente.
          {:else}
            Le commentaire et toutes ses réponses seront supprimés de façon permanente.
          {/if}
        </AlertDialog.Description>
      </AlertDialog.Header>
      <AlertDialog.Footer>
        <AlertDialog.Cancel>Annuler</AlertDialog.Cancel>
        <AlertDialog.Action>
          {#snippet child({ props })}
            <SingleButtonForm
              buttonProps={props}
              data={ctx.forms.deleteComment}
              form={{
                id: `delete-comment-${commentId}`,
                method: 'POST',
                action: '?/deleteComment',
                key: 'commentId',
                value: commentId,
              }}
              validator={zodClient(deleteCommentSchema)}
            >
              Supprimer
            </SingleButtonForm>
          {/snippet}
        </AlertDialog.Action>
      </AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog.Portal>
</AlertDialog.Root>
