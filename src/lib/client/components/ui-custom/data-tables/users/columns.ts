import { renderComponent, renderSnippet } from '$lib/client/components/ui/data-table';
import type { User } from '$lib/common/types/prisma-types';
import type { ColumnDef } from '@tanstack/table-core';
import DataTableActions from './data-table-actions.svelte';
import { createRawSnippet } from 'svelte';
import DataTableUsernameButton from './data-table-username-button.svelte';

export const columns: ColumnDef<User>[] = [
  {
    meta: { frenchName: "Nom d'utilisateur" },
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
    meta: { frenchName: 'Prénom' },
    accessorKey: 'firstname',
    header: 'Prénom',
  },
  {
    meta: { frenchName: 'Nom' },
    accessorKey: 'lastname',
    header: 'Nom',
  },
  {
    meta: { frenchName: 'Rôle' },
    accessorKey: 'role',
    header: 'Rôle',
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
      return renderComponent(DataTableActions, row.original);
    },
  },
];
