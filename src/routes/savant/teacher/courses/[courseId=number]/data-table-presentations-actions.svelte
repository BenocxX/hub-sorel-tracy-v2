<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu/index.js';
  import * as Dialog from '$lib/client/components/ui/dialog/index.js';
  import type { Infer, SuperValidated } from 'sveltekit-superforms';
  import type { Course, Presentation } from '@prisma/client';
  import {
    deletePresentationSchema,
    type DeletePresentationSchema,
    type ModifyPresentationSchema,
    type TogglePresentationLockedSchema,
  } from '$lib/common/schemas/presentation-schemas';
  import ModifyPresentationForm from '$lib/client/components/structure/forms/teacher/presentation/modify-presentation-form.svelte';
  import TogglePresentationLockedForm from '$lib/client/components/structure/forms/teacher/presentation/toggle-presentation-locked-form.svelte';
  import * as AlertDialog from '$lib/client/components/ui/alert-dialog/index.js';
  import SingleButtonForm from '$lib/client/components/structure/forms/single-button-form.svelte';
  import { zodClient } from 'sveltekit-superforms/adapters';

  type Props = {
    course: Course;
    presentation: Presentation;
    modifyPresentation: SuperValidated<Infer<ModifyPresentationSchema>>;
    togglePresentationLocked: SuperValidated<Infer<TogglePresentationLockedSchema>>;
    deletePresentation: SuperValidated<Infer<DeletePresentationSchema>>;
  };

  const {
    course,
    presentation,
    modifyPresentation,
    togglePresentationLocked,
    deletePresentation,
  }: Props = $props();

  let currentDialog = $state<'modify' | 'delete' | undefined>(undefined);
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
          <DropdownMenu.Item onclick={() => (currentDialog = 'modify')}>
            <Dialog.Trigger>
              {#snippet child({ props })}
                <button {...props}>Modifier</button>
              {/snippet}
            </Dialog.Trigger>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <TogglePresentationLockedForm {presentation} data={togglePresentationLocked} />
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item onclick={() => (currentDialog = 'delete')}>
            <Dialog.Trigger>
              {#snippet child({ props })}
                <button {...props}>Supprimer</button>
              {/snippet}
            </Dialog.Trigger>
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>

    <!-- Dialogs -->
    {#if currentDialog === 'modify'}
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Modification de présentation</Dialog.Title>
          <Dialog.Description>
            La soumission de ce formulaire va modifier la présentation "{presentation.title}" dans
            le système.
          </Dialog.Description>
          <ModifyPresentationForm {presentation} data={modifyPresentation} />
        </Dialog.Header>
      </Dialog.Content>
    {/if}
    {#if currentDialog === 'delete'}
      <AlertDialog.Portal>
        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Confirmation de la suppression</AlertDialog.Title>
            <AlertDialog.Description>
              La présentation "{presentation.title}" sera supprimée de façon permanente du système.
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel>Annuler</AlertDialog.Cancel>
            <AlertDialog.Cancel>
              {#snippet child({ props })}
                <AlertDialog.Action {...props}>
                  {#snippet child({ props: actionProps })}
                    <SingleButtonForm
                      buttonProps={actionProps}
                      data={deletePresentation}
                      form={{
                        id: `delete-presentation-${presentation.id}-from-course-${course.id}`,
                        method: 'POST',
                        action: '?/deletePresentation',
                        key: 'presentationId',
                        value: presentation.id,
                      }}
                      validator={zodClient(deletePresentationSchema)}
                    >
                      Supprimer
                    </SingleButtonForm>
                  {/snippet}
                </AlertDialog.Action>
              {/snippet}
            </AlertDialog.Cancel>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    {/if}
  </Dialog.Root>
</div>
