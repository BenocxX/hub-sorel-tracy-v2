import type { ColumnDef } from '@tanstack/table-core';
import type { Passkey } from '@prisma/client';
import { createRawSnippet } from 'svelte';
import { renderComponent, renderSnippet } from '$lib/client/components/ui/data-table';
import { formatDateFrench } from '$lib/common/tools/format';
import PasskeyDataTableActions from './passkey-data-table-actions.svelte';
import type { Infer, SuperValidated } from 'sveltekit-superforms';
import type { DeletePasskeySchema } from '$lib/common/schemas/settings-schemas';

export function makePasskeyColumns({
  deleteForm,
}: {
  deleteForm: SuperValidated<Infer<DeletePasskeySchema>>;
}): ColumnDef<Passkey>[] {
  return [
    {
      meta: { frenchName: 'Nom', minWidth: '200px' },
      accessorKey: 'name',
      header: 'Nom',
    },
    {
      meta: { frenchName: 'Date de création', minWidth: '200px' },
      accessorKey: 'createdAt',
      header: 'Date de création',
      cell: ({ row }) => {
        const snippet = createRawSnippet(() => ({
          render: () => `Le ${formatDateFrench(row.original.createdAt)}`,
        }));
        return renderSnippet(snippet, '');
      },
    },
    {
      meta: { frenchName: 'Actions', minWidth: '100px' },
      id: 'actions',
      header: () => {
        const actionsHeaderSnippet = createRawSnippet(() => ({
          render: () => `<div class="text-right">Actions</div>`,
        }));
        return renderSnippet(actionsHeaderSnippet, '');
      },
      cell: ({ row }) => {
        return renderComponent(PasskeyDataTableActions, {
          passkey: row.original,
          deleteForm,
        });
      },
    },
  ];
}
