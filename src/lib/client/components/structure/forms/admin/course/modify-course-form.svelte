<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { Input } from '$lib/client/components/ui/input';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { modifyCourseSchema, type ModifyCourseSchema } from '$lib/common/schemas/course-schemas';
  import { DialogClose } from '$lib/client/components/ui/dialog';

  type Props = {
    data: SuperValidated<Infer<ModifyCourseSchema>>;
  };

  const { data }: Props = $props();

  const form = superForm(data, { validators: zodClient(modifyCourseSchema) });

  const { form: formData, delayed, enhance } = form;
</script>

<form method="POST" action="?/modifyCourse" class="flex flex-col" use:enhance>
  <div class="flex w-full flex-col gap-2 sm:flex-row">
    <Form.Field {form} name="name" class="w-3/4">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Nom</Form.Label>
          <Input {...props} placeholder="Web 1" bind:value={$formData.name} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="abbreviation">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Abbréviation</Form.Label>
          <Input {...props} placeholder="web1" bind:value={$formData.abbreviation} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>
  <Form.Field {form} name="icon">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Icône</Form.Label>
        <Input {...props} placeholder="<svg>...</svg>" bind:value={$formData.icon} />
      {/snippet}
    </Form.Control>
    <Form.FieldErrors />
  </Form.Field>
  <DialogClose>
    {#snippet child({ props })}
      <Form.Button {delayed} class="ml-auto mt-2 w-full sm:w-max" {...props}>Soumettre</Form.Button>
    {/snippet}
  </DialogClose>
</form>
