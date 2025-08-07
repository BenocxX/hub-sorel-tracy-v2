<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import {
    createPresentationSchema,
    type CreatePresentationSchema,
  } from '$lib/common/schemas/presentation-schemas';
  import { Input } from '$lib/client/components/ui/input';
  import { Textarea } from '$lib/client/components/ui/textarea';
  import { Switch } from '$lib/client/components/ui/switch';

  type Props = {
    data: SuperValidated<Infer<CreatePresentationSchema>>;
  };

  const { data }: Props = $props();

  const form = superForm(data, { validators: zodClient(createPresentationSchema) });

  const { form: formData, delayed, enhance } = form;
</script>

<form method="POST" action="?/createPresentation" class="flex flex-col" use:enhance>
  <div class="flex items-center gap-2">
    <Form.Field {form} name="title" class="flex-1">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Titre</Form.Label>
          <Input placeholder="Les balises HTML" {...props} bind:value={$formData.title} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="chapter">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Chapitre</Form.Label>
          <Input
            placeholder="1"
            type="number"
            class="w-24"
            min="1"
            {...props}
            bind:value={$formData.chapter}
          />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>
  <Form.Field {form} name="description">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Description</Form.Label>
        <Textarea
          {...props}
          placeholder="Description de la présentation"
          class="resize-none"
          bind:value={$formData.description}
        />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="url">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Adresse URL</Form.Label>
        <Input
          placeholder="/savant/presentation/... ou https://site-web-externe.ca/..."
          {...props}
          bind:value={$formData.url}
        />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="isExternal" class="flex items-center justify-between">
    <Form.Control>
      {#snippet children({ props })}
        <div class="space-y-0.5">
          <Form.Label>Adresse URL externe</Form.Label>
          <Form.Description>L'adresse URL fournit pointe vers un site web externe.</Form.Description
          >
        </div>
        <Switch {...props} bind:checked={$formData.isExternal} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Button {delayed} class="ml-auto mt-4 w-full sm:w-max">Soumettre</Form.Button>
</form>
