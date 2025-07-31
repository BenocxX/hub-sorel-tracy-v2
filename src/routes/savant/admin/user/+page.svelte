<script lang="ts">
  import { columns } from '$lib/client/components/ui-custom/data-tables/users/columns.js';
  import DataTable from '$lib/client/components/ui-custom/data-tables/users/data-table.svelte';

  const { data } = $props();
</script>

<DataTable data={data.users} {columns} />
