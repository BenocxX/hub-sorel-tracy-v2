<script lang="ts">
  import DiscordButton from '$lib/client/components/ui-custom/buttons/discord-button.svelte';
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { Input } from '$lib/client/components/ui/input';
  import Separator from '$lib/client/components/ui/separator/separator.svelte';
  import { loginSchema, type LoginSchema } from '$lib/common/schemas/auth-schemas';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  const { data }: { data: SuperValidated<Infer<LoginSchema>> } = $props();

  const form = superForm(data, { validators: zodClient(loginSchema) });

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
  <div class="mt-2 flex flex-col gap-2">
    <Form.Button class="flex-1" {delayed}>Connexion</Form.Button>
    <div class="my-2 flex items-center">
      <Separator class="flex-1" />
      <span class="mx-4 text-foreground-discreeter">OU</span>
      <Separator class="flex-1" />
    </div>
    <DiscordButton class="flex-1">Se connecter avec Discord</DiscordButton>
  </div>
</form>
