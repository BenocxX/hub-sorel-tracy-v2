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
  import { cn } from '$lib/client/utils';

  type Props = {
    data: SuperValidated<Infer<CreateCommentSchema>>;
    slideId: string;
    /** Set when replying to a top-level comment; omitted for a new top-level comment. */
    parentId?: number;
    placeholder?: string;
    /** Unique per composer instance — several can be mounted at once (main + one per open reply). */
    formId: string;
    /** Smaller, lower-key styling — used for the inline reply composer instead of the main one. */
    compact?: boolean;
    /** Focus the textarea as soon as this instance mounts — used when it just opened via "reply". */
    autofocus?: boolean;
    /** Called after a successful submit — e.g. the reply composer closes itself, since a second
     * reply from the same spot is rare enough that reopening it via "reply" again is fine. */
    onSubmitted?: () => void;
  };

  const {
    data,
    slideId,
    parentId,
    placeholder = 'Écrire un commentaire…',
    formId,
    compact = false,
    autofocus = false,
    onSubmitted,
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
        onSubmitted?.();
      }
    },
  });

  const { form: formData, delayed, enhance } = form;

  // A plain assignment here would only run once, at mount — fine for the reply composer (its
  // parentId/slideId come from a fixed comment and never change), but the main composer stays
  // mounted for the whole viewing session while its `slideId` prop keeps changing as the user
  // navigates slides (see slide-comments-section.svelte), so this needs to track it reactively
  // or every submit silently targets whatever slide was active on first mount.
  $effect(() => {
    $formData.slideId = slideId;
    $formData.parentId = parentId ?? null;
  });

  let textareaEl = $state<HTMLTextAreaElement | null>(null);

  // This component is only ever mounted once its containing {#if} turns true (the reply composer
  // isn't kept around hidden), so "just mounted" and "just opened" are the same moment — a plain
  // effect that runs on mount is enough, no need to watch for a state transition.
  $effect(() => {
    if (autofocus) {
      textareaEl?.focus();
    }
  });

  // Grow the textarea to fit its content (up to max-h, see class below, past which it scrolls)
  // instead of relying on manual dragging. Re-measuring on every keystroke means this also
  // catches non-typing content changes — e.g. onSubmitted clearing the field back to empty.
  $effect(() => {
    if (!textareaEl) return;
    void $formData.content;
    textareaEl.style.height = 'auto';
    textareaEl.style.height = `${textareaEl.scrollHeight}px`;
  });
</script>

<form
  method="POST"
  action="?/createComment"
  class={cn(
    'space-y-2 rounded-2xl bg-muted/60 p-4',
    compact && 'rounded-lg border bg-transparent px-4 pb-2 pt-1'
  )}
  use:enhance
>
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
          bind:ref={textareaEl}
          {placeholder}
          class={cn(
            'min-h-0 resize-none overflow-y-auto border-0 bg-transparent p-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0',
            compact ? 'max-h-40 text-sm' : 'max-h-64'
          )}
          rows={compact ? 1 : 3}
          bind:value={$formData.content}
        />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <div class="flex justify-end">
    <Form.Button {delayed} size={compact ? 'xs' : 'sm'} class="rounded-full px-4"
      >Envoyer</Form.Button
    >
  </div>
</form>
