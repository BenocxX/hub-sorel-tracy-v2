<script lang="ts">
  import * as Form from '$lib/components/ui/form/index.js';
  import { Input } from '$lib/components/ui/input';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { registerSchema, type RegisterSchema } from './schema';

  export let data: SuperValidated<Infer<RegisterSchema>>;

  const form = superForm(data, {
    validators: zodClient(registerSchema),
    onResult: ({ result }) => {
      console.log('Form result:', result);
      // makeFormResultToast(result, {
      //   success: 'Inscription complété avec succès.',
      //   error: "Erreur lors de l'inscription.",
      // });
    },
  });

  const { form: formData, delayed, enhance } = form;
</script>

<form method="POST" class="flex flex-col gap-2" use:enhance>
  <Form.Field {form} name="username">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Nom d'utilisateur</Form.Label>
        <Input placeholder="John Doe" {...props} bind:value={$formData.username} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="password">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Mot de passe</Form.Label>
        <Input
          placeholder="**********"
          type="password"
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
        <Form.Label>Confirmation du mot de passe</Form.Label>
        <Input
          placeholder="**********"
          type="password"
          {...props}
          bind:value={$formData.confirmPassword}
        />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button class="mt-4" {delayed}>Inscription</Form.Button>
</form>
