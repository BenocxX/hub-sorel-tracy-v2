<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { Input } from '$lib/client/components/ui/input';
  import { type ButtonProps } from '$lib/client/components/ui/button';
  import type { SchoolSession } from '@prisma/client';
  import {
    deleteSessionSchema,
    type DeleteSessionSchema,
  } from '$lib/common/schemas/school-session-schemas';

  type Props = {
    session: SchoolSession;
    data: SuperValidated<Infer<DeleteSessionSchema>>;
    buttonProps?: ButtonProps;
  };

  const { session, data, buttonProps }: Props = $props();

  const form = superForm(data, {
    id: `delete-school-session-${session.id}`,
    validators: zodClient(deleteSessionSchema),
  });

  const { form: formData, delayed, enhance } = form;

  $formData.id = session.id;
</script>

<form method="POST" action="?/deleteSession" use:enhance>
  <Form.Field {form} name="id">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.id} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Button {...buttonProps} {delayed} variant="destructive">Supprimer</Form.Button>
</form>
