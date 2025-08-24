<script lang="ts">
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu';
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import { useSidebar } from '$lib/client/components/ui/sidebar';
  import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';
  import type { HeaderSection, SidebarChoice } from './sidebar-data.svelte';
  import { preferences } from '$lib/client/local-storage.svelte';
  import { browser } from '$app/environment';
  import { mode } from 'mode-watcher';
  import { generateColorPair } from '$lib/common/tools/color-mixer';

  type Props = {
    onSidebarChange: (sidebarChoice: SidebarChoice) => void;
    sections: HeaderSection[];
  };

  let { onSidebarChange, sections }: Props = $props();
  const sidebar = useSidebar();

  const lastSelectedSidebarId = preferences.lastSelectedSidebarId();

  let activeSidebar = $derived(
    sections
      .flatMap((section) => section.headerSidebarChoice)
      .find((choice) => choice.id === lastSelectedSidebarId.value) ??
      sections[0].headerSidebarChoice[0] ??
      sections[1].headerSidebarChoice[0]
  );

  // Quick work around, we should actually use a svelte bind:value to bind the current active sidebar from the parent.
  // svelte-ignore state_referenced_locally
  onSidebarChange(activeSidebar);
</script>

<Sidebar.Menu>
  <Sidebar.MenuItem>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        {#snippet child({ props })}
          {@const { background, foreground } = generateColorPair(
            activeSidebar.colorSeed,
            mode.current === 'dark'
          )}
          <Sidebar.MenuButton
            {...props}
            size="lg"
            class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <div
              class="flex aspect-square size-8 items-center justify-center rounded-lg"
              style="background-color: {background}; color: {foreground};"
            >
              <div class="*:!size-5">
                {#if browser}
                  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                  {@html activeSidebar.icon}
                {/if}
              </div>
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">
                {activeSidebar.name}
              </span>
              <span class="truncate text-xs text-foreground-discreet">{activeSidebar.subName}</span>
            </div>
            <ChevronsUpDown class="ml-auto" />
          </Sidebar.MenuButton>
        {/snippet}
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        class="min-w-56 max-w-96 rounded-lg"
        align="start"
        side={sidebar.isMobile ? 'bottom' : 'right'}
        sideOffset={4}
      >
        {#each sections as section, index (section)}
          <DropdownMenu.Label class="text-xs text-foreground-discreet">
            {section.name}
          </DropdownMenu.Label>
          {#each section.headerSidebarChoice as sidebar (sidebar.id)}
            {@const { background, foreground } = generateColorPair(
              sidebar.colorSeed,
              mode.current === 'dark'
            )}
            <DropdownMenu.Item
              onSelect={() => {
                lastSelectedSidebarId.value = sidebar.id;
                activeSidebar = sidebar;
                onSidebarChange(sidebar);
              }}
              class="gap-3 p-2"
            >
              <!-- class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground" -->
              <div
                class="flex aspect-square size-8 items-center justify-center rounded-lg"
                style="background-color: {background}; color: {foreground};"
              >
                <div class="*:!size-5">
                  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                  {@html sidebar.icon}
                </div>
              </div>
              <div class="grid flex-1 text-left text-sm leading-tight">
                <span class="truncate font-semibold">{sidebar.name}</span>
                <span class="truncate text-xs text-foreground-discreet">{sidebar.subName}</span>
              </div>
            </DropdownMenu.Item>
          {/each}
          {#if index < sections.length - 1}
            <DropdownMenu.Separator />
          {/if}
        {/each}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </Sidebar.MenuItem>
</Sidebar.Menu>
