<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { Input } from '$lib/client/components/ui/input';
  import { type ButtonProps } from '$lib/client/components/ui/button';
  import type { User } from '$lib/common/types/prisma-types';
  import { changeRoleSchema, type ChangeRoleSchema } from '$lib/common/schemas/user-schemas';
  import type { Snippet } from 'svelte';
  import type { Role } from '@prisma/client';

  type Props = {
    user: User;
    role: Role;
    data: SuperValidated<Infer<ChangeRoleSchema>>;
    buttonProps?: ButtonProps;
    children: Snippet;
  };

  const { user, role, data, buttonProps, children }: Props = $props();

  const form = superForm(data, {
    id: `change-role-${user.id}-${role}`,
    validators: zodClient(changeRoleSchema),
  });

  const { form: formData, delayed, enhance } = form;

  $formData.id = user.id;
  $formData.role = role;
</script>

<form method="POST" action="?/changeRole" class="w-full" use:enhance>
  <Form.Field {form} name="id">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.id} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Field {form} name="role">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.role} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Button
    {...buttonProps}
    {delayed}
    class="h-max w-full justify-start px-2 py-1.5 font-normal"
    variant="ghost"
  >
    {@render children()}
  </Form.Button>
</form>
