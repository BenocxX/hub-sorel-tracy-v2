<script lang="ts">
  import type { Course } from '$lib/common/types/prisma-types';
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import { page } from '$app/state';
  import { ContactRound, GraduationCap, Presentation } from 'lucide-svelte';
  import { formatPresentationUrl } from '$lib/common/tools/format';
  import { resolve } from '$app/paths';
  import SidebarCollapsibleMenuButton from './components/sidebar-collapsible-menu-button.svelte';
  import { isActive } from './sidebar-data.svelte';

  type Props = {
    course: Course<{ presentations: true }>;
  };

  const { course }: Props = $props();

  const courseHref = $derived(
    resolve('/savant/courses/[courseId=number]', {
      courseId: course.id.toString(),
    })
  );

  const teacherCourseHref = resolve('/savant/teacher/courses/[id=number]', {
    id: course.id.toString(),
  });
  const studentTabHref = `${teacherCourseHref}?tab=students`;
  const teacherTabHref = `${teacherCourseHref}?tab=teachers`;
  const presentationTabHref = `${teacherCourseHref}?tab=presentations`;

  const unlockedPresentations = course.presentations.filter(
    (presentation) => !presentation.isLocked
  );
</script>

<Sidebar.Group>
  <Sidebar.GroupLabel>Informations</Sidebar.GroupLabel>
  <Sidebar.Menu>
    {#if unlockedPresentations.length > 0}
      <SidebarCollapsibleMenuButton
        items={unlockedPresentations}
        isActive={isActive(courseHref)}
        tooltip="Présentations"
      >
        {#snippet trigger({ props })}
          <a href={courseHref} {...props}>
            <Presentation />
            <span>Présentations</span>
          </a>
        {/snippet}
        {#snippet content(presentation)}
          {@const formattedUrl = formatPresentationUrl(presentation)}
          <Sidebar.MenuSubButton isActive={page.url.pathname.includes(formattedUrl)}>
            {#snippet child({ props })}
              <a
                href={presentation.url ? presentation.url : formattedUrl}
                target={presentation.url ? '_blank' : '_self'}
                {...props}
              >
                <span>{presentation.title}</span>
              </a>
            {/snippet}
          </Sidebar.MenuSubButton>
        {/snippet}
      </SidebarCollapsibleMenuButton>
    {:else}
      <Sidebar.MenuItem>
        <Sidebar.MenuButton isActive={isActive(courseHref)}>
          {#snippet child({ props })}
            <a href={courseHref} {...props}>
              <Presentation />
              Présentations
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    {/if}
  </Sidebar.Menu>
</Sidebar.Group>

{#if page.data.user?.role !== 'Student'}
  <Sidebar.Group>
    <Sidebar.GroupLabel>Administration</Sidebar.GroupLabel>
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton isActive={isActive(studentTabHref)}>
          {#snippet child({ props })}
            <a href={studentTabHref} {...props}>
              <GraduationCap />
              Étudiants
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton isActive={isActive(teacherTabHref)}>
          {#snippet child({ props })}
            <a href={teacherTabHref} {...props}>
              <ContactRound />
              Enseignants
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton isActive={isActive(presentationTabHref)}>
          {#snippet child({ props })}
            <a href={presentationTabHref} {...props}>
              <Presentation />
              Présentations
            </a>
          {/snippet}
        </Sidebar.MenuButton>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Group>
{/if}
