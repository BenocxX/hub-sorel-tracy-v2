<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu/index.js';
  import type { SchoolSession } from '@prisma/client';
  import type { DeleteSessionSchema } from '$lib/common/schemas/school-session-schemas';
  import type { Infer, SuperValidated } from 'sveltekit-superforms';
  import DeleteSessionForm from '$lib/client/components/structure/forms/admin/session/delete-session-form.svelte';

  type Props = {
    session: SchoolSession;
    deleteSessionForm: SuperValidated<Infer<DeleteSessionSchema>>;
  };

  const { session, deleteSessionForm }: Props = $props();
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
        <DropdownMenu.Item>
          <DeleteSessionForm {session} data={deleteSessionForm} />
        </DropdownMenu.Item>
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
