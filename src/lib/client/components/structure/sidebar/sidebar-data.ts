import { resolve } from '$app/paths';
import type { Course } from '$lib/common/types/prisma-types';
import type { SidebarLinkItem, SidebarSection } from '$lib/common/types/sidebar-types';
import { ContactRound, GraduationCap, Presentation, Users } from 'lucide-svelte';

function makePresentationLinksForCourse(course: Course<{ presentations: true }>) {
  return course.presentations.map(
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

export function makeSidebarSections({
  user,
  selectedCourse,
}: {
  user: App.PageData['user'];
  selectedCourse: Course<{ presentations: true }>;
}): SidebarSection[] {
  const courseUrl = resolve('/savant/courses/[courseId=number]', {
    courseId: selectedCourse.id.toString(),
  });

  const teacherUrl = resolve('/savant/teacher/courses/[courseId=number]', {
    courseId: selectedCourse.id.toString(),
  });

  return [
    {
      type: 'section',
      label: 'Informations',
      items: [
        {
          type: 'collapsible',
          label: 'Présentations',
          icon: Presentation,
          url: courseUrl,
          isHidden: selectedCourse.presentations.filter((p) => !p.isLocked).length === 0,
          items: makePresentationLinksForCourse(selectedCourse),
        },
        {
          type: 'link',
          label: 'Présentations',
          icon: Presentation,
          url: courseUrl,
          isHidden: selectedCourse.presentations.filter((p) => !p.isLocked).length > 0,
        },
      ],
    },
    {
      type: 'section',
      label: 'Gestion du cours',
      isHidden: user!.role !== 'Teacher' && user!.role !== 'Admin',
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
          icon: Presentation,
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
