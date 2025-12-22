<script lang="ts">
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu';
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import { useSidebar } from '$lib/client/components/ui/sidebar';
  import { mode } from 'mode-watcher';
  import { generateColorPair } from '$lib/common/tools/color-mixer';
  import type { Course, SchoolSession } from '$lib/common/types/prisma-types';
  import { page } from '$app/state';
  import { ChevronsUpDown } from 'lucide-svelte';
  import { goto } from '$app/navigation';
  import { cn } from '$lib/client/utils';
  import { resolve } from '$app/paths';
  import { localizeSeason } from '$lib/common/tools/localizer';
  import { match } from 'arktype';

  type Props = {
    currentSession: SchoolSession;
    courses: Course[];
    selectedCourse: Course;
  };

  let { currentSession, courses, selectedCourse }: Props = $props();

  const sidebar = useSidebar();

  function generateCourseColors(course: Course) {
    return generateColorPair(`${course.name}-${course.group}`, mode.current);
  }

  function isOnCoursePage(path: string) {
    return path.match(/\/courses\/\d+/) != null;
  }

  function replaceCourseId(path: string, id: number) {
    return path.replace(/\/courses\/\d+/, `/courses/${id}`);
  }

  function makeCoursePath(id: number) {
    return `/savant/courses/${id}`;
  }

  function onCourseSelected(course: Course) {
    const currentPath = page.url.pathname;

    const pathname = isOnCoursePage(currentPath)
      ? replaceCourseId(currentPath, course.id)
      : makeCoursePath(course.id);

    goto(pathname + page.url.search);
  }
</script>

{#snippet courseItem(course: Course)}
  {@const { background, foreground } = generateCourseColors(course)}
  <div
    class="flex aspect-square size-8 items-center justify-center rounded-lg"
    style="background-color: {background}; color: {foreground};"
  >
    <div class="*:!size-5">
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      {@html course.icon}
    </div>
  </div>
  <div class="grid flex-1 text-left text-sm leading-tight">
    <span class="truncate font-semibold">{course.name}</span>
    <span class="truncate text-xs text-foreground-discreet">Groupe {course.group}</span>
  </div>
{/snippet}

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
            {@render courseItem(selectedCourse)}
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
        <DropdownMenu.Group>
          <DropdownMenu.Label class="text-xs text-foreground-discreet">
            {localizeSeason(currentSession.season)}
            {currentSession.year}
          </DropdownMenu.Label>
          <DropdownMenu.Separator />
          {#each courses as course (course)}
            <DropdownMenu.Item
              class={cn(
                'cursor-pointer gap-3 p-2',
                selectedCourse.id === course.id && 'bg-secondary'
              )}
              onSelect={() => onCourseSelected(course)}
            >
              {@render courseItem(course)}
            </DropdownMenu.Item>
          {/each}
          <DropdownMenu.Separator />
          <DropdownMenu.Item class="flex cursor-pointer justify-center">
            {#snippet child({ props })}
              <a href={resolve('/savant/courses')} {...props}>Voir tous mes cours</a>
            {/snippet}
          </DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </Sidebar.MenuItem>
</Sidebar.Menu>
