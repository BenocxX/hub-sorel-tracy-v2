<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/state';
  import ModifyCourseForm from '$lib/client/components/structure/forms/admin/course/modify-course-form.svelte';
  import AddUserToCourseForm from '$lib/client/components/structure/forms/teacher/course/add-user-to-course-form.svelte';
  import CreatePresentationForm from '$lib/client/components/structure/forms/teacher/presentation/create-presentation-form.svelte';
  import PageTitle from '$lib/client/components/structure/page-title.svelte';
  import DataTable from '$lib/client/components/ui-custom/data-tables/data-table.svelte';
  import { Button } from '$lib/client/components/ui/button/index.js';
  import * as Dialog from '$lib/client/components/ui/dialog/index.js';
  import * as Tabs from '$lib/client/components/ui/tabs/index.js';
  import { displaySession } from '$lib/common/tools/localizer.js';
  import { makePresentationColumns, makeUserColumns } from './columns.js';

  const { data } = $props();
  const userColumns = makeUserColumns({
    course: data.course,
    removeUserFromCourse: data.removeUserFromCourse,
  });

  const presentationColumns = makePresentationColumns({
    course: data.course,
    modifyPresentation: data.modifyPresentationForm,
    togglePresentationLocked: data.togglePresentationLockedForm,
    deletePresentation: data.deletePresentation,
  });

  function getUsersNotInCourse() {
    return data.users.filter(
      (user) => !data.courseUsers.some((courseUser) => courseUser.id === user.id)
    );
  }
</script>

<PageTitle title={data.course.name} subtitle={displaySession(data.course.schoolSession)} />
<Tabs.Root
  value={page.url.searchParams.get('tab') ?? 'students'}
  onValueChange={(value) => goto(`?tab=${value}`)}
>
  <Tabs.List>
    <Tabs.Trigger value="students">Étudiants</Tabs.Trigger>
    <Tabs.Trigger value="teachers">Enseignants</Tabs.Trigger>
    <Tabs.Trigger value="presentations">Présentations</Tabs.Trigger>
  </Tabs.List>
  <Dialog.Root>
    <Dialog.Trigger>
      {#snippet child({ props })}
        <Button variant="outline" class="ml-2" {...props}>Modifier</Button>
      {/snippet}
    </Dialog.Trigger>
    <Dialog.Content>
      <Dialog.Header>
        <Dialog.Title>Modification du cours</Dialog.Title>
        <Dialog.Description>
          La soumission de ce formulaire va modifier le cours dans le système.
        </Dialog.Description>
        <ModifyCourseForm data={data.modifyCourseForm} />
      </Dialog.Header>
    </Dialog.Content>
  </Dialog.Root>
  <Tabs.Content value="students">
    <DataTable
      columns={userColumns}
      data={data.courseUsers.filter((user) => user.role === 'Student')}
    >
      {#snippet createDialogFormSnippet()}
        <Dialog.Header>
          <Dialog.Title>Ajouter un utilisateur au cours</Dialog.Title>
          <Dialog.Description class="text-foreground-discreet">
            La soumission de ce formulaire va ajouter un utilisateur à ce cours.
          </Dialog.Description>
        </Dialog.Header>
        <AddUserToCourseForm users={getUsersNotInCourse()} data={data.addUserToCourseForm} />
      {/snippet}
    </DataTable>
  </Tabs.Content>
  <Tabs.Content value="teachers">
    <DataTable
      columns={userColumns}
      data={data.courseUsers.filter((user) => user.role !== 'Student')}
    >
      {#snippet createDialogFormSnippet()}
        <Dialog.Header>
          <Dialog.Title>Ajouter un utilisateur au cours</Dialog.Title>
          <Dialog.Description class="text-foreground-discreet">
            La soumission de ce formulaire va ajouter un utilisateur à ce cours.
          </Dialog.Description>
        </Dialog.Header>
        <AddUserToCourseForm users={getUsersNotInCourse()} data={data.addUserToCourseForm} />
      {/snippet}
    </DataTable>
  </Tabs.Content>
  <Tabs.Content value="presentations">
    <DataTable columns={presentationColumns} data={data.course.presentations}>
      {#snippet createDialogFormSnippet()}
        <Dialog.Header>
          <Dialog.Title>Ajouter une présentation au cours</Dialog.Title>
          <Dialog.Description class="text-foreground-discreet">
            La soumission de ce formulaire va ajouter une nouvelle présentation à ce cours.
          </Dialog.Description>
        </Dialog.Header>
        <CreatePresentationForm data={data.createPresentation} />
      {/snippet}
    </DataTable>
  </Tabs.Content>
</Tabs.Root>
