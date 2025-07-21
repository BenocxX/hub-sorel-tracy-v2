<script lang="ts">
  import * as Sidebar from '$lib/components/ui/sidebar';
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
  import ClassSwitcher from './class-switcher.svelte';

  // This is sample data.
  const data = {
    user: {
      name: 'Mathis Côté',
      // email: 'm@example.com',
      // avatar: '/avatars/shadcn.jpg',
    },
    classes: [
      {
        name: 'Web 1',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
        plan: 'Enterprise',
      },
      {
        name: 'Web 3',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
        plan: 'Startup',
      },
      {
        name: 'POO 2',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-json-icon lucide-file-json"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"/><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/></svg>',
        plan: 'Free',
      },
    ],
  };
</script>

<Sidebar.Root collapsible="icon">
  <Sidebar.Header>
    <ClassSwitcher classes={data.classes} />
  </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.MenuButton>
      {#snippet child({ props })}
        <a href="/" {...props}> Home </a>
      {/snippet}
    </Sidebar.MenuButton>
  </Sidebar.Content>
  <Sidebar.Footer />
</Sidebar.Root>
