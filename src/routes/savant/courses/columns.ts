import type { ColumnDef } from '@tanstack/table-core';
import type { Course } from '$lib/common/types/prisma-types';
import { createRawSnippet } from 'svelte';
import { resolve } from '$app/paths';
import { renderSnippet } from '$lib/client/components/ui/data-table';
import { displaySession } from '$lib/common/tools/localizer';

export function makeColumns(): ColumnDef<Course<{ schoolSession: true }>>[] {
  return [
    {
      meta: { frenchName: 'Cours' },
      accessorKey: 'name',
      header: 'Cours',
      cell: ({ row }) => {
        const snippet = createRawSnippet(() => ({
          render: () =>
            `<a href="${resolve('/savant/courses/[courseId=number]', { courseId: row.original.id.toString() })}" class="flex link text-foreground items-center gap-3 [&>svg]:size-5">${row.original.icon}<div>${row.original.name}</div></a>`,
        }));
        return renderSnippet(snippet, '');
      },
    },
    {
      meta: { frenchName: 'Groupe' },
      accessorKey: 'group',
      header: 'Groupe',
      cell: ({ row }) => {
        const snippet = createRawSnippet(() => ({
          render: () => `<div>Groupe ${row.original.group}</div>`,
        }));
        return renderSnippet(snippet, '');
      },
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
  ];
}
