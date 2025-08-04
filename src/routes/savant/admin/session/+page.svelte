<script lang="ts">
  import DataTable from '$lib/client/components/ui-custom/data-tables/data-table.svelte';
  import { makeColumns } from './columns.js';

  const { data } = $props();
  const columns = makeColumns({ deleteSessionForm: data.deleteSessionForm });
</script>

<DataTable {columns} data={data.sessions} />
