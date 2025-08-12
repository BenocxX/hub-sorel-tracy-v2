<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu/index.js';
  import * as Dialog from '$lib/client/components/ui/dialog/index.js';
  import type { Infer, SuperValidated } from 'sveltekit-superforms';
  import DeletePresentationFromCourseForm from '$lib/client/components/structure/forms/teacher/presentation/delete-presentation-from-course-form.svelte';
  import type { Course, Presentation } from '@prisma/client';
  import type {
    DeletePresentationSchema,
    ModifyPresentationSchema,
    TogglePresentationLockedSchema,
  } from '$lib/common/schemas/presentation-schemas';
  import ModifyPresentationForm from '$lib/client/components/structure/forms/teacher/presentation/modify-presentation-form.svelte';
  import TogglePresentationLockedForm from '$lib/client/components/structure/forms/teacher/presentation/toggle-presentation-locked-form.svelte';

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

  let currentDialog = $state<'modify' | undefined>(undefined);
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
          <DropdownMenu.Item>
            <DeletePresentationFromCourseForm {course} {presentation} data={deletePresentation} />
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
  </Dialog.Root>
</div>
