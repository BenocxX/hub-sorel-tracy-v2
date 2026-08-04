<script lang="ts">
  import { Button } from '$lib/client/components/ui/button';
  import { cn } from '$lib/client/utils';
  import KeyRound from '@lucide/svelte/icons/key-round';
  import { startAuthentication } from '@simplewebauthn/browser';
  import { toast } from 'svelte-sonner';

  const { class: classes }: { class?: string } = $props();

  let loading = $state(false);

  async function loginWithPasskey() {
    loading = true;

    try {
      const optionsResponse = await fetch('/login/passkey/options', { method: 'POST' });
      const options = await optionsResponse.json();

      const response = await startAuthentication({ optionsJSON: options });

      const verifyResponse = await fetch('/login/passkey/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(response),
      });
      const result = await verifyResponse.json();

      if (!result.verified) {
        toast.error("Connexion par clé d'accès refusée.");
        return;
      }

      window.location.href = result.redirectTo;
    } catch (error) {
      // The user cancelled the OS/browser prompt — not a real error, nothing to report.
      if (error instanceof Error && error.name === 'NotAllowedError') {
        return;
      }

      const details = error instanceof Error ? error.message : String(error);
      toast.error(`Connexion par clé d'accès impossible : ${details}`);
    } finally {
      loading = false;
    }
  }
</script>

<Button
  variant="outline"
  class={cn(classes)}
  onclick={loginWithPasskey}
  disabled={loading}
  type="button"
>
  <KeyRound class="mr-1 !size-5" />
  Se connecter avec une clé d'accès
</Button>
