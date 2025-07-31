<script lang="ts">
  import SidebarSwitcher from './sidebar-switcher.svelte';
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import SidebarUser from './sidebar-user.svelte';
  import { page } from '$app/state';
  import SidebarContentAdmin from './sidebar-content-admin.svelte';
  import SidebarContentCourse from './sidebar-content-course.svelte';
  import { makeSidebarData } from './sidebar-data.svelte';

  let selectedContentKey = $state<'course' | 'admin'>('course');

  const sidebarData = makeSidebarData(page.data.user);
</script>

<Sidebar.Root collapsible="icon">
  <Sidebar.Header>
    <SidebarSwitcher
      sections={sidebarData.headerSections}
      onSidebarChange={(contentKey) => (selectedContentKey = contentKey)}
    />
  </Sidebar.Header>
  <Sidebar.Content>
    {#if selectedContentKey === 'admin'}
      <SidebarContentAdmin items={sidebarData.adminSidebar} />
    {:else if selectedContentKey === 'course'}
      <SidebarContentCourse />
    {/if}
  </Sidebar.Content>
  <Sidebar.Footer>
    <SidebarUser user={page.data.user!} />
  </Sidebar.Footer>
</Sidebar.Root>
