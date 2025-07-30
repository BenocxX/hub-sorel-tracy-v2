<script lang="ts">
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu';
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import { useSidebar } from '$lib/client/components/ui/sidebar';
  import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';

  type SidebarSection = {
    name: string;
    sidebars: Sidebar[];
  };

  type Sidebar = {
    name: string;
    subName: string;
    icon: string;
  };

  let { sidebarsSections }: { sidebarsSections: SidebarSection[] } = $props();
  const sidebar = useSidebar();

  let activeSidebar = $state(sidebarsSections[0].sidebars[0]);
</script>

<Sidebar.Menu>
  <Sidebar.MenuItem>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {#snippet child({ props })}
          <Sidebar.MenuButton
            {...props}
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
            >
              <div class="*:size-5">
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                {@html activeSidebar.icon}
              </div>
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">
                {activeSidebar.name}
              </span>
              <span class="truncate text-xs">{activeSidebar.subName}</span>
            </div>
            <ChevronsUpDown class="ml-auto" />
          </Sidebar.MenuButton>
        {/snippet}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        class="w-[var(--bits-dropdown-menu-anchor-width)] min-w-56 rounded-lg"
        align="start"
        side={sidebar.isMobile ? 'bottom' : 'right'}
        sideOffset={4}
      >
        {#each sidebarsSections as sidebarSection, index (sidebarSection)}
          <DropdownMenu.Label class="text-xs text-muted-foreground">
            {sidebarSection.name}
          </DropdownMenu.Label>
          {#each sidebarSection.sidebars as sidebar (sidebar.name)}
            <DropdownMenu.Item onSelect={() => (activeSidebar = sidebar)} class="gap-2 p-2">
              <div class="flex size-6 items-center justify-center rounded-sm border">
                <div class="size-4 shrink">
                  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                  {@html sidebar.icon}
                </div>
              </div>
              {sidebar.name}
            </DropdownMenu.Item>
          {/each}
          {#if index < sidebarsSections.length - 1}
            <DropdownMenu.Separator />
          {/if}
        {/each}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </Sidebar.MenuItem>
</Sidebar.Menu>
