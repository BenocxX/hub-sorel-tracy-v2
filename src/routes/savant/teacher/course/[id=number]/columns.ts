import { renderComponent, renderSnippet } from '$lib/client/components/ui/data-table';
import type { Course, User } from '$lib/common/types/prisma-types';
import type { ColumnDef } from '@tanstack/table-core';
import { createRawSnippet } from 'svelte';
import DataTableActions from './data-table-actions.svelte';
import DataTableSortHeaderButton from '$lib/client/components/ui-custom/data-tables/data-table-sort-header-button.svelte';
import type { Infer, SuperValidated } from 'sveltekit-superforms';
import type { RemoveUserFromCourseSchema } from '$lib/common/schemas/course-schemas';

export function makeColumns({
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
        return renderComponent(DataTableActions, {
          user: row.original,
          course,
          removeUserFromCourse,
        });
      },
    },
  ];
}
