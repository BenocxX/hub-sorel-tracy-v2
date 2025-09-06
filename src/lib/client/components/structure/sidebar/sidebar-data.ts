import { resolve } from '$app/paths';
import type { Course } from '$lib/common/types/prisma-types';
import type { SidebarLinkItem, SidebarSection } from '$lib/common/types/sidebar-types';
import { Archive, ContactRound, GraduationCap, Presentation, Users } from 'lucide-svelte';

function makePresentationLinksForCourse(course: Course<{ presentations: true }> | null) {
  if (!course) return [];

  return course.presentations
    .filter((p) => !p.isLocked)
    .map(
      (presentation): SidebarLinkItem => ({
        type: 'link',
        label: presentation.title,
        url:
          presentation.url ??
          resolve('/savant/courses/[courseId=number]/presentations/[presentationId=number]', {
            courseId: course.id.toString(),
            presentationId: presentation.id.toString(),
          }),
        target: presentation.url ? '_blank' : '_self',
      })
    );
}

function getPresentationCount(course: Course<{ presentations: true }> | null) {
  return course?.presentations.filter((p) => !p.isLocked).length ?? 0;
}

export function makeSidebarSections({
  user,
  selectedCourse,
}: {
  user: App.PageData['user'];
  selectedCourse: Course<{ presentations: true }> | null;
}): SidebarSection[] {
  const courseUrl = resolve('/savant/courses/[courseId=number]', {
    courseId: selectedCourse?.id.toString() ?? '0',
  });

  const teacherUrl = resolve('/savant/teacher/courses/[courseId=number]', {
    courseId: selectedCourse?.id.toString() ?? '0',
  });

  return [
    {
      type: 'section',
      label: 'Informations',
      isHidden: !selectedCourse,
      items: [
        {
          type: 'collapsible',
          label: 'Présentations',
          icon: Presentation,
          url: courseUrl,
          isHidden: getPresentationCount(selectedCourse) === 0,
          items: makePresentationLinksForCourse(selectedCourse),
        },
        {
          type: 'link',
          label: 'Présentations',
          icon: Presentation,
          url: courseUrl,
          isHidden: getPresentationCount(selectedCourse) > 0,
        },
      ],
    },
    {
      type: 'section',
      label: 'Gestion du cours',
      isHidden: !selectedCourse || (user!.role !== 'Teacher' && user!.role !== 'Admin'),
      items: [
        {
          type: 'link',
          label: 'Étudiants',
          icon: GraduationCap,
          url: `${teacherUrl}?tab=students`,
        },
        {
          type: 'link',
          label: 'Enseignants',
          icon: ContactRound,
          url: `${teacherUrl}?tab=teachers`,
        },
        {
          type: 'link',
          label: 'Présentations',
          icon: Presentation,
          url: `${teacherUrl}?tab=presentations`,
        },
      ],
    },
    {
      type: 'section',
      label: 'Administration',
      isHidden: user!.role !== 'Admin',
      items: [
        {
          type: 'collapsible',
          label: 'Utilisateurs',
          icon: Users,
          isOpen: true,
          url: resolve('/savant/admin/users'),
          items: [
            {
              type: 'link',
              label: 'Étudiants',
              url: `${resolve('/savant/admin/users')}?role=Student`,
            },
            {
              type: 'link',
              label: 'Enseignants',
              url: `${resolve('/savant/admin/users')}?role=Teacher`,
            },
          ],
        },
        {
          type: 'collapsible',
          label: 'Contenu',
          icon: Archive,
          isOpen: true,
          items: [
            {
              type: 'link',
              label: 'Cours',
              url: `${resolve('/savant/admin/courses')}`,
            },
            {
              type: 'link',
              label: 'Sessions',
              url: `${resolve('/savant/admin/sessions')}`,
            },
          ],
        },
      ],
    },
  ];
}
