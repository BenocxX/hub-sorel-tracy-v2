<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { Input } from '$lib/client/components/ui/input';
  import type { Presentation } from '@prisma/client';
  import {
    deletePresentationSchema,
    togglePresentationLockedSchema,
    type DeletePresentationSchema,
    type TogglePresentationLockedSchema,
  } from '$lib/common/schemas/presentation-schemas';

  type Props = {
    presentation: Presentation;
    data: SuperValidated<Infer<TogglePresentationLockedSchema>>;
  };

  const { presentation, data }: Props = $props();

  const form = superForm(data, {
    id: `toggle-presentation-${presentation.id}-locked`,
    validators: zodClient(togglePresentationLockedSchema),
  });

  const { form: formData, delayed, enhance } = form;

  $formData.id = presentation.id;
  $formData.isLocked = !presentation.isLocked;
</script>

<form method="POST" action="?/togglePresentationLocked" class="w-full sm:w-max" use:enhance>
  <Form.Field {form} name="id">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.id} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Field {form} name="isLocked">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.isLocked} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Button {delayed} class="h-max w-full p-0 font-normal" variant="ghost">
    {#if presentation.isLocked}
      Débloquer
    {:else}
      Bloquer
    {/if}
  </Form.Button>
</form>
