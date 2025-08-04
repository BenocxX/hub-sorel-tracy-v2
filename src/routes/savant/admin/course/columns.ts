import { renderComponent, renderSnippet } from '$lib/client/components/ui/data-table';
import type { ColumnDef } from '@tanstack/table-core';
import { createRawSnippet } from 'svelte';
import DataTableActions from './data-table-actions.svelte';
import type { Infer, SuperValidated } from 'sveltekit-superforms';
import type { DeleteCourseSchema } from '$lib/common/schemas/course-schemas';
import { displaySession } from '$lib/common/tools/localizer';
import type { Course } from '$lib/common/types/prisma-types';

export function makeColumns({
  deleteCourseForm,
}: {
  deleteCourseForm: SuperValidated<Infer<DeleteCourseSchema>>;
}): ColumnDef<Course<{ schoolSession: true }>>[] {
  return [
    {
      meta: { frenchName: 'Nom' },
      accessorKey: 'name',
      header: 'Nom',
    },
    {
      meta: { frenchName: 'Session' },
      accessorKey: 'schoolSessionId',
      header: 'Session',
      cell: ({ row }) => {
        const snippet = createRawSnippet(() => ({
          render: () => `<div>${displaySession(row.original.schoolSession)}</div>`,
        }));
        return renderSnippet(snippet, '');
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
          course: row.original,
          deleteCourseForm,
        });
      },
    },
  ];
}
