<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import * as Command from '$lib/client/components/ui/command/index.js';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import {
    addUserToCourseSchema,
    type AddUserToCourseSchema,
  } from '$lib/common/schemas/course-schemas';
  import type { User } from '$lib/common/types/prisma-types';
  import FormCombobox from '$lib/client/components/ui-custom/combobox/form-combobox.svelte';

  type Props = {
    users: User[];
    data: SuperValidated<Infer<AddUserToCourseSchema>>;
  };

  const { users, data }: Props = $props();

  const form = superForm(data, { validators: zodClient(addUserToCourseSchema) });

  const { form: formData, delayed, enhance } = form;
</script>

<form method="POST" action="?/addUserToCourse" class="flex flex-col" use:enhance>
  <Form.Field {form} name="userId" class="mt-2 flex flex-col">
    <FormCombobox
      items={users}
      bind:value={$formData.userId}
      label="Utilisateur"
      emptyValue="Sélectionner un utilisateur..."
    >
      {#snippet itemDisplay(user)}
        {#if user.firstname && user.lastname}
          {user.firstname} {user.lastname} -
        {/if}
        {user.username}
      {/snippet}
      {#snippet content({ items, commandItemDisplay, onSelect })}
        <Command.Group heading="Administrateurs" value="admins">
          {#each items.filter((user) => user.role === 'Admin') as user (user.id)}
            <Command.Item
              value={`${user.firstname}-${user.lastname}-${user.username}`}
              onSelect={() => onSelect(user)}
            >
              {@render commandItemDisplay(user)}
            </Command.Item>
          {/each}
        </Command.Group>
        <Command.Group heading="Enseignants" value="teachers">
          {#each items.filter((user) => user.role === 'Teacher') as user (user.id)}
            <Command.Item
              value={`${user.firstname}-${user.lastname}-${user.username}`}
              onSelect={() => onSelect(user)}
            >
              {@render commandItemDisplay(user)}
            </Command.Item>
          {/each}
        </Command.Group>
        <Command.Group heading="Étudiants" value="students">
          {#each items.filter((user) => user.role === 'Student') as user (user.id)}
            <Command.Item
              value={`${user.firstname}-${user.lastname}-${user.username}`}
              onSelect={() => onSelect(user)}
            >
              {@render commandItemDisplay(user)}
            </Command.Item>
          {/each}
        </Command.Group>
      {/snippet}
    </FormCombobox>
    <Form.Description>L'utilisateur sélectionné sera ajouté au cours.</Form.Description>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button {delayed} class="ml-auto mt-2 w-full sm:w-max">Soumettre</Form.Button>
</form>
