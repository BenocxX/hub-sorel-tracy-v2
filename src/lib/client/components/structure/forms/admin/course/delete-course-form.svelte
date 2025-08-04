<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { Input } from '$lib/client/components/ui/input';
  import { type ButtonProps } from '$lib/client/components/ui/button';
  import type { Course } from '@prisma/client';
  import { deleteCourseSchema, type DeleteCourseSchema } from '$lib/common/schemas/course-schemas';

  type Props = {
    course: Course;
    data: SuperValidated<Infer<DeleteCourseSchema>>;
    buttonProps?: ButtonProps;
  };

  const { course, data, buttonProps }: Props = $props();

  const form = superForm(data, {
    id: `delete-course-${course.id}`,
    validators: zodClient(deleteCourseSchema),
  });

  const { form: formData, delayed, enhance } = form;

  $formData.id = course.id;
</script>

<form method="POST" action="?/deleteCourse" class="w-full sm:w-max" use:enhance>
  <Form.Field {form} name="id">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.id} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Button {...buttonProps} {delayed} class="h-max w-full p-0 font-normal" variant="ghost">
    Supprimer
  </Form.Button>
</form>
