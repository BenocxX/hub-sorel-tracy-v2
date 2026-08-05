<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { Input } from '$lib/client/components/ui/input';
  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import {
    resolveCommentSchema,
    type ResolveCommentSchema,
  } from '$lib/common/schemas/comment-schemas';
  import { CheckCircle2 } from 'lucide-svelte';
  import { cn } from '$lib/client/utils';

  type Props = {
    data: SuperValidated<Infer<ResolveCommentSchema>>;
    commentId: number;
    resolved: boolean;
  };

  const { data, commentId, resolved }: Props = $props();

  const form = superForm(data, {
    id: `resolve-comment-${commentId}`,
    validators: zodClient(resolveCommentSchema),
  });

  const { form: formData, delayed, enhance } = form;

  // A plain assignment-at-init would go stale after one toggle, since this component's instance
  // survives the data reload that follows a submit ({#each ... (comment.id)} keeps it mounted) —
  // $effect keeps "the value we'd submit" in sync with the (possibly just-updated) resolved prop.
  $effect(() => {
    $formData.commentId = commentId;
    $formData.resolved = !resolved;
  });
</script>

<form method="POST" action="?/resolveComment" use:enhance>
  <Form.Field {form} name="commentId">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.commentId} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Field {form} name="resolved">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.resolved} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Button
    {delayed}
    variant="ghost"
    size="icon-sm"
    class={cn(
      'text-foreground-discreet hover:text-foreground',
      resolved && 'text-green-600 hover:text-green-700 dark:text-green-400'
    )}
  >
    <span class="sr-only">{resolved ? 'Marquer comme non répondu' : 'Marquer comme répondu'}</span>
    <CheckCircle2 size={16} />
  </Form.Button>
</form>
