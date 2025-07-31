import { Presentation, Users } from 'lucide-svelte';

export type SidebarChoice = {
  name: string;
  subName: string;
  contentKey: 'course' | 'admin';
  icon: string;
};

export type HeaderSection = {
  name: string;
  headerSidebarChoice: SidebarChoice[];
};

type SidebarSubItem = {
  title: string;
  url: string;
};

export type SidebarItem = {
  title: string;
  url: string;
  isActive?: boolean;
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

export function makeSidebarData(user: App.PageData['user']): SidebarData {
  return {
    user,
    headerSections: [
      {
        name: 'Cours',
        headerSidebarChoice: [
          {
            name: 'Web 1',
            subName: 'Développement web #1',
            contentKey: 'course',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
          },
          {
            name: 'Web 3',
            subName: 'Développement web #2',
            contentKey: 'course',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
          },
          {
            name: 'POO 2',
            subName: 'Programmation orienté objet 2',
            contentKey: 'course',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-json-icon lucide-file-json"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"/><path d="M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"/></svg>',
          },
        ],
      },
      {
        name: 'Autres',
        headerSidebarChoice: [
          {
            name: 'Admin',
            subName: 'Administration',
            contentKey: 'admin',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>',
          },
        ],
      },
    ],
    adminSidebar: [
      {
        title: 'Utilisateurs',
        url: '#',
        icon: Users,
        isActive: true,
        items: [
          { title: 'Étudiants', url: '/savant/admin/user?role=Student' },
          { title: 'Enseignants', url: '/savant/admin/user?role=Teacher' },
        ],
      },
      {
        title: 'Contenu',
        url: '#',
        icon: Presentation,
        items: [
          { title: 'Cours', url: '/savant/admin/course' },
          { title: 'Sessions', url: '/savant/admin/session' },
        ],
      },
    ],
  };
}
