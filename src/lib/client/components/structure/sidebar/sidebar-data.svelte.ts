import { resolve } from '$app/paths';
import { page } from '$app/state';
import type { Course } from '$lib/common/types/prisma-types';
import { CalendarDays, Presentation, Users } from 'lucide-svelte';

export type SidebarChoice = {
  id: string;
  name: string;
  subName: string;
  contentKey: 'course' | 'admin';
  icon: string;
  colorSeed: string;
  meta?: unknown;
};

export type HeaderSection = {
  name: string;
  isHidden?: boolean;
  headerSidebarChoice: SidebarChoice[];
};

type SidebarSubItem = {
  title: string;
  url: string;
};

export type SidebarItem = {
  title: string;
  url: string;
  isOpen?: boolean;
  // this should be `Component` after @lucide/svelte updates types
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  items?: SidebarSubItem[];
};

type SidebarData = {
  user: App.PageData['user'];
  headerSections: HeaderSection[];
  adminSidebar: SidebarItem[];
};

export function makeSidebarData(user: App.PageData['user'], courses: Course[]): SidebarData {
  const headerSidebarChoiceCourses: SidebarChoice[] = courses.map((course) => {
    return {
      id: `course-${course.id}`,
      name: course.name,
      subName: `Groupe ${course.group}`,
      contentKey: 'course',
      icon: course.icon,
      colorSeed: `${course.name}-${course.group}`,
      meta: course,
    };
  });

  return {
    user,
    headerSections: [
      {
        name: 'Cours',
        headerSidebarChoice: headerSidebarChoiceCourses,
      },
      {
        name: 'Autres',
        isHidden: user?.role !== 'Admin',
        headerSidebarChoice: [
          {
            id: 'admin',
            name: 'Admin',
            subName: 'Administration',
            contentKey: 'admin',
            colorSeed: 'Admin',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
          },
        ],
      },
    ],
    adminSidebar: [
      {
        title: 'Utilisateurs',
        url: resolve('/savant/admin/users'),
        icon: Users,
        isOpen: true,
        items: [
          {
            title: 'Étudiants',
            url: `${resolve('/savant/admin/users')}?role=Student`,
          },
          {
            title: 'Enseignants',
            url: `${resolve('/savant/admin/users')}?role=Teacher`,
          },
        ],
      },
      {
        title: 'Cours',
        url: `${resolve('/savant/admin/courses')}`,
        icon: Presentation,
      },
      {
        title: 'Sessions',
        url: `${resolve('/savant/admin/sessions')}`,
        icon: CalendarDays,
      },
    ],
  };
}

export function isActive(url: string): boolean {
  return url === page.url.pathname + page.url.search;
}
