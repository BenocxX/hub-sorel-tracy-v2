<script lang="ts">
  import SidebarSwitcher from './sidebar-switcher.svelte';
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import SidebarUser from './sidebar-user.svelte';
  import { page } from '$app/state';
  import SidebarContentAdmin from './sidebar-content-admin.svelte';
  import SidebarContentCourse from './sidebar-content-course.svelte';
  import { makeSidebarData } from './sidebar-data.svelte';

  const user = page.data.user;

  const defaultContentKey = user?.role === 'Admin' ? 'admin' : 'course';
  let selectedContentKey = $state<'course' | 'admin'>(defaultContentKey);

  const sidebarData = makeSidebarData(user);
</script>

<Sidebar.Root collapsible="icon">
  <Sidebar.Header>
    <SidebarSwitcher
      {defaultContentKey}
      sections={sidebarData.headerSections.filter((section) => !section.isHidden)}
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
    <SidebarUser user={user!} />
  </Sidebar.Footer>
</Sidebar.Root>
