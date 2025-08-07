import { renderComponent, renderSnippet } from '$lib/client/components/ui/data-table';
import type { Course, User } from '$lib/common/types/prisma-types';
import type { ColumnDef } from '@tanstack/table-core';
import { createRawSnippet } from 'svelte';
import DataTableUsersActions from './data-table-users-actions.svelte';
import DataTableSortHeaderButton from '$lib/client/components/ui-custom/data-tables/data-table-sort-header-button.svelte';
import type { Infer, SuperValidated } from 'sveltekit-superforms';
import type { RemoveUserFromCourseSchema } from '$lib/common/schemas/course-schemas';
import type { Presentation } from '@prisma/client';
import DataTablePresentationsActions from './data-table-presentations-actions.svelte';
import type { DeletePresentationSchema } from '$lib/common/schemas/presentation-schemas';

export function makeUserColumns({
  course,
  removeUserFromCourse,
}: {
  course: Course;
  removeUserFromCourse: SuperValidated<Infer<RemoveUserFromCourseSchema>>;
}): ColumnDef<User>[] {
  return [
    {
      meta: { frenchName: "Nom d'utilisateur" },
      accessorKey: 'username',
      header: ({ column }) => {
        return renderComponent(DataTableSortHeaderButton, {
          isSorted: column.getIsSorted(),
          text: "Nom d'utilisateur",
          onclick: column.getToggleSortingHandler(),
        });
      },
      cell: ({ row }) => {
        const cellSnippet = createRawSnippet(() => ({
          render: () => `<div class="ml-4">${row.original.username}</div>`,
        }));
        return renderSnippet(cellSnippet, '');
      },
    },
    {
      meta: { frenchName: 'Prénom' },
      accessorKey: 'firstname',
      header: ({ column }) => {
        return renderComponent(DataTableSortHeaderButton, {
          isSorted: column.getIsSorted(),
          text: 'Prénom',
          onclick: column.getToggleSortingHandler(),
        });
      },
      cell: ({ row }) => {
        const cellSnippet = createRawSnippet(() => ({
          render: () => `<div class="ml-4">${row.original.firstname}</div>`,
        }));
        return renderSnippet(cellSnippet, '');
      },
    },
    {
      meta: { frenchName: 'Nom' },
      accessorKey: 'lastname',
      header: ({ column }) => {
        return renderComponent(DataTableSortHeaderButton, {
          isSorted: column.getIsSorted(),
          text: 'Nom',
          onclick: column.getToggleSortingHandler(),
        });
      },
      cell: ({ row }) => {
        const cellSnippet = createRawSnippet(() => ({
          render: () => `<div class="ml-4">${row.original.lastname}</div>`,
        }));
        return renderSnippet(cellSnippet, '');
      },
    },
    {
      meta: { frenchName: 'Rôle' },
      accessorKey: 'role',
      header: ({ column }) => {
        return renderComponent(DataTableSortHeaderButton, {
          isSorted: column.getIsSorted(),
          text: 'Rôle',
          onclick: column.getToggleSortingHandler(),
        });
      },
      cell: ({ row }) => {
        const cellSnippet = createRawSnippet(() => ({
          render: () => `<div class="ml-4">${row.original.role}</div>`,
        }));
        return renderSnippet(cellSnippet, '');
      },
    },
    {
      meta: { frenchName: 'Actions' },
      id: 'actions',
      header: () => {
        const actionsHeaderSnippet = createRawSnippet(() => ({
          render: () => `<div class="text-right">Actions</div>`,
        }));
        return renderSnippet(actionsHeaderSnippet, '');
      },
      cell: ({ row }) => {
        return renderComponent(DataTableUsersActions, {
          user: row.original,
          course,
          removeUserFromCourse,
        });
      },
    },
  ];
}

export function makePresentationColumns({
  course,
  deletePresentation,
}: {
  course: Course;
  deletePresentation: SuperValidated<Infer<DeletePresentationSchema>>;
}): ColumnDef<Presentation>[] {
  return [
    {
      meta: { frenchName: 'Titre' },
      accessorKey: 'title',
      header: ({ column }) => {
        return renderComponent(DataTableSortHeaderButton, {
          isSorted: column.getIsSorted(),
          text: 'Titre',
          onclick: column.getToggleSortingHandler(),
        });
      },
      cell: ({ row }) => {
        const cellSnippet = createRawSnippet(() => ({
          render: () => {
            const externalLinkIcon = row.original.isExternal
              ? `<svg xmlns="http://www.w3.org/2000/svg" class="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link-icon lucide-external-link"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`
              : '';
            const target = row.original.isExternal ? '_blank' : '_self';
            return `<a href="${row.original.url}" target="${target}" class="ml-4 flex items-center gap-2 link text-foreground">${row.original.title}${externalLinkIcon}</a>`;
          },
        }));
        return renderSnippet(cellSnippet, '');
      },
    },
    {
      meta: { frenchName: 'Description' },
      accessorKey: 'description',
      header: 'Description',
    },
    {
      meta: { frenchName: 'Actions' },
      id: 'actions',
      header: () => {
        const actionsHeaderSnippet = createRawSnippet(() => ({
          render: () => `<div class="text-right">Actions</div>`,
        }));
        return renderSnippet(actionsHeaderSnippet, '');
      },
      cell: ({ row }) => {
        return renderComponent(DataTablePresentationsActions, {
          course,
          presentation: row.original,
          deletePresentation,
        });
      },
    },
  ];
}
