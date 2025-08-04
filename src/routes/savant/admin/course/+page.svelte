<script lang="ts">
  import DataTable from '$lib/client/components/ui-custom/data-tables/data-table.svelte';
  import { makeColumns } from './columns.js';
  import * as Dialog from '$lib/client/components/ui/dialog/index.js';
  import CreateCourseForm from '$lib/client/components/structure/forms/admin/course/create-course-form.svelte';

  const { data } = $props();
  const columns = makeColumns({ deleteCourseForm: data.deleteCourseForm });
</script>

<DataTable {columns} data={data.courses}>
  {#snippet createDialogFormSnippet()}
    <Dialog.Header>
      <Dialog.Title>Créer un nouveau cours</Dialog.Title>
      <Dialog.Description class="text-foreground-discreet">
        La soumission de ce formulaire va créer un nouveau cours dans le système. La session choisi
        lui sera associée.
      </Dialog.Description>
    </Dialog.Header>
    <CreateCourseForm sessions={data.sessions} data={data.createCourseForm} />
  {/snippet}
</DataTable>
