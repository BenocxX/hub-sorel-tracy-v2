import { renderComponent, renderSnippet } from '$lib/client/components/ui/data-table';
import type { ColumnDef } from '@tanstack/table-core';
import { createRawSnippet } from 'svelte';
import DataTableActions from './data-table-actions.svelte';
import type { SchoolSession } from '@prisma/client';
import type { Infer, SuperValidated } from 'sveltekit-superforms';
import type { DeleteSessionSchema } from '$lib/common/schemas/school-session-schemas';

export function makeColumns({
  deleteSessionForm,
}: {
  deleteSessionForm: SuperValidated<Infer<DeleteSessionSchema>>;
}): ColumnDef<SchoolSession>[] {
  return [
    {
      id: 'id',
      meta: { frenchName: 'ID' },
      header: 'ID',
      cell: ({ row }) => {
        const cellSnippet = createRawSnippet(() => ({
          render: () =>
            `<div>${localizedSeasonObject[row.original.season].charAt(0) + row.original.year}</div>`,
        }));
        return renderSnippet(cellSnippet, '');
      },
    },
    {
      meta: { frenchName: 'Saison' },
      accessorKey: 'season',
      header: 'Saison',
      cell: ({ row }) => {
        const cellSnippet = createRawSnippet(() => ({
          render: () => `<div>${localizedSeasonObject[row.original.season]}</div>`,
        }));
        return renderSnippet(cellSnippet, '');
      },
    },
    {
      meta: { frenchName: 'Année' },
      accessorKey: 'year',
      header: 'Année',
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
          session: row.original,
          deleteSessionForm,
        });
      },
    },
  ];
}

const localizedSeasonObject = {
  Fall: 'Automne',
  Winter: 'Hiver',
  Summer: 'Été',
};
