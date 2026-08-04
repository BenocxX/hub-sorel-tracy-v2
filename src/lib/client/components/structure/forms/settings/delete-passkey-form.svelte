<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { Input } from '$lib/client/components/ui/input';
  import { type ButtonProps } from '$lib/client/components/ui/button';
  import type { Passkey } from '@prisma/client';
  import {
    deletePasskeySchema,
    type DeletePasskeySchema,
  } from '$lib/common/schemas/settings-schemas';

  type Props = {
    passkey: Passkey;
    data: SuperValidated<Infer<DeletePasskeySchema>>;
    buttonProps?: ButtonProps;
  };

  const { passkey, data, buttonProps }: Props = $props();

  const form = superForm(data, {
    id: `delete-passkey-${passkey.id}`,
    validators: zodClient(deletePasskeySchema),
  });

  const { form: formData, delayed, enhance } = form;

  $formData.id = passkey.id;
</script>

<form method="POST" action="?/deletePasskey" class="w-full sm:w-max" use:enhance>
  <Form.Field {form} name="id">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.id} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Button {...buttonProps} {delayed} variant="destructive">Supprimer</Form.Button>
</form>
