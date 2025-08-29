<script lang="ts">
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import SidebarUser from './sidebar-user.svelte';
  import type { Course } from '$lib/common/types/prisma-types';
  import SidebarSwitcher from './sidebar-switcher.svelte';
  import { makeSidebarSections } from './sidebar-data';
  import { page } from '$app/state';
  import SidebarCollapsibleMenuButton from './components/sidebar-collapsible-menu-button.svelte';

  type Props = {
    user: App.PageData['user'];
    courses: Course<{ presentations: true }>[];
  };

  const { user, courses }: Props = $props();

  const selectedCourse = $derived(
    courses.find(({ id }) => id.toString() === page.params.courseId) ?? courses[0]
  );

  const sidebarSections = $derived(makeSidebarSections({ user, selectedCourse }));

  function isActive(url: string): boolean {
    return url === page.url.pathname + page.url.search;
  }
</script>

<Sidebar.Root collapsible="icon">
  <Sidebar.Header>
    <SidebarSwitcher {courses} {selectedCourse} />
  </Sidebar.Header>
  <Sidebar.Content>
    {#each sidebarSections.filter((section) => !section.isHidden) as section (section)}
      <Sidebar.Group>
        <Sidebar.GroupLabel>{section.label}</Sidebar.GroupLabel>
        <Sidebar.Menu>
          {#each section.items.filter((item) => !item.isHidden) as sectionItem (sectionItem)}
            {#if sectionItem.type === 'link'}
              <Sidebar.MenuItem>
                <Sidebar.MenuButton isActive={isActive(sectionItem.url)}>
                  {#snippet child({ props })}
                    <a href={sectionItem.url} {...props}>
                      {#if sectionItem.icon}<sectionItem.icon />{/if}
                      <span>{sectionItem.label}</span>
                    </a>
                  {/snippet}
                </Sidebar.MenuButton>
              </Sidebar.MenuItem>
            {:else if sectionItem.type === 'collapsible'}
              <SidebarCollapsibleMenuButton
                items={sectionItem.items}
                isActive={isActive(sectionItem.url ?? '')}
                tooltip={sectionItem.label}
              >
                {#snippet trigger({ props })}
                  <a href={sectionItem.url} {...props}>
                    {#if sectionItem.icon}<sectionItem.icon />{/if}
                    <span>{sectionItem.label}</span>
                  </a>
                {/snippet}
                {#snippet content(item)}
                  <Sidebar.MenuSubButton isActive={isActive(item.url)}>
                    {#snippet child({ props })}
                      <a href={item.url} target={item.target} {...props}>
                        <span>{item.label}</span>
                      </a>
                    {/snippet}
                  </Sidebar.MenuSubButton>
                {/snippet}
              </SidebarCollapsibleMenuButton>
            {:else if sectionItem.type === 'dropdown'}
              <!-- TODO: Make a sidebar menu button dropdown component -->
            {/if}
          {/each}
        </Sidebar.Menu>
      </Sidebar.Group>
    {/each}
  </Sidebar.Content>
  <Sidebar.Footer>
    <SidebarUser user={user!} />
  </Sidebar.Footer>
</Sidebar.Root>
