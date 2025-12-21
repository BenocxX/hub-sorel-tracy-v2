<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu/index.js';
  import * as Dialog from '$lib/client/components/ui/dialog/index.js';
  import type { User } from '$lib/common/types/prisma-types';
  import DeleteUserForm from '$lib/client/components/structure/forms/admin/users/delete-user-form.svelte';
  import ChangeRoleForm from '$lib/client/components/structure/forms/admin/users/change-role-form.svelte';
  import type { Infer, SuperValidated } from 'sveltekit-superforms';
  import type { ChangeRoleSchema, DeleteUserSchema } from '$lib/common/schemas/user-schemas';
  import { formatUserNames } from '$lib/common/tools/format';

  type Props = {
    user: User;
    deleteUserForm: SuperValidated<Infer<DeleteUserSchema>>;
    changeRoleForm: SuperValidated<Infer<ChangeRoleSchema>>;
  };

  const { user, deleteUserForm, changeRoleForm }: Props = $props();

  let currentDialog = $state<'delete' | undefined>(undefined);
</script>

<div class="text-right">
  <Dialog.Root>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {#snippet child({ props })}
          <Button {...props} variant="ghost" size="icon" class="relative size-8 p-0">
            <span class="sr-only">Ouvrir le menu</span>
            <EllipsisIcon />
          </Button>
        {/snippet}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.Group>
          <DropdownMenu.Label>Actions</DropdownMenu.Label>
          <DropdownMenu.Group>
            {#if user.role !== 'Student'}
              <DropdownMenu.Item class="p-0">
                <ChangeRoleForm {user} role="Student" data={changeRoleForm}>
                  Rôle -&gt; étudiant
                </ChangeRoleForm>
              </DropdownMenu.Item>
            {/if}
            {#if user.role !== 'Teacher'}
              <DropdownMenu.Item class="p-0">
                <ChangeRoleForm {user} role="Teacher" data={changeRoleForm}>
                  Rôle -&gt; enseignant
                </ChangeRoleForm>
              </DropdownMenu.Item>
            {/if}
            {#if user.role !== 'Admin'}
              <DropdownMenu.Item class="p-0">
                <ChangeRoleForm {user} role="Admin" data={changeRoleForm}>
                  Rôle -&gt; admin
                </ChangeRoleForm>
              </DropdownMenu.Item>
            {/if}
          </DropdownMenu.Group>
          <DropdownMenu.Separator />
          <DropdownMenu.Item
            onclick={() => (currentDialog = 'delete')}
            class="w-full cursor-pointer"
          >
            {#snippet child({ props })}
              <Dialog.Trigger {...props}>Supprimer</Dialog.Trigger>
            {/snippet}
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>

    <!-- Dialogs -->
    {#if currentDialog === 'delete'}
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>
            Suppression de l'utilisateur <em>{formatUserNames(user, { hideUsername: true })}</em>
          </Dialog.Title>
          <Dialog.Description>
            La soumission de ce formulaire va supprimer l'utilisateur
            <em>{formatUserNames(user)}</em> du système.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <DeleteUserForm {user} data={deleteUserForm} />
        </Dialog.Footer>
      </Dialog.Content>
    {/if}
  </Dialog.Root>
</div>
