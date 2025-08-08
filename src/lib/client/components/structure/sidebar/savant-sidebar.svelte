<script lang="ts">
  import SidebarSwitcher from './sidebar-switcher.svelte';
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import SidebarUser from './sidebar-user.svelte';
  import SidebarContentAdmin from './sidebar-content-admin.svelte';
  import SidebarContentCourse from './sidebar-content-course.svelte';
  import { makeSidebarData, type SidebarChoice } from './sidebar-data.svelte';
  import type { Course } from '$lib/common/types/prisma-types';

  type CourseWithIncludes = Course<{ presentations: true }>;

  type Props = {
    user: App.PageData['user'];
    courses: CourseWithIncludes[];
  };

  const { user, courses }: Props = $props();

  const defaultContentKey = user?.role === 'Admin' ? 'admin' : 'course';
  let selectedContentKey = $state<'course' | 'admin'>(defaultContentKey);
  let selectedCourse = $state<CourseWithIncludes | null>(null);

  const sidebarData = makeSidebarData(user, courses);

  function onSidebarChange(sidebarChoice: SidebarChoice) {
    selectedContentKey = sidebarChoice.contentKey;

    if (selectedContentKey === 'course') {
      selectedCourse = sidebarChoice.meta as CourseWithIncludes;
    } else {
      selectedCourse = null;
    }
  }
</script>

<Sidebar.Root collapsible="icon">
  <Sidebar.Header>
    <SidebarSwitcher
      {defaultContentKey}
      sections={sidebarData.headerSections.filter((section) => !section.isHidden)}
      {onSidebarChange}
    />
  </Sidebar.Header>
  <Sidebar.Content>
    {#if selectedContentKey === 'admin'}
      <SidebarContentAdmin items={sidebarData.adminSidebar} />
    {:else if selectedContentKey === 'course' && selectedCourse}
      <SidebarContentCourse course={selectedCourse} />
    {/if}
  </Sidebar.Content>
  <Sidebar.Footer>
    <SidebarUser user={user!} />
  </Sidebar.Footer>
</Sidebar.Root>
