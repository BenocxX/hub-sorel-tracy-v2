<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { Input } from '$lib/client/components/ui/input';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { modifyCourseSchema, type ModifyCourseSchema } from '$lib/common/schemas/course-schemas';
  import { DialogClose } from '$lib/client/components/ui/dialog';
  import { OutsideLink } from '$lib/client/components/utils';

  type Props = {
    data: SuperValidated<Infer<ModifyCourseSchema>>;
  };

  const { data }: Props = $props();

  const form = superForm(data, { validators: zodClient(modifyCourseSchema) });

  const { form: formData, delayed, enhance } = form;
</script>

<form method="POST" action="?/modifyCourse" class="flex flex-col text-start" use:enhance>
  <div class="flex flex-col gap-2 sm:flex-row">
    <Form.Field {form} name="name" class="w-full sm:w-2/3">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Nom</Form.Label>
          <Input {...props} placeholder="Web 1" bind:value={$formData.name} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="group" class="flex-1">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Groupe</Form.Label>
          <Input {...props} placeholder="1" bind:value={$formData.group} type="number" />
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
    <Form.Description>
      Chercher un icône sur
      <OutsideLink href="https://lucide.dev/icons/?focus">Lucide</OutsideLink>.
    </Form.Description>
    <Form.FieldErrors />
  </Form.Field>
  <DialogClose>
    {#snippet child({ props })}
      <Form.Button {delayed} class="ml-auto mt-2 w-full sm:w-max" {...props}>Soumettre</Form.Button>
    {/snippet}
  </DialogClose>
</form>
