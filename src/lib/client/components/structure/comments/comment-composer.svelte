<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { Input } from '$lib/client/components/ui/input';
  import { Textarea } from '$lib/client/components/ui/textarea';
  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import {
    createCommentSchema,
    type CreateCommentSchema,
  } from '$lib/common/schemas/comment-schemas';

  type Props = {
    data: SuperValidated<Infer<CreateCommentSchema>>;
    slideId: string;
    /** Set when replying to a top-level comment; omitted for a new top-level comment. */
    parentId?: number;
    placeholder?: string;
    /** Unique per composer instance — several can be mounted at once (main + one per open reply). */
    formId: string;
  };

  const {
    data,
    slideId,
    parentId,
    placeholder = 'Écrire un commentaire…',
    formId,
  }: Props = $props();

  const form = superForm(data, {
    id: formId,
    validators: zodClient(createCommentSchema),
    // Clearing $formData.content by hand in onUpdated (below) instead of using superforms'
    // built-in resetForm, since that would also reset slideId/parentId back to the schema's
    // defaults — and this composer instance keeps posting to the same slide/thread afterwards.
    resetForm: false,
    onUpdated: ({ form: result }) => {
      if (result.valid) {
        $formData.content = '';
      }
    },
  });

  const { form: formData, delayed, enhance } = form;

  $formData.slideId = slideId;
  $formData.parentId = parentId ?? null;
</script>

<form method="POST" action="?/createComment" class="flex flex-col gap-2" use:enhance>
  <Form.Field {form} name="slideId">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.slideId} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Field {form} name="parentId">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.parentId} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Field {form} name="content">
    <Form.Control>
      {#snippet children({ props })}
        <Textarea
          {...props}
          {placeholder}
          class="resize-none"
          rows={parentId ? 2 : 3}
          bind:value={$formData.content}
        />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button {delayed} size="sm" class="ml-auto">Envoyer</Form.Button>
</form>
