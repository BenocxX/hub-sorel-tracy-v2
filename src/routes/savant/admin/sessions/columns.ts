import { renderComponent, renderSnippet } from '$lib/client/components/ui/data-table';
import type { ColumnDef } from '@tanstack/table-core';
import { createRawSnippet } from 'svelte';
import DataTableActions from './data-table-actions.svelte';
import type { SchoolSession } from '@prisma/client';
import type { Infer, SuperValidated } from 'sveltekit-superforms';
import type {
  DeleteSessionSchema,
  ToggleCurrentSessionSchema,
} from '$lib/common/schemas/school-session-schemas';
import { displaySession, localizeSeason } from '$lib/common/tools/localizer';

export function makeColumns({
  deleteSessionForm,
  toggleCurrentSessionForm,
}: {
  deleteSessionForm: SuperValidated<Infer<DeleteSessionSchema>>;
  toggleCurrentSessionForm: SuperValidated<Infer<ToggleCurrentSessionSchema>>;
}): ColumnDef<SchoolSession>[] {
  return [
    {
      id: 'id',
      meta: { frenchName: 'ID' },
      header: 'ID',
      cell: ({ row }) => {
        const cellSnippet = createRawSnippet(() => ({
          render: () => `<div>${displaySession(row.original, { short: true })}</div>`,
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
          render: () => `<div>${localizeSeason(row.original.season)}</div>`,
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
      meta: { frenchName: 'Session actuelle' },
      accessorKey: 'isCurrent',
      header: '',
      cell: ({ row }) => {
        return row.original.isCurrent ? 'Session actuelle' : '';
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
          session: row.original,
          deleteSessionForm,
          toggleCurrentSessionForm,
        });
      },
    },
  ];
}
