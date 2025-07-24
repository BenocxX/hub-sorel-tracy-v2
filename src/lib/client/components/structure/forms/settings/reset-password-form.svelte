<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { Input } from '$lib/client/components/ui/input';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import FormErrors from '$lib/client/components/ui-custom/form/form-errors.svelte';
  import {
    resetPasswordSchema,
    type ResetPasswordSchema,
  } from '$lib/common/schemas/settings-schemas';

  type Props = {
    class?: string;
    data: SuperValidated<Infer<ResetPasswordSchema>>;
  };

  const { class: className, data }: Props = $props();

  const form = superForm(data, { validators: zodClient(resetPasswordSchema) });

  const { form: formData, delayed, enhance } = form;
</script>

<form method="POST" action="?/resetPassword" class={className} use:enhance>
  <FormErrors {form} />
  <div class="flex w-full flex-col gap-2 sm:flex-row [&>*]:flex-1">
    <Form.Field {form} name="oldPassword">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Ancien mot de passe</Form.Label>
          <Input
            type="password"
            placeholder="********"
            {...props}
            bind:value={$formData.oldPassword}
          />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="newPassword">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Nouveau mot de passe</Form.Label>
          <Input
            type="password"
            placeholder="********"
            {...props}
            bind:value={$formData.newPassword}
          />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="confirmNewPassword">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Confirmation mot de passe</Form.Label>
          <Input
            type="password"
            placeholder="********"
            {...props}
            bind:value={$formData.confirmNewPassword}
          />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>
  <Form.Button {delayed} class="ml-auto mt-2 w-full sm:w-max">Soumettre</Form.Button>
</form>
