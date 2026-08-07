<script>
  import ResetPasswordForm from '$lib/client/components/structure/forms/settings/reset-password-form.svelte';
  import SetPasswordForm from '$lib/client/components/structure/forms/settings/set-password-form.svelte';
  import UpdateNamesForm from '$lib/client/components/structure/forms/settings/update-names-form.svelte';
  import UnlinkDiscordForm from '$lib/client/components/structure/forms/settings/unlink-discord-form.svelte';
  import AddPasskeyForm from '$lib/client/components/structure/forms/settings/add-passkey-form.svelte';
  import DiscordButton from '$lib/client/components/ui-custom/buttons/discord-button.svelte';
  import PageTitle from '$lib/client/components/structure/page-title.svelte';
  import DataTable from '$lib/client/components/ui-custom/data-tables/data-table.svelte';
  import { makeColumns } from './columns.js';
  import { makePasskeyColumns } from './passkey-columns.js';
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import { Plus } from 'lucide-svelte';

  const { data } = $props();

  const columns = makeColumns({
    deleteForm: data.deleteSessionForm,
    currentSessionPublicId: data.currentSessionPublicId,
  });

  const passkeyColumns = makePasskeyColumns({ deleteForm: data.deletePasskeyForm });

  const discordError = $derived(page.url.searchParams.get('discordError'));
</script>

<PageTitle title="Paramètres" subtitle="Gérez les différents paramètres de votre compte." />
<div class="pb-12 pt-4">
  <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b pb-12 md:grid-cols-1 lg:grid-cols-3">
    <div>
      <h2 class="font-semibold">Modifications des noms</h2>
      <p class="mt-1 text-sm/6 text-foreground-discreet">
        Vous pouvez mettre à jour votre nom d'utilisateur, prénom et nom. Veuillez inscrire un
        prénom et nom si cela n'est pas déjà fait.
      </p>
    </div>
    <UpdateNamesForm data={data.updateNamesForm} class="flex flex-col gap-4 md:col-span-2" />
  </div>
  {#if data.user?.mustChangePassword}
    <div
      class="-mb-4 mt-12 flex items-center gap-4 rounded-md border border-amber-500/50 bg-amber-500/10 p-4 text-sm text-amber-700 dark:text-amber-400"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-circle-alert-icon lucide-circle-alert min-h-6 min-w-6"
        ><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line
          x1="12"
          x2="12.01"
          y1="16"
          y2="16"
        /></svg
      >
      <p>
        Vous vous êtes connecté avec un mot de passe temporaire. Veuillez en choisir un nouveau
        ci-dessous avant de continuer.
      </p>
    </div>
  {/if}
  <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b py-12 md:grid-cols-1 lg:grid-cols-3">
    <div>
      <h2 class="font-semibold">Mot de passe</h2>
      <p class="mt-1 text-sm/6 text-foreground-discreet">
        {#if data.userHasPassword}
          Pour changer votre mot de passe, veuillez entrer votre mot de passe actuel et ensuite
          fournir un nouveau mot de passe.
        {:else}
          Pour associer un mot de passe à votre compte, veuillez entrer un nouveau mot de passe.
        {/if}
      </p>
    </div>
    {#if data.userHasPassword}
      <ResetPasswordForm class="flex flex-col gap-4 md:col-span-2" data={data.resetPasswordForm} />
    {:else}
      <SetPasswordForm class="flex flex-col gap-4 md:col-span-2" data={data.setPasswordForm} />
    {/if}
  </div>
  <div
    class="grid grid-cols-1 items-center gap-x-8 gap-y-10 border-b py-12 md:grid-cols-1 lg:grid-cols-3"
  >
    <div>
      <h2 class="font-semibold">Compte Discord</h2>
      <p class="mt-1 text-sm/6 text-foreground-discreet">
        {#if data.user?.discordUser}
          Votre compte est lié à Discord ({data.user.discordUser.username}). Vous pouvez le délier{#if !data.userHasPassword}
            une fois un mot de passe défini ci-dessus{/if}.
        {:else}
          Liez votre compte Discord pour pouvoir vous connecter avec, en plus de votre mot de passe.
        {/if}
      </p>
    </div>
    <div class="ml-auto flex w-full items-center gap-4 sm:w-max md:col-span-2">
      {#if discordError === 'already-linked'}
        <div
          class="rounded-md border border-destructive bg-destructive/10 p-2.5 text-sm text-destructive"
        >
          Ce compte Discord est déjà lié à un autre utilisateur.
        </div>
      {/if}
      {#if data.user?.discordUser}
        <UnlinkDiscordForm data={data.unlinkDiscordForm} disabled={!data.userHasPassword} />
      {:else}
        <DiscordButton href={resolve('/savant/settings/link-discord')} class="w-full sm:w-max">
          Lier mon compte Discord
        </DiscordButton>
      {/if}
    </div>
  </div>
  <div class="py-12">
    <div>
      <h2 class="font-semibold">Clés d'accès (passkeys)</h2>
      <p class="mt-1 text-sm/6 text-foreground-discreet">
        Ajoutez une clé d'accès (empreinte, visage, code de l'appareil...) pour vous connecter sans
        mot de passe.
      </p>
      {#if data.passkeys.length > 0}
        <DataTable columns={passkeyColumns} data={data.passkeys}>
          {#snippet beforeSearchSnippet()}
            <AddPasskeyForm>
              {#snippet children({ props })}
                <Button {...props} class="hidden sm:inline-flex">Ajouter une clé d'accès</Button>
                <Button {...props} size="icon" class="w-12 sm:hidden">
                  <Plus class="!size-5" />
                </Button>
              {/snippet}
            </AddPasskeyForm>
          {/snippet}
        </DataTable>
      {:else}
        <div class="flex flex-col gap-4 md:col-span-2">
          <div class="ml-auto">
            <AddPasskeyForm />
          </div>
        </div>
      {/if}
    </div>
  </div>
  <div class="py-12">
    <div>
      <h2 class="font-semibold">Sessions</h2>
      <p class="mt-1 text-sm/6 text-foreground-discreet">
        Gérez vos sessions actives et déconnectez-vous de celles que vous ne reconnaissez pas.
      </p>
    </div>
    <DataTable {columns} data={data.sessions} />
  </div>
</div>
