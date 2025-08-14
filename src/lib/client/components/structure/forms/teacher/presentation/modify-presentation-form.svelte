<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import {
    modifyPresentationSchema,
    type ModifyPresentationSchema,
  } from '$lib/common/schemas/presentation-schemas';
  import { Input } from '$lib/client/components/ui/input';
  import { Textarea } from '$lib/client/components/ui/textarea';
  import { Switch } from '$lib/client/components/ui/switch';
  import type { Presentation } from '@prisma/client';
  import { DialogClose } from '$lib/client/components/ui/dialog';

  type Props = {
    presentation: Presentation;
    data: SuperValidated<Infer<ModifyPresentationSchema>>;
  };

  const { presentation, data }: Props = $props();

  const form = superForm(data, {
    id: `modify-presentation-${presentation.id}`,
    validators: zodClient(modifyPresentationSchema),
  });

  const { form: formData, delayed, enhance } = form;

  // Prefill the form for every presentation in the list
  $formData = presentation;
</script>

<form method="POST" action="?/modifyPresentation" class="flex flex-col" use:enhance>
  <Form.Field {form} name="id">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.id} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="title">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Titre</Form.Label>
        <Input placeholder="Les balises HTML" {...props} bind:value={$formData.title} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <div class="flex items-center gap-2 *:flex-1">
    <Form.Field {form} name="abbreviation">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Abbréviation</Form.Label>
          <Input placeholder="intro-html" {...props} bind:value={$formData.abbreviation} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="chapter">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Chapitre</Form.Label>
          <Input placeholder="1" type="number" min="1" {...props} bind:value={$formData.chapter} />
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
          placeholder="Description de la présentation..."
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
          placeholder="/[presentation] ou https://site-web-externe.ca/..."
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
  <Form.Field {form} name="isLocked" class="mt-2 flex items-center justify-between">
    <Form.Control>
      {#snippet children({ props })}
        <div class="space-y-0.5">
          <Form.Label>Présentation bloqué aux étudiants</Form.Label>
          <Form.Description>
            La présentation n'est pas encore accessible aux étudiants
          </Form.Description>
        </div>
        <Switch {...props} bind:checked={$formData.isLocked} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <DialogClose>
    {#snippet child({ props })}
      <Form.Button {delayed} class="ml-auto mt-4 w-full sm:w-max" {...props}>Soumettre</Form.Button>
    {/snippet}
  </DialogClose>
</form>
