<script lang="ts">
  import PageTitle from '$lib/client/components/structure/page-title.svelte';
  import DataTable from '$lib/client/components/ui-custom/data-tables/data-table.svelte';
  import { makeColumns } from './columns.js';

  const { data } = $props();

  const columns = makeColumns();
</script>

<PageTitle title="Liste des cours" subtitle="Voici la liste des cours auxquels vous avez accès." />
<DataTable {columns} data={data.courses} pagination={{ disabled: true }} />
