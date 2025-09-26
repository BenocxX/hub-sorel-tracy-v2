import { renderComponent, renderSnippet } from '$lib/client/components/ui/data-table';
import type { User } from '$lib/common/types/prisma-types';
import type { ColumnDef } from '@tanstack/table-core';
import { createRawSnippet } from 'svelte';
import type { Infer, SuperValidated } from 'sveltekit-superforms';
import type { ChangeRoleSchema, DeleteUserSchema } from '$lib/common/schemas/user-schemas';
import DataTableActions from './data-table-actions.svelte';
import DataTableSortHeaderButton from '$lib/client/components/ui-custom/data-tables/data-table-sort-header-button.svelte';
import { localizeRole } from '$lib/common/tools/localizer';
import UsernameAvatar from './username-avatar.svelte';

export function makeColumns({
  deleteUserForm,
  changeRoleForm,
}: {
  deleteUserForm: SuperValidated<Infer<DeleteUserSchema>>;
  changeRoleForm: SuperValidated<Infer<ChangeRoleSchema>>;
}): ColumnDef<User<{ discordUser: true }>>[] {
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
        return renderComponent(UsernameAvatar, { user: row.original });
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
          render: () => `<div class="ml-4">${localizeRole(row.original.role)}</div>`,
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
          deleteUserForm,
          changeRoleForm,
        });
      },
    },
  ];
}
