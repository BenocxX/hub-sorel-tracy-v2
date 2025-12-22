<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu/index.js';
  import * as Dialog from '$lib/client/components/ui/dialog/index.js';
  import type { SchoolSession } from '@prisma/client';
  import type {
    DeleteSessionSchema,
    ToggleCurrentSessionSchema,
  } from '$lib/common/schemas/school-session-schemas';
  import type { Infer, SuperValidated } from 'sveltekit-superforms';
  import DeleteSessionForm from '$lib/client/components/structure/forms/admin/session/delete-session-form.svelte';
  import ToggleCurrentSessionForm from '$lib/client/components/structure/forms/admin/session/toggle-current-session-form.svelte';
  import { localizeSeason } from '$lib/common/tools/localizer';

  type Props = {
    session: SchoolSession;
    deleteSessionForm: SuperValidated<Infer<DeleteSessionSchema>>;
    toggleCurrentSessionForm: SuperValidated<Infer<ToggleCurrentSessionSchema>>;
  };

  const { session, deleteSessionForm, toggleCurrentSessionForm }: Props = $props();

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
          {#if !session.isCurrent}
            <DropdownMenu.Item class="p-0">
              <ToggleCurrentSessionForm {session} data={toggleCurrentSessionForm} />
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item
              onclick={() => (currentDialog = 'delete')}
              class="w-full cursor-pointer"
            >
              {#snippet child({ props })}
                <Dialog.Trigger {...props}>Supprimer</Dialog.Trigger>
              {/snippet}
            </DropdownMenu.Item>
          {:else}
            <DropdownMenu.Item class="cursor-default data-[highlighted]:bg-transparent">
              Aucune action disponible
            </DropdownMenu.Item>
          {/if}
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>

    <!-- Dialogs -->
    {#if currentDialog === 'delete'}
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>
            Suppression de la session <em>{localizeSeason(session.season)}</em>
            {session.year}
          </Dialog.Title>
          <Dialog.Description>
            La soumission de ce formulaire va supprimer la session
            <em>{localizeSeason(session.season)} {session.year}</em> du système.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <DeleteSessionForm {session} data={deleteSessionForm} />
        </Dialog.Footer>
      </Dialog.Content>
    {/if}
  </Dialog.Root>
</div>
