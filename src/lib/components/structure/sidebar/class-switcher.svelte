<script lang="ts">
  import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  import * as Sidebar from '$lib/components/ui/sidebar';
  import { useSidebar } from '$lib/components/ui/sidebar';
  import ChevronsUpDown from '@lucide/svelte/icons/chevrons-up-down';
  // import Plus from '@lucide/svelte/icons/plus';

  let { classes }: { classes: { name: string; icon: string; plan: string }[] } = $props();
  const sidebar = useSidebar();

  let activeClass = $state(classes[0]);
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
              <div class="size-4">
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                {@html activeClass.icon}
              </div>
            </div>
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">
                {activeClass.name}
              </span>
              <span class="truncate text-xs">{activeClass.plan}</span>
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
        <DropdownMenu.Label class="text-xs text-muted-foreground">Cours</DropdownMenu.Label>
        {#each classes as course, index (course.name)}
          <DropdownMenu.Item onSelect={() => (activeClass = course)} class="gap-2 p-2">
            <div class="flex size-6 items-center justify-center rounded-sm border">
              <div class="size-4 shrink">
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                {@html course.icon}
              </div>
            </div>
            {course.name}
            <DropdownMenu.Shortcut>⌘{index + 1}</DropdownMenu.Shortcut>
          </DropdownMenu.Item>
        {/each}
        <DropdownMenu.Separator />
        <!-- <DropdownMenu.Item class="gap-2 p-2">
          <div class="flex size-6 items-center justify-center rounded-md border bg-background">
            <Plus class="size-4" />
          </div>
          <div class="font-medium text-muted-foreground">Add team</div>
        </DropdownMenu.Item> -->
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </Sidebar.MenuItem>
</Sidebar.Menu>
