<script lang="ts">
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import SidebarUser from './sidebar-user.svelte';
  import type { Course } from '$lib/common/types/prisma-types';
  import SidebarSwitcher from './sidebar-switcher.svelte';

  type Props = {
    user: App.PageData['user'];
    courses: Course<{ presentations: true }>[];
  };

  const { user, courses }: Props = $props();
</script>

<Sidebar.Root collapsible="icon">
  <Sidebar.Header>
    <SidebarSwitcher {courses} />
  </Sidebar.Header>
  <Sidebar.Content></Sidebar.Content>
  <Sidebar.Footer>
    <SidebarUser user={user!} />
  </Sidebar.Footer>
</Sidebar.Root>
