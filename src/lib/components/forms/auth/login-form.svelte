<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import * as Form from '$lib/components/ui/form/index.js';
  import { Input } from '$lib/components/ui/input';
  import { makeSearchParams } from '$lib/tools/search-params';
  import { loginSchema, type LoginSchema } from './schema';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  const { data }: { data: SuperValidated<Infer<LoginSchema>> } = $props();

  const form = superForm(data, {
    validators: zodClient(loginSchema),
    onResult: ({ result }) => {
      console.log('Form result:', result);
      // makeFormResultToast(result, {
      //   success: 'Authentification complété avec succès.',
      //   error: "Erreur lors de l'authentification.",
      // });
    },
  });

  const { form: formData, delayed, enhance } = form;

  const { searchParams } = $derived(makeSearchParams($formData, ['username']));
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
  <div class="mt-4 flex flex-col gap-2">
    <Form.Button {delayed}>Connexion</Form.Button>
    <Button variant="outline" href={`/login/passkey${searchParams}`}>Utiliser une passkey</Button>
  </div>
</form>
