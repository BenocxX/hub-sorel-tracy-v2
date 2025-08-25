<script lang="ts">
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import { isActive, type SidebarItem } from './sidebar-data.svelte';
  import SidebarCollapsibleMenuButton from './components/sidebar-collapsible-menu-button.svelte';
  import type { Component } from 'svelte';

  let { items }: { items: SidebarItem[] } = $props();
</script>

{#snippet itemLink(
  item: { url: string; title: string; icon?: Component },
  props: Record<string, unknown>
)}
  <a href={item.url} {...props}>
    {#if item.icon}
      <item.icon />
    {/if}
    <span>{item.title}</span>
  </a>
{/snippet}

<Sidebar.Group>
  <Sidebar.GroupLabel>Gestion</Sidebar.GroupLabel>
  <Sidebar.Menu>
    {#each items as item (item.title)}
      {#if item.items}
        <SidebarCollapsibleMenuButton
          items={item.items}
          isActive={isActive(item.url)}
          tooltip={item.title}
        >
          {#snippet trigger({ props })}
            {@render itemLink(item, props)}
          {/snippet}
          {#snippet content(subItem)}
            <Sidebar.MenuSubButton isActive={isActive(subItem.url)}>
              {#snippet child({ props })}
                {@render itemLink(subItem, props)}
              {/snippet}
            </Sidebar.MenuSubButton>
          {/snippet}
        </SidebarCollapsibleMenuButton>
      {:else}
        <Sidebar.MenuItem>
          <Sidebar.MenuButton isActive={isActive(item.url)}>
            {#snippet child({ props })}
              {@render itemLink(item, props)}
            {/snippet}
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      {/if}
    {/each}
  </Sidebar.Menu>
</Sidebar.Group>
