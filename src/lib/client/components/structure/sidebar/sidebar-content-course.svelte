<script lang="ts">
  import type { Course } from '$lib/common/types/prisma-types';
  import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import * as Collapsible from '$lib/client/components/ui/collapsible';
  import { page } from '$app/state';
  import { ContactRound, Presentation } from 'lucide-svelte';
  import { Button } from '../../ui/button';
  import { formatPresentationUrl } from '$lib/common/tools/format';
  import { resolve } from '$app/paths';

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
          <Sidebar.MenuButton {...props} class="pr-0">
            <a
              href={resolve('/savant/courses/[courseId=number]', {
                courseId: course.id.toString(),
              })}
              class="flex flex-1 items-center gap-2"
            >
              <Presentation class="size-4" />
              <span>Présentations</span>
            </a>
            {#snippet tooltipContent()}
              Présentations
            {/snippet}
            <Collapsible.Trigger>
              {#snippet child({ props })}
                <Button variant="ghost" size="icon-sm" {...props}>
                  <ChevronRightIcon
                    class="size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                  />
                </Button>
              {/snippet}
            </Collapsible.Trigger>
          </Sidebar.MenuButton>
          <Collapsible.Content>
            <Sidebar.MenuSub>
              {#each course.presentations as presentation (presentation.id)}
                <Sidebar.MenuSubItem>
                  <Sidebar.MenuSubButton
                    isActive={page.url.pathname.includes(formatPresentationUrl(presentation))}
                  >
                    {#snippet child({ props })}
                      <a
                        href={presentation.url
                          ? presentation.url
                          : formatPresentationUrl(presentation)}
                        target={presentation.url ? '_blank' : '_self'}
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

{#if page.data.user?.role !== 'Student'}
  <Sidebar.Group>
    <Sidebar.GroupLabel>Administration</Sidebar.GroupLabel>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton>
          {#snippet child({ props })}
            <a
              href={`${resolve('/savant/teacher/courses/[id=number]', { id: course.id.toString() })}?tab=students`}
              {...props}
            >
              <ContactRound />
              Étudiants
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton>
          {#snippet child({ props })}
            <a
              href={`${resolve('/savant/teacher/courses/[id=number]', { id: course.id.toString() })}?tab=presentations`}
              {...props}
            >
              <Presentation />
              Présentations
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Group>
{/if}
