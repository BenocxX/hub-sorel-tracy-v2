<script lang="ts">
  import { page } from '$app/stores';
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { Input } from '$lib/client/components/ui/input';
  import { updateNamesSchema, type UpdateNamesSchema } from '$lib/common/schemas/settings-schemas';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';

  type Props = {
    class?: string;
    data: SuperValidated<Infer<UpdateNamesSchema>>;
  };

  const { class: className, data }: Props = $props();

  const form = superForm(data, { validators: zodClient(updateNamesSchema) });

  const { delayed, enhance } = form;
</script>

<form method="POST" action="?/updateNames" class={className} use:enhance>
  <div class="flex w-full flex-col gap-2 sm:flex-row [&>*]:flex-1">
    <Form.Field {form} name="username">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Nom d'utilisateur</Form.Label>
          <Input {...props} bind:value={$page.data.user!.username} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="firstname">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Prénom</Form.Label>
          <Input {...props} bind:value={$page.data.user!.firstname} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="lastname">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Nom</Form.Label>
          <Input {...props} bind:value={$page.data.user!.lastname} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>
  <Form.Button {delayed} class="ml-auto w-full sm:w-max">Soumettre</Form.Button>
</form>
