<script lang="ts">
  import PageTitle from '$lib/client/components/structure/page-title.svelte';
  import DataTable from '$lib/client/components/ui-custom/data-tables/data-table.svelte';
  import * as Select from '$lib/client/components/ui/select/index.js';
  import { displaySession } from '$lib/common/tools/localizer.js';
  import { makeColumns } from './columns.js';

  const { data } = $props();

  const columns = makeColumns();

  let selectedSessionId = $state<string>(data.currentSession?.id.toString() ?? '');
  let selectedSession = $derived(data.sessions.find((session) => session.id == +selectedSessionId));
  let courses = $derived(getCourses());

  function getCourses() {
    if (selectedSession) {
      return data.courses.filter((course) => course.schoolSessionId === selectedSession.id);
    }

    return data.courses;
  }
</script>

<PageTitle title="Liste des cours" subtitle="Voici la liste des cours auxquels vous avez accès." />
<DataTable {columns} data={courses} pagination={{ disabled: true }}>
  {#snippet afterSearchSnippet()}
    <Select.Root type="single" bind:value={selectedSessionId}>
      <Select.Trigger class="w-[180px]">
        {#if selectedSession}
          {displaySession(selectedSession)}
        {:else}
          Choisir une session
        {/if}
      </Select.Trigger>
      <Select.Content>
        {#each data.sessions as session (session)}
          <Select.Item value={session.id.toString()}>{displaySession(session)}</Select.Item>
        {/each}
      </Select.Content>
    </Select.Root>
  {/snippet}
</DataTable>
