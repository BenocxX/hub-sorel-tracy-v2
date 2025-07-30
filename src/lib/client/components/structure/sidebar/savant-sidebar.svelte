<script lang="ts">
  import SidebarSwitcher from './sidebar-switcher.svelte';
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import SidebarUser from './sidebar-user.svelte';
  import { page } from '$app/state';

  const data = {
    user: page.data.user,
    sidebars: [
      {
        name: 'Cours',
        sidebars: [
          {
            name: 'Web 1',
            subName: 'Développement web #1',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
          },
          {
            name: 'Web 3',
            subName: 'Développement web #2',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
          },
          {
            name: 'POO 2',
            subName: 'Programmation orienté objet 2',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-json-icon lucide-file-json"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"/><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/></svg>',
          },
        ],
      },
      {
        name: 'Autres',
        sidebars: [
          {
            name: 'Admin',
            subName: 'Administration',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
          },
        ],
      },
    ],
  };
</script>

<Sidebar.Root collapsible="icon">
  <Sidebar.Header>
    <SidebarSwitcher sidebarsSections={data.sidebars} />
  </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.MenuButton>
      {#snippet child({ props })}
        <a href="/" {...props}> Home </a>
      {/snippet}
    </Sidebar.MenuButton>
  </Sidebar.Content>
  <Sidebar.Footer>
    <SidebarUser user={page.data.user!} />
  </Sidebar.Footer>
</Sidebar.Root>
