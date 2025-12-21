<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu/index.js';
  import * as Dialog from '$lib/client/components/ui/dialog/index.js';
  import type { Course } from '@prisma/client';
  import type { Infer, SuperValidated } from 'sveltekit-superforms';
  import type { DeleteCourseSchema } from '$lib/common/schemas/course-schemas';
  import DeleteCourseForm from '$lib/client/components/structure/forms/admin/course/delete-course-form.svelte';
  import { resolve } from '$app/paths';

  type Props = {
    course: Course;
    deleteCourseForm: SuperValidated<Infer<DeleteCourseSchema>>;
  };

  const { course, deleteCourseForm }: Props = $props();

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
          <DropdownMenu.Item class="p-0">
            <a
              href={resolve('/savant/teacher/courses/[courseId=number]', {
                courseId: course.id.toString(),
              })}
              class="w-full px-2 py-1.5"
            >
              Détails
            </a>
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
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>

    <!-- Dialogs -->
    {#if currentDialog === 'delete'}
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>
            Suppression du cours <em>{course.name} gr. {course.group}</em>
          </Dialog.Title>
          <Dialog.Description>
            La soumission de ce formulaire va supprimer le cours
            <em>{course.name} gr. {course.group}</em> du système.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <DeleteCourseForm {course} data={deleteCourseForm} />
        </Dialog.Footer>
      </Dialog.Content>
    {/if}
  </Dialog.Root>
</div>
