<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { Input } from '$lib/client/components/ui/input';
  import type { Course } from '@prisma/client';
  import {
    removeUserFromCourseSchema,
    type RemoveUserFromCourseSchema,
  } from '$lib/common/schemas/course-schemas';
  import type { User } from '$lib/common/types/prisma-types';

  type Props = {
    course: Course;
    user: User;
    data: SuperValidated<Infer<RemoveUserFromCourseSchema>>;
  };

  const { course, user, data }: Props = $props();

  const form = superForm(data, {
    id: `remove-user-${user.id}-from-course-${course.id}`,
    validators: zodClient(removeUserFromCourseSchema),
  });

  const { form: formData, delayed, enhance } = form;

  $formData.courseId = course.id;
  $formData.userId = user.id;
</script>

<form method="POST" action="?/removeUserFromCourse" class="w-full sm:w-max" use:enhance>
  <Form.Field {form} name="courseId">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.courseId} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Field {form} name="userId">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.userId} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Button {delayed} class="h-max w-full p-0 font-normal" variant="ghost">
    Retirer du cours
  </Form.Button>
</form>
