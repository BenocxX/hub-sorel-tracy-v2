<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import * as Command from '$lib/client/components/ui/command/index.js';
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
  import { getAllPresentationComponents } from '../../../presentations';
  import Separator from '$lib/client/components/ui/separator/separator.svelte';
  import FormCombobox from '$lib/client/components/ui-custom/combobox/form-combobox.svelte';

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

  const presentationComponents = getAllPresentationComponents();
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
  <Form.Field {form} name="isLocked" class="flex items-center justify-between">
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
  <Separator class="my-6" />
  <Form.Field {form} name="componentId" class="mt-2 flex flex-col">
    <FormCombobox
      items={presentationComponents}
      bind:value={$formData.componentId}
      label="ID du composant"
      emptyValue="Sélectionner un ID de composant..."
    >
      {#snippet itemDisplay(item)}
        {item.id}
      {/snippet}
      {#snippet content({ items, commandItemDisplay, onSelect })}
        <Command.Group heading="ID de composants" value="componentIds">
          {#each items as item (item.id)}
            <Command.Item value={item.id} onSelect={() => onSelect(item)}>
              {@render commandItemDisplay(item)}
            </Command.Item>
          {/each}
        </Command.Group>
      {/snippet}
    </FormCombobox>
    <Form.FieldErrors />
  </Form.Field>
  <div class="my-1 flex items-center justify-center gap-2">
    <Separator class="flex-1" />
    <span class="text-foreground-discreet">OU</span>
    <Separator class="flex-1" />
  </div>
  <Form.Field {form} name="url">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Adresse URL</Form.Label>
        <Input placeholder="https://site-web-externe.ca/" {...props} bind:value={$formData.url} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <DialogClose>
    {#snippet child({ props })}
      <Form.Button {delayed} class="ml-auto mt-4 w-full sm:w-max" {...props}>Soumettre</Form.Button>
    {/snippet}
  </DialogClose>
</form>
