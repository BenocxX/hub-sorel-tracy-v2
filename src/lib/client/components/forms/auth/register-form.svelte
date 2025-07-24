<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { Input } from '$lib/client/components/ui/input';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { registerSchema, type RegisterSchema } from './schema';
  import DiscordButton from '$lib/client/components/custom-ui/ui/buttons/discord-button.svelte';
  import { Separator } from '$lib/client/components/ui/separator';

  export let data: SuperValidated<Infer<RegisterSchema>>;

  const form = superForm(data, { validators: zodClient(registerSchema) });

  const { form: formData, delayed, enhance } = form;
</script>

<form method="POST" class="flex flex-col gap-2" use:enhance>
  <Form.Field {form} name="username">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Nom d'utilisateur</Form.Label>
        <Input placeholder="john_doe24" {...props} bind:value={$formData.username} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <div class="flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row [&>*]:flex-1">
    <Form.Field {form} name="firstname">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Prénom</Form.Label>
          <Input placeholder="John" {...props} bind:value={$formData.firstname} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="lastname">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Nom de famille</Form.Label>
          <Input placeholder="Doe" {...props} bind:value={$formData.lastname} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>
  <div class="flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row [&>*]:flex-1">
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
  </div>
  <div class="mt-2 flex flex-col gap-2">
    <Form.Button class="flex-1" {delayed}>Inscription</Form.Button>
    <div class="my-2 flex items-center">
      <Separator class="flex-1" />
      <span class="mx-4 text-foreground-discreeter">OU</span>
      <Separator class="flex-1" />
    </div>
    <DiscordButton class="flex-1">Se connecter avec Discord</DiscordButton>
  </div>
</form>
