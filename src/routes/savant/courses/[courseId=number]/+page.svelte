<script lang="ts">
  import PageTitle from '$lib/client/components/structure/page-title.svelte';
  import DataTable from '$lib/client/components/ui-custom/data-tables/data-table.svelte';
  import { displaySession } from '$lib/common/tools/localizer.js';
  import { makeColumns } from './columns.js';

  const { data } = $props();

  const columns = makeColumns();
</script>

<PageTitle title={data.course.name} subtitle={displaySession(data.course.schoolSession)} />
<DataTable {columns} data={data.course.presentations} />
