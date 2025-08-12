<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { Input } from '$lib/client/components/ui/input';
  import type { Course, Presentation } from '@prisma/client';
  import {
    deletePresentationSchema,
    type DeletePresentationSchema,
  } from '$lib/common/schemas/presentation-schemas';

  type Props = {
    course: Course;
    presentation: Presentation;
    data: SuperValidated<Infer<DeletePresentationSchema>>;
  };

  const { course, presentation, data }: Props = $props();

  const form = superForm(data, {
    id: `delete-presentation-${presentation.id}-from-course-${course.id}`,
    validators: zodClient(deletePresentationSchema),
  });

  const { form: formData, delayed, enhance } = form;

  $formData.presentationId = presentation.id;
</script>

<form method="POST" action="?/deletePresentation" class="w-full sm:w-max" use:enhance>
  <Form.Field {form} name="presentationId">
    <Form.Control>
      {#snippet children({ props })}
        <Input type="hidden" {...props} bind:value={$formData.presentationId} />
      {/snippet}
    </Form.Control>
  </Form.Field>
  <Form.Button {delayed} class="h-max w-full p-0 font-normal" variant="ghost">
    Retirer du cours
  </Form.Button>
</form>
