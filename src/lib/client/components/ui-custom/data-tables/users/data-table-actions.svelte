<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu/index.js';
  import type { User } from '$lib/common/types/prisma-types';
  import DeleteUserForm from '$lib/client/components/structure/forms/admin/users/delete-user-form.svelte';
  import { page } from '$app/state';
  import ChangeRoleForm from '$lib/client/components/structure/forms/admin/users/change-role-form.svelte';

  const user: User = $props();
</script>

<div class="text-right">
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
        {#if user.role !== 'Student'}
          <DropdownMenu.Item>
            <ChangeRoleForm {user} role="Student" data={page.data.changeRoleForm}>
              Rôle -&gt; étudiant
            </ChangeRoleForm>
          </DropdownMenu.Item>
        {/if}
        {#if user.role !== 'Teacher'}
          <DropdownMenu.Item>
            <ChangeRoleForm {user} role="Teacher" data={page.data.changeRoleForm}>
              Rôle -&gt; enseignant
            </ChangeRoleForm>
          </DropdownMenu.Item>
        {/if}
        {#if user.role !== 'Admin'}
          <DropdownMenu.Item>
            <ChangeRoleForm {user} role="Admin" data={page.data.changeRoleForm}>
              Rôle -&gt; admin
            </ChangeRoleForm>
          </DropdownMenu.Item>
        {/if}
      </DropdownMenu.Group>
      <DropdownMenu.Separator />
      <DropdownMenu.Item>
        <DeleteUserForm {user} data={page.data.deleteUserForm} />
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
