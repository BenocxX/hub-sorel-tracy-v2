<script lang="ts">
  import { Button } from '$lib/client/components/ui/button';
  import * as Dialog from '$lib/client/components/ui/dialog/index.js';
  import { Input } from '$lib/client/components/ui/input';
  import { Label } from '$lib/client/components/ui/label';
  import { invalidateAll } from '$app/navigation';
  import { startRegistration } from '@simplewebauthn/browser';
  import { toast } from 'svelte-sonner';

  let open = $state(false);
  let name = $state('');
  let loading = $state(false);

  async function addPasskey() {
    loading = true;

    try {
      const optionsResponse = await fetch('/savant/settings/passkeys/register-options', {
        method: 'POST',
      });
      const options = await optionsResponse.json();

      const response = await startRegistration({ optionsJSON: options });

      const verifyResponse = await fetch('/savant/settings/passkeys/register-verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ response, name }),
      });
      const result = await verifyResponse.json();

      if (!result.verified) {
        toast.error("Impossible d'ajouter cette clé d'accès.");
        return;
      }

      toast.success(`Clé d'accès « ${result.name} » ajoutée.`);
      open = false;
      name = '';
      await invalidateAll();
    } catch (error) {
      // The user cancelled the OS/browser prompt — not a real error, nothing to report.
      if (error instanceof Error && error.name === 'NotAllowedError') {
        return;
      }

      const details = error instanceof Error ? error.message : String(error);
      toast.error(`Impossible d'ajouter cette clé d'accès : ${details}`);
    } finally {
      loading = false;
    }
  }
</script>

<Dialog.Root bind:open>
  <Dialog.Trigger>
    {#snippet child({ props })}
      <Button {...props} class="w-max">Ajouter une clé d'accès</Button>
    {/snippet}
  </Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Header>
      <Dialog.Title>Ajouter une clé d'accès</Dialog.Title>
      <Dialog.Description>
        Donnez un nom à cette clé pour la reconnaître dans la liste, puis suivez les instructions de
        votre navigateur/appareil.
      </Dialog.Description>
    </Dialog.Header>
    <div class="flex flex-col gap-2">
      <Label for="passkey-name">Nom</Label>
      <Input id="passkey-name" placeholder="Mon ordinateur portable" bind:value={name} />
    </div>
    <Dialog.Footer>
      <Button onclick={addPasskey} disabled={loading}>Continuer</Button>
    </Dialog.Footer>
  </Dialog.Content>
</Dialog.Root>
