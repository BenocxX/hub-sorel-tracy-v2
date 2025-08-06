<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu/index.js';
  import type { User } from '$lib/common/types/prisma-types';
  import DeleteUserForm from '$lib/client/components/structure/forms/admin/users/delete-user-form.svelte';
  import ChangeRoleForm from '$lib/client/components/structure/forms/admin/users/change-role-form.svelte';

  type Props = {
    user: User;
  };

  const { user }: Props = $props();
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
      </DropdownMenu.Group>
      <DropdownMenu.Separator />
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
