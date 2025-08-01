<script lang="ts">
  import { columns } from '$lib/client/components/ui-custom/data-tables/users/columns.js';
  import DataTable from '$lib/client/components/ui-custom/data-tables/data-table.svelte';

  const { data } = $props();
</script>

<DataTable
  {columns}
  data={data.users}
  searchBar={{ placeholder: "Filtre par nom d'utilisateur...", column: 'username' }}
/>
