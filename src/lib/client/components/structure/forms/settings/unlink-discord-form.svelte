<script lang="ts">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import { superForm, type Infer, type SuperValidated } from 'sveltekit-superforms';
  import { zodClient } from 'sveltekit-superforms/adapters';
  import { type ButtonProps } from '$lib/client/components/ui/button';
  import {
    unlinkDiscordSchema,
    type UnlinkDiscordSchema,
  } from '$lib/common/schemas/settings-schemas';

  type Props = {
    data: SuperValidated<Infer<UnlinkDiscordSchema>>;
    disabled?: boolean;
    buttonProps?: ButtonProps;
  };

  const { data, disabled, buttonProps }: Props = $props();

  const form = superForm(data, { validators: zodClient(unlinkDiscordSchema) });

  const { delayed, enhance, message } = form;
</script>

<form method="POST" action="?/unlinkDiscord" class="flex flex-col gap-2" use:enhance>
  <Form.Button {...buttonProps} {delayed} {disabled} variant="destructive" class="w-max">
    Délier mon compte Discord
  </Form.Button>
  {#if $message}
    <p class="text-sm text-destructive">{$message}</p>
  {/if}
</form>
