<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import * as Popover from '$lib/client/components/ui/popover/index.js';
  import * as Command from '$lib/client/components/ui/command/index.js';
  import { Input } from '$lib/client/components/ui/input';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import type { Course } from '@prisma/client';
  import {
    addUserToCourseSchema,
    type AddUserToCourseSchema,
  } from '$lib/common/schemas/course-schemas';
  import { tick } from 'svelte';
  import { useId } from 'bits-ui';
  import { cn } from '$lib/client/utils';
  import { buttonVariants } from '$lib/client/components/ui/button';
  import { CheckIcon, ChevronsUpDownIcon } from 'lucide-svelte';
  import type { User } from '$lib/common/types/prisma-types';

  type Props = {
    users: User[];
    data: SuperValidated<Infer<AddUserToCourseSchema>>;
  };

  const { users, data }: Props = $props();

  const form = superForm(data, { validators: zodClient(addUserToCourseSchema) });

  const { form: formData, delayed, enhance } = form;

  let open = $state(false);

  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }
  const triggerId = useId();
</script>

<form method="POST" action="?/addUserToCourse" class="flex flex-col" use:enhance>
  <Form.Field {form} name="userId" class="flex flex-col">
    <Popover.Root bind:open>
      <Form.Control id={triggerId}>
        {#snippet children({ props })}
          <Form.Label>Utilisateur</Form.Label>
          <Popover.Trigger
            class={cn(buttonVariants({ variant: 'outline' }), 'justify-between')}
            role="combobox"
            {...props}
          >
            {@const user = users.find((user) => user.id === $formData.userId)}
            {#if user}
              {user.firstname} {user.lastname} ({user.role})
            {:else}
              Sélectionner un utilisateur...
            {/if}
            <ChevronsUpDownIcon class="opacity-50" />
          </Popover.Trigger>
          <input hidden value={$formData.userId} name={props.name} />
        {/snippet}
      </Form.Control>
      <Popover.Content class=" w-[400px] overflow-y-auto p-0">
        <Command.Root>
          <Command.Input
            autofocus
            placeholder="Rechercher..."
            class="h-9 placeholder:text-foreground-discreet"
          />
          <Command.Empty>Aucun résultat...</Command.Empty>
          <div class="max-h-[300px] overflow-y-auto">
            <Command.Group heading="Administrateurs" value="admins">
              {#each users.filter((user) => user.role === 'Admin') as user (user.id)}
                <Command.Item
                  value={`${user.username}-${user.firstname}-${user.lastname}`}
                  onSelect={() => {
                    $formData.userId = user.id;
                    closeAndFocusTrigger(triggerId);
                  }}
                >
                  {#if user.firstname && user.lastname}
                    {user.firstname} {user.lastname} -
                  {/if}
                  {user.username}
                  <CheckIcon
                    class={cn('ml-auto', user.id !== $formData.userId && 'text-transparent')}
                  />
                </Command.Item>
              {/each}
            </Command.Group>
            <Command.Group heading="Enseignants" value="teachers">
              {#each users.filter((user) => user.role === 'Teacher') as user (user.id)}
                <Command.Item
                  value={`${user.username}-${user.firstname}-${user.lastname}`}
                  onSelect={() => {
                    $formData.userId = user.id;
                    closeAndFocusTrigger(triggerId);
                  }}
                >
                  {#if user.firstname && user.lastname}
                    {user.firstname} {user.lastname} -
                  {/if}
                  {user.username}
                  <CheckIcon
                    class={cn('ml-auto', user.id !== $formData.userId && 'text-transparent')}
                  />
                </Command.Item>
              {/each}
            </Command.Group>
            <Command.Group heading="Étudiants" value="students">
              {#each users.filter((user) => user.role === 'Student') as user (user.id)}
                <Command.Item
                  value={`${user.username}-${user.firstname}-${user.lastname}`}
                  onSelect={() => {
                    $formData.userId = user.id;
                    closeAndFocusTrigger(triggerId);
                  }}
                >
                  {#if user.firstname && user.lastname}
                    {user.firstname} {user.lastname} -
                  {/if}
                  {user.username}
                  <CheckIcon
                    class={cn('ml-auto', user.id !== $formData.userId && 'text-transparent')}
                  />
                </Command.Item>
              {/each}
            </Command.Group>
          </div>
        </Command.Root>
      </Popover.Content>
    </Popover.Root>
    <Form.Description>L'utilisateur sélectionné sera ajouté au cours.</Form.Description>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button {delayed} class="ml-auto mt-2 w-full sm:w-max">Soumettre</Form.Button>
</form>
