<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { Input } from '$lib/client/components/ui/input';
  import { type ButtonProps } from '$lib/client/components/ui/button';
  import type { User } from '$lib/common/types/prisma-types';
  import {
    resetUserPasswordSchema,
    type ResetUserPasswordSchema,
  } from '$lib/common/schemas/user-schemas';

  type Props = {
    user: User;
    data: SuperValidated<Infer<ResetUserPasswordSchema>>;
    buttonProps?: ButtonProps;
  };

  const { user, data, buttonProps }: Props = $props();

  const form = superForm(data, {
    id: `reset-user-password-${user.id}`,
    validators: zodClient(resetUserPasswordSchema),
  });

  const { form: formData, delayed, enhance, message } = form;

  $formData.id = user.id;
</script>

<form method="POST" action="?/resetPassword" class="flex w-full flex-col gap-3" use:enhance>
  <Form.Field {form} name="id">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.id} />
      {/snippet}
    </Form.Control>
  </Form.Field>

  {#if $message}
    <p class="text-sm text-foreground-discreet">
      Mot de passe temporaire à transmettre à <em>{user.username}</em> (Discord, en personne...). Il
      devra le changer une fois connecté.
    </p>
    <Input
      readonly
      value={$message}
      onclick={(event) => event.currentTarget.select()}
      class="font-mono"
    />
  {:else}
    <Form.Button {...buttonProps} {delayed} variant="destructive" class="w-full">
      Générer un mot de passe temporaire
    </Form.Button>
  {/if}
</form>
