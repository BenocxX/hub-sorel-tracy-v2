<script lang="ts">
  import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import * as Collapsible from '$lib/client/components/ui/collapsible';
  import type { SidebarItem } from './sidebar-data.svelte';

  let { items }: { items: SidebarItem[] } = $props();
</script>

<Sidebar.Group>
  <Sidebar.GroupLabel>Gestion</Sidebar.GroupLabel>
  <Sidebar.Menu>
    {#each items as item (item.title)}
      <Collapsible.Root open={item.isActive} class="group/collapsible">
        {#snippet child({ props })}
          <Sidebar.MenuItem {...props}>
            <Collapsible.Trigger>
              {#snippet child({ props })}
                <Sidebar.MenuButton {...props}>
                  {#snippet tooltipContent()}
                    {item.title}
                  {/snippet}
                  {#if item.icon}
                    <item.icon />
                  {/if}
                  <span>{item.title}</span>
                  <ChevronRightIcon
                    class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                  />
                </Sidebar.MenuButton>
              {/snippet}
            </Collapsible.Trigger>
            <Collapsible.Content>
              <Sidebar.MenuSub>
                {#each item.items ?? [] as subItem (subItem.title)}
                  <Sidebar.MenuSubItem>
                    <Sidebar.MenuSubButton>
                      {#snippet child({ props })}
                        <a href={subItem.url} {...props}>
                          <span>{subItem.title}</span>
                        </a>
                      {/snippet}
                    </Sidebar.MenuSubButton>
                  </Sidebar.MenuSubItem>
                {/each}
              </Sidebar.MenuSub>
            </Collapsible.Content>
          </Sidebar.MenuItem>
        {/snippet}
      </Collapsible.Root>
    {/each}
  </Sidebar.Menu>
</Sidebar.Group>
