<script lang="ts">
  import { invalidateAll } from '$app/navigation';
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

  const form = superForm(data, {
    validators: zodClient(updateNamesSchema),
    onUpdated: ({ form }) => {
      if (form.valid) {
        invalidateAll();
      }
    },
  });

  const { form: formData, delayed, enhance } = form;
</script>

<form method="POST" action="?/updateNames" class={className} use:enhance>
  <div class="flex w-full flex-col gap-2 *:flex-1 sm:flex-row">
    <Form.Field {form} name="username">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Nom d'utilisateur</Form.Label>
          <Input {...props} bind:value={$formData.username} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="firstname">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Prénom</Form.Label>
          <Input {...props} bind:value={$formData.firstname} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="lastname">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Nom</Form.Label>
          <Input {...props} bind:value={$formData.lastname} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>
  <Form.Button {delayed} class="ml-auto w-full sm:w-max">Soumettre</Form.Button>
</form>
