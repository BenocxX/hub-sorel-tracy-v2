<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu/index.js';
  import type { Infer, SuperValidated } from 'sveltekit-superforms';
  import DeletePresentationFromCourseForm from '$lib/client/components/structure/forms/teacher/presentation/delete-presentation-from-course-form.svelte';
  import type { Course, Presentation } from '@prisma/client';
  import type { DeletePresentationSchema } from '$lib/common/schemas/presentation-schemas';

  type Props = {
    course: Course;
    presentation: Presentation;
    deletePresentation: SuperValidated<Infer<DeletePresentationSchema>>;
  };

  const { course, presentation, deletePresentation }: Props = $props();
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
          <DeletePresentationFromCourseForm {course} {presentation} data={deletePresentation} />
        </DropdownMenu.Item>
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
