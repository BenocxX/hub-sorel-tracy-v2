<script lang="ts">
  import { makeColumns } from '$lib/client/components/ui-custom/data-tables/users/columns.js';
  import DataTable from '$lib/client/components/ui-custom/data-tables/data-table.svelte';

  const { data } = $props();
  const columns = makeColumns({
    deleteUserForm: data.deleteUserForm,
    changeRoleForm: data.changeRoleForm,
  });
</script>

<DataTable {columns} data={data.users} />
