<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import * as Select from '$lib/client/components/ui/select/index.js';
  import { Input } from '$lib/client/components/ui/input';
  import {
    createSessionSchema,
    type CreateSessionSchema,
  } from '$lib/common/schemas/school-session-schemas';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { localizeSeason } from '$lib/common/tools/localizer';

  type Props = {
    data: SuperValidated<Infer<CreateSessionSchema>>;
  };

  const { data }: Props = $props();

  const form = superForm(data, { validators: zodClient(createSessionSchema) });

  const { form: formData, delayed, enhance } = form;
  $formData.season = 'Fall';
</script>

<form method="POST" action="?/createSession" class="flex flex-col" use:enhance>
  <div class="flex w-full flex-col gap-2 *:flex-1 sm:flex-row">
    <Form.Field {form} name="year">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Année</Form.Label>
          <Input {...props} placeholder="2025" bind:value={$formData.year} />
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
    <Form.Field {form} name="season">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Saison</Form.Label>
          <Select.Root {...props} type="single" bind:value={$formData.season}>
            <Select.Trigger>{localizeSeason($formData.season)}</Select.Trigger>
            <Select.Content>
              <Select.Item value="Fall">{localizeSeason('Fall')}</Select.Item>
              <Select.Item value="Winter">{localizeSeason('Winter')}</Select.Item>
              <Select.Item value="Summer">{localizeSeason('Summer')}</Select.Item>
            </Select.Content>
          </Select.Root>
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>
  <Form.Button {delayed} class="ml-auto mt-2 w-full sm:w-max">Soumettre</Form.Button>
</form>
