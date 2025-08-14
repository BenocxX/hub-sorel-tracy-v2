import { renderComponent } from '$lib/client/components/ui/data-table';
import type { ColumnDef } from '@tanstack/table-core';
import DataTableSortHeaderButton from '$lib/client/components/ui-custom/data-tables/data-table-sort-header-button.svelte';
import type { Presentation } from '@prisma/client';
import DataTableTitleCell from './data-table-title-cell.svelte';

export function makeColumns(): ColumnDef<Presentation>[] {
  return [
    {
      meta: { frenchName: 'Titre', width: '40%', class: 'overflow-hidden text-nowrap' },
      accessorKey: 'title',
      header: ({ column }) => {
        return renderComponent(DataTableSortHeaderButton, {
          isSorted: column.getIsSorted(),
          text: 'Titre',
          onclick: column.getToggleSortingHandler(),
        });
      },
      cell: ({ row }) => renderComponent(DataTableTitleCell, row.original),
    },
    {
      meta: {
        frenchName: 'Description',
        width: '60%',
        class: 'overflow-hidden text-ellipsis text-nowrap max-w-[600px] min-w-[400px]',
      },
      accessorKey: 'description',
      header: 'Description',
    },
  ];
}
