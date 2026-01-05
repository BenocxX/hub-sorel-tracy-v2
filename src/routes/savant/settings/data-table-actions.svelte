<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu/index.js';
  import * as Dialog from '$lib/client/components/ui/dialog/index.js';
  import type { Session } from '$lib/common/types/prisma-types';
  import type { Infer, SuperValidated } from 'sveltekit-superforms';
  import type { DeleteSessionSchema } from '$lib/common/schemas/settings-schemas';
  import { UAParser } from 'ua-parser-js';
  import DeleteSessionForm from '$lib/client/components/structure/forms/settings/delete-session-form.svelte';

  type Props = {
    session: Pick<Session, 'createdAt' | 'expiresAt' | 'lastUsed' | 'publicId' | 'name'>;
    deleteForm: SuperValidated<Infer<DeleteSessionSchema>>;
  };

  const { session, deleteForm }: Props = $props();

  const { device, browser } = UAParser(session.name);

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
            Suppression de la session <em>{device.vendor} {device.model} · {browser.name}</em>
          </Dialog.Title>
          <Dialog.Description>
            La soumission de ce formulaire va supprimer la session
            <em>{device.vendor} {device.model} · {browser.name}</em> du système.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <DeleteSessionForm {session} data={deleteForm} />
        </Dialog.Footer>
      </Dialog.Content>
    {/if}
  </Dialog.Root>
</div>
