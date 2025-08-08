<script lang="ts">
  import type { Course } from '$lib/common/types/prisma-types';
  import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import * as Collapsible from '$lib/client/components/ui/collapsible';
  import { page } from '$app/state';

  type Props = {
    course: Course<{ presentations: true }>;
  };

  const { course }: Props = $props();
</script>

<Sidebar.Group>
  <Sidebar.GroupLabel>Informations</Sidebar.GroupLabel>
  <Sidebar.Menu>
    <Collapsible.Root open={true} class="group/collapsible">
      {#snippet child({ props })}
        <Sidebar.MenuItem {...props}>
          <Collapsible.Trigger>
            {#snippet child({ props })}
              <Sidebar.MenuButton {...props}>
                {#snippet tooltipContent()}
                  Présentations
                {/snippet}
                <span>Présentations</span>
                <ChevronRightIcon
                  class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                />
              </Sidebar.MenuButton>
            {/snippet}
          </Collapsible.Trigger>
          <Collapsible.Content>
            <Sidebar.MenuSub>
              {#each course.presentations as presentation (presentation.id)}
                <Sidebar.MenuSubItem>
                  <Sidebar.MenuSubButton isActive={presentation.url === page.url.pathname}>
                    {#snippet child({ props })}
                      <a
                        href={presentation.url}
                        target={presentation.isExternal ? '_blank' : '_self'}
                        {...props}
                      >
                        <span>{presentation.title}</span>
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
  </Sidebar.Menu>
</Sidebar.Group>
