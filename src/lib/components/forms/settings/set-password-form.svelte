<script lang="ts">
  import * as Form from '$lib/components/ui/form/index.js';
  import { Input } from '$lib/components/ui/input';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { setPasswordSchema, type SetPasswordSchema } from './schema';
  import FormErrors from '$lib/components/custom-ui/ui/form/form-errors.svelte';

  type Props = {
    class?: string;
    data: SuperValidated<Infer<SetPasswordSchema>>;
  };

  const { class: className, data }: Props = $props();

  const form = superForm(data, { validators: zodClient(setPasswordSchema) });

  const { form: formData, delayed, enhance } = form;
</script>

<form method="POST" action="?/setPassword" class={className} use:enhance>
  <FormErrors {form} />
  <div class="flex w-full flex-col gap-2 sm:flex-row [&>*]:flex-1">
    <Form.Field {form} name="password">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Mot de passe</Form.Label>
          <Input
            type="password"
            placeholder="********"
            {...props}
            bind:value={$formData.password}
          />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="confirmPassword">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Confirmation mot de passe</Form.Label>
          <Input
            type="password"
            placeholder="********"
            {...props}
            bind:value={$formData.confirmPassword}
          />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>
  <Form.Button {delayed} class="ml-auto mt-2 w-full sm:w-max">Soumettre</Form.Button>
</form>
