<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { Input } from '$lib/client/components/ui/input';
  import { type ButtonProps } from '$lib/client/components/ui/button';
  import type { User } from '$lib/common/types/prisma-types';
  import { deleteUserSchema, type DeleteUserSchema } from '$lib/common/schemas/user-schemas';

  type Props = {
    user: User;
    data: SuperValidated<Infer<DeleteUserSchema>>;
    buttonProps?: ButtonProps;
  };

  const { user, data, buttonProps }: Props = $props();

  const form = superForm(data, {
    id: `delete-user-${user.id}`,
    validators: zodClient(deleteUserSchema),
  });

  const { form: formData, delayed, enhance } = form;

  $formData.id = user.id;
</script>

<form method="POST" action="?/deleteUser" class="w-full sm:w-max" use:enhance>
  <Form.Field {form} name="id">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.id} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Button {...buttonProps} {delayed} variant="destructive">Supprimer</Form.Button>
</form>
