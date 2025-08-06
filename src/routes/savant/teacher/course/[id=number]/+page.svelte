<script lang="ts">
  import AddUserToCourseForm from '$lib/client/components/structure/forms/teacher/add-user-to-course-form.svelte';
  import PageTitle from '$lib/client/components/structure/page-title.svelte';
  import DataTable from '$lib/client/components/ui-custom/data-tables/data-table.svelte';
  import * as Dialog from '$lib/client/components/ui/dialog/index.js';
  import { displaySession } from '$lib/common/tools/localizer.js';
  import { makeColumns } from './columns.js';

  const { data } = $props();
  const columns = makeColumns();
</script>

<PageTitle title={data.course.name} subtitle={displaySession(data.course.schoolSession)} />
<DataTable {columns} data={data.courseUsers}>
  {#snippet createDialogFormSnippet()}
    <Dialog.Header>
      <Dialog.Title>Ajouter un utilisateur au cours</Dialog.Title>
      <Dialog.Description class="text-foreground-discreet">
        La soumission de ce formulaire va ajouter un utilisateur à ce cours.
      </Dialog.Description>
    </Dialog.Header>
    <AddUserToCourseForm course={data.course} users={data.users} data={data.addUserToCourseForm} />
  {/snippet}
</DataTable>
