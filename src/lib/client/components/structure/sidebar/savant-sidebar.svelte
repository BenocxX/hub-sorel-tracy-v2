<script lang="ts">
  import SidebarSwitcher from './sidebar-switcher.svelte';
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import SidebarUser from './sidebar-user.svelte';
  import SidebarContentAdmin from './sidebar-content-admin.svelte';
  import SidebarContentCourse from './sidebar-content-course.svelte';
  import { makeSidebarData, type SidebarChoice } from './sidebar-data.svelte';
  import type { Course } from '$lib/common/types/prisma-types';
  import { goto } from '$app/navigation';
  import { resolve } from '$app/paths';
  import { browser } from '$app/environment';
  import { page } from '$app/state';

  type CourseWithIncludes = Course<{ presentations: true }>;

  type Props = {
    user: App.PageData['user'];
    courses: CourseWithIncludes[];
  };

  const { user, courses }: Props = $props();

  const sidebarData = makeSidebarData(user, courses);

  let selectedCourse = $state<CourseWithIncludes | null>(null);

  function replaceIdInUrl(url: string, newId: string) {
    return url.replace(/(\/courses\/)(\d+)/, `$1${newId}`);
  }

  function onSidebarChange(sidebarChoice: SidebarChoice) {
    if (sidebarChoice.contentKey === 'course') {
      selectedCourse = sidebarChoice.meta as CourseWithIncludes;
      if (browser) {
        // goto(
        // resolve('/savant/courses/[courseId=number]', { courseId: selectedCourse.id.toString() })
        // page.url
        // );
        goto(replaceIdInUrl(page.url.pathname, selectedCourse.id.toString()) + page.url.search);
      }
    } else {
      selectedCourse = null;
    }
  }
</script>

<Sidebar.Root collapsible="icon">
  <Sidebar.Header>
    {#if user?.role === 'Admin' || courses.length > 0}
      <SidebarSwitcher
        sections={sidebarData.headerSections.filter((section) => !section.isHidden)}
        {onSidebarChange}
      />
    {/if}
  </Sidebar.Header>
  <Sidebar.Content>
    {#if selectedCourse}
      <SidebarContentCourse course={selectedCourse} />
    {:else if user?.role === 'Admin'}
      <SidebarContentAdmin items={sidebarData.adminSidebar} />
    {/if}
  </Sidebar.Content>
  <Sidebar.Footer>
    <SidebarUser user={user!} />
  </Sidebar.Footer>
</Sidebar.Root>
