<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu/index.js';
  import * as Dialog from '$lib/client/components/ui/dialog/index.js';
  import type { Passkey } from '@prisma/client';
  import type { Infer, SuperValidated } from 'sveltekit-superforms';
  import type { DeletePasskeySchema } from '$lib/common/schemas/settings-schemas';
  import DeletePasskeyForm from '$lib/client/components/structure/forms/settings/delete-passkey-form.svelte';

  type Props = {
    passkey: Passkey;
    deleteForm: SuperValidated<Infer<DeletePasskeySchema>>;
  };

  const { passkey, deleteForm }: Props = $props();

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
            Suppression de la clé d'accès <em>{passkey.name}</em>
          </Dialog.Title>
          <Dialog.Description>
            La soumission de ce formulaire va supprimer la clé d'accès
            <em>{passkey.name}</em> de votre compte. Vous ne pourrez plus l'utiliser pour vous connecter.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <DeletePasskeyForm {passkey} data={deleteForm} />
        </Dialog.Footer>
      </Dialog.Content>
    {/if}
  </Dialog.Root>
</div>
