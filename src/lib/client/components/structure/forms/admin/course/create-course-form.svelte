<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import * as Select from '$lib/client/components/ui/select/index.js';
  import { Input } from '$lib/client/components/ui/input';
  import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { createCourseSchema, type CreateCourseSchema } from '$lib/common/schemas/course-schemas';
  import type { $Enums, SchoolSession } from '@prisma/client';
  import { displaySession } from '$lib/common/tools/localizer';
  import { DialogClose } from '$lib/client/components/ui/dialog';
  import { resolve } from '$app/paths';
  import OutsideLink from '$lib/client/components/utils/outside-link.svelte';

  type Props = {
    sessions: SchoolSession[];
    data: SuperValidated<Infer<CreateCourseSchema>>;
  };

  const { sessions, data }: Props = $props();

  const form = superForm(data, { validators: zodClient(createCourseSchema) });

  const { form: formData, delayed, enhance } = form;

  $formData.sessionId = sessions[0].id.toString();
  const selectedSession = $derived(
    sessions.find(({ id }) => id.toString() === $formData.sessionId)
  );
</script>

<form method="POST" action="?/createCourse" class="flex flex-col" use:enhance>
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
  <div class="flex w-full flex-col gap-2 sm:flex-row">
    <Form.Field {form} name="icon" class="w-full sm:w-2/3">
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
    <Form.Field {form} name="sessionId" class="flex-1">
      <Form.Control>
        {#snippet children({ props })}
          <Form.Label>Session</Form.Label>
          <Select.Root {...props} type="single" bind:value={$formData.sessionId}>
            <Select.Trigger>
              {#if selectedSession}
                {displaySession(selectedSession)}
              {/if}
            </Select.Trigger>
            <Select.Content>
              {#each sessions as session (session.id)}
                <Select.Item value={session.id.toString()}>{displaySession(session)}</Select.Item>
              {/each}
            </Select.Content>
          </Select.Root>
        {/snippet}
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  </div>
  <DialogClose>
    {#snippet child({ props })}
      <Form.Button {delayed} class="ml-auto mt-2 w-full sm:w-max" {...props}>Soumettre</Form.Button>
    {/snippet}
  </DialogClose>
</form>
