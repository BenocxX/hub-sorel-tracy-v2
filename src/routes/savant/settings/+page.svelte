<script>
  import ResetPasswordForm from '$lib/client/components/structure/forms/settings/reset-password-form.svelte';
  import SetPasswordForm from '$lib/client/components/structure/forms/settings/set-password-form.svelte';
  import UpdateNamesForm from '$lib/client/components/structure/forms/settings/update-names-form.svelte';
  import PageTitle from '$lib/client/components/structure/page-title.svelte';
  import DataTable from '$lib/client/components/ui-custom/data-tables/data-table.svelte';
  import { makeColumns } from './columns.js';

  const { data } = $props();

  const columns = makeColumns({
    deleteForm: data.deleteSessionForm,
    currentSessionPublicId: data.currentSessionPublicId,
  });
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
