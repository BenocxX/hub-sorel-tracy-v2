<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu/index.js';
  import type { Course } from '@prisma/client';
  import type { Infer, SuperValidated } from 'sveltekit-superforms';
  import type { DeleteCourseSchema } from '$lib/common/schemas/course-schemas';
  import DeleteCourseForm from '$lib/client/components/structure/forms/admin/course/delete-course-form.svelte';

  type Props = {
    course: Course;
    deleteCourseForm: SuperValidated<Infer<DeleteCourseSchema>>;
  };

  const { course, deleteCourseForm }: Props = $props();
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
          <DeleteCourseForm {course} data={deleteCourseForm} />
        </DropdownMenu.Item>
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
