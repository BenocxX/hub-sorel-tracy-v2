<script lang="ts">
  import { makeColumns } from './columns.js';
  import DataTable from '$lib/client/components/ui-custom/data-tables/data-table.svelte';
  import PageTitle from '$lib/client/components/structure/page-title.svelte';
  import { page } from '$app/state';
  import { roleSchema } from '$lib/common/schemas/prisma-schema.js';
  import { localizeRole } from '$lib/common/tools/localizer.js';

  const { data } = $props();
  const columns = makeColumns({
    deleteUserForm: data.deleteUserForm,
    changeRoleForm: data.changeRoleForm,
  });

  let localizedRole = $derived.by(() => {
    const result = roleSchema.safeParse(page.url.searchParams.get('role'));
    if (result.success) {
      return localizeRole(result.data).toLowerCase();
    }

    return 'utilisateurs';
  });
</script>

<PageTitle
  title={`Liste des ${localizedRole}`}
  subtitle={`Gérez les différents ${localizedRole} inscrits au site.`}
  class="mb-4 border-b-0 pb-0"
/>
<DataTable {columns} data={data.users} />
