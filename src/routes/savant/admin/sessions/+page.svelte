<script lang="ts">
  import DataTable from '$lib/client/components/ui-custom/data-tables/data-table.svelte';
  import { makeColumns } from './columns.js';
  import * as Dialog from '$lib/client/components/ui/dialog/index.js';
  import CreateSessionForm from '$lib/client/components/structure/forms/admin/session/create-session-form.svelte';
  import PageTitle from '$lib/client/components/structure/page-title.svelte';

  const { data } = $props();
  const columns = makeColumns({
    deleteSessionForm: data.deleteSessionForm,
    toggleCurrentSessionForm: data.toggleCurrentSessionForm,
  });
</script>

<PageTitle
  title="Liste des sessions"
  subtitle="Gérez les différentes sessions."
  class="mb-4 border-b-0 pb-0"
/>
<DataTable {columns} data={data.sessions}>
  {#snippet createDialogFormSnippet()}
    <Dialog.Header>
      <Dialog.Title>Créer une nouvelle session</Dialog.Title>
      <Dialog.Description class="text-foreground-discreet">
        La soumission de ce formulaire va créer une nouvelle session scolaire dans le système.
      </Dialog.Description>
    </Dialog.Header>
    <CreateSessionForm data={data.createSessionForm} />
  {/snippet}
</DataTable>
