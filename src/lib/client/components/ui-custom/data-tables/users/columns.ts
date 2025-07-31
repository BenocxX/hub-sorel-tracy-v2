import { renderComponent, renderSnippet } from '$lib/client/components/ui/data-table';
import type { User } from '$lib/common/types/prisma-types';
import type { ColumnDef } from '@tanstack/table-core';
import DataTableActions from './data-table-actions.svelte';
import { createRawSnippet } from 'svelte';
import DataTableUsernameButton from './data-table-username-button.svelte';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'username',
    header: ({ column }) => {
      return renderComponent(DataTableUsernameButton, {
        isSorted: column.getIsSorted(),
        onclick: column.getToggleSortingHandler(),
      });
    },
    cell: ({ row }) => {
      const actionsHeaderSnippet = createRawSnippet(() => ({
        render: () => `<div class="ml-4">${row.original.username}</div>`,
      }));
      return renderSnippet(actionsHeaderSnippet, '');
    },
  },
  {
    accessorKey: 'firstname',
    header: 'Prénom',
  },
  {
    accessorKey: 'lastname',
    header: 'Nom',
  },
  {
    accessorKey: 'role',
    header: 'Rôle',
  },
  {
    id: 'actions',
    header: () => {
      const actionsHeaderSnippet = createRawSnippet(() => ({
        render: () => `<div class="text-right">Actions</div>`,
      }));
      return renderSnippet(actionsHeaderSnippet, '');
    },
    cell: ({ row }) => {
      return renderComponent(DataTableActions, row.original);
    },
  },
];
