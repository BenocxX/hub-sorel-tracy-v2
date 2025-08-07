<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import {
    createPresentationSchema,
    type CreatePresentationSchema,
  } from '$lib/common/schemas/presentation-schemas';
  import { Input } from '$lib/client/components/ui/input';

  type Props = {
    data: SuperValidated<Infer<CreatePresentationSchema>>;
  };

  const { data }: Props = $props();

  const form = superForm(data, { validators: zodClient(createPresentationSchema) });

  const { form: formData, delayed, enhance } = form;
</script>

<form method="POST" action="?/createPresentation" class="flex flex-col" use:enhance>
  <Form.Field {form} name="title">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Titre</Form.Label>
        <Input placeholder="Les balises HTML" {...props} bind:value={$formData.title} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="description">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Description</Form.Label>
        <Input placeholder="..." {...props} bind:value={$formData.description} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="url">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>URL</Form.Label>
        <Input placeholder="/savant/presentation/..." {...props} bind:value={$formData.url} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="chapter">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Chapitre</Form.Label>
        <Input placeholder="1" type="number" {...props} bind:value={$formData.chapter} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button {delayed} class="ml-auto mt-2 w-full sm:w-max">Soumettre</Form.Button>
</form>
