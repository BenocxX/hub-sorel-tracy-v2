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

  const sidebarData = makeSidebarData(user, courses);

  let selectedCourse = $state<CourseWithIncludes | null>(null);

  function onSidebarChange(sidebarChoice: SidebarChoice) {
    if (sidebarChoice.contentKey === 'course') {
      selectedCourse = sidebarChoice.meta as CourseWithIncludes;
    } else {
      selectedCourse = null;
    }
  }
</script>

<Sidebar.Root collapsible="icon">
  <Sidebar.Header>
    <SidebarSwitcher
      sections={sidebarData.headerSections.filter((section) => !section.isHidden)}
      {onSidebarChange}
    />
  </Sidebar.Header>
  <Sidebar.Content>
    {#if selectedCourse}
      <SidebarContentCourse course={selectedCourse} />
    {:else}
      <SidebarContentAdmin items={sidebarData.adminSidebar} />
    {/if}
  </Sidebar.Content>
  <Sidebar.Footer>
    <SidebarUser user={user!} />
  </Sidebar.Footer>
</Sidebar.Root>
