<script lang="ts">
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu';
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import { useSidebar } from '$lib/client/components/ui/sidebar';
  import { mode } from 'mode-watcher';
  import { generateColorPair } from '$lib/common/tools/color-mixer';
  import type { Course } from '$lib/common/types/prisma-types';
  import { page } from '$app/state';
  import { ChevronsUpDown } from 'lucide-svelte';
  import { goto } from '$app/navigation';
  import { cn } from '$lib/client/utils';

  type Props = { courses: Course[]; selectedCourse: Course };

  let { courses, selectedCourse }: Props = $props();

  const sidebar = useSidebar();

  function generateCourseColors(course: Course) {
    return generateColorPair(`${course.name}-${course.group}`, mode.current);
  }

  function onCourseSelected(course: Course) {
    const currentPath = page.url.pathname;

    const pathname = currentPath.includes('/courses')
      ? page.url.pathname.replace(/\/courses\/\d+/, `/courses/${course.id}`)
      : `/savant/courses/${course.id}`;

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
          <DropdownMenu.Label class="text-xs text-foreground-discreet">Cours</DropdownMenu.Label>
          <DropdownMenu.Separator />
          {#each courses as course (course)}
            <DropdownMenu.Item
              class={cn('gap-3 p-2', selectedCourse.id === course.id && 'bg-secondary')}
              onSelect={() => onCourseSelected(course)}
            >
              {@render courseItem(course)}
            </DropdownMenu.Item>
          {/each}
        </DropdownMenu.Group>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </Sidebar.MenuItem>
</Sidebar.Menu>
