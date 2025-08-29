<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu/index.js';
  import type { User } from '$lib/common/types/prisma-types';
  import RemoveUserFromCourseForm from '$lib/client/components/structure/forms/teacher/course/remove-user-from-course-form.svelte';
  import type { Course } from '@prisma/client';
  import type { Infer, SuperValidated } from 'sveltekit-superforms';
  import type { RemoveUserFromCourseSchema } from '$lib/common/schemas/course-schemas';

  type Props = {
    user: User;
    course: Course;
    removeUserFromCourse: SuperValidated<Infer<RemoveUserFromCourseSchema>>;
  };

  const { user, course, removeUserFromCourse }: Props = $props();
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
          <RemoveUserFromCourseForm {course} {user} data={removeUserFromCourse} />
        </DropdownMenu.Item>
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</div>
