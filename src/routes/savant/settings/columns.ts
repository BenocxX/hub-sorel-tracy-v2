import type { ColumnDef } from '@tanstack/table-core';
import type { Session } from '$lib/common/types/prisma-types';
import { createRawSnippet } from 'svelte';
import { renderComponent, renderSnippet } from '$lib/client/components/ui/data-table';
import { UAParser } from 'ua-parser-js';
import { formatDateFrench, formatTimeBetween } from '$lib/common/tools/format';
import DataTableActions from './data-table-actions.svelte';
import type { Infer, SuperValidated } from 'sveltekit-superforms';
import type { DeleteSessionSchema } from '$lib/common/schemas/settings-schemas';

export function makeColumns({
  currentSessionPublicId,
  deleteForm,
}: {
  currentSessionPublicId: string;
  deleteForm: SuperValidated<Infer<DeleteSessionSchema>>;
}): ColumnDef<Pick<Session, 'createdAt' | 'expiresAt' | 'lastUsed' | 'publicId' | 'name'>>[] {
  return [
    {
      meta: { frenchName: 'Nom' },
      accessorKey: 'name',
      header: 'Nom',
      cell: ({ row }) => {
        const snippet = createRawSnippet(() => ({
          render: () => {
            const { device, browser } = UAParser(row.original.name);
            const isActive = row.original.publicId === currentSessionPublicId;
            const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check-icon lucide-circle-check ${!isActive && 'text-transparent'}"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;
            return `<span class="flex items-center gap-2">${checkIcon}${device.vendor} ${device.model} · ${browser.name}</span>`;
          },
        }));
        return renderSnippet(snippet, '');
      },
    },
    {
      meta: { frenchName: 'Date de création' },
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
      meta: { frenchName: 'Expiration' },
      accessorKey: 'expiresAt',
      header: 'Expiration',
      cell: ({ row }) => {
        const snippet = createRawSnippet(() => ({
          render: () => `Dans ${formatTimeBetween(row.original.expiresAt)}`,
        }));
        return renderSnippet(snippet, '');
      },
    },
    {
      meta: { frenchName: 'Dernière utilisation' },
      accessorKey: 'lastUsed',
      header: 'Dernière utilisation',
      cell: ({ row }) => {
        const snippet = createRawSnippet(() => ({
          render: () => `Il y a ${formatTimeBetween(row.original.lastUsed)}`,
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
          session: row.original,
          deleteForm: deleteForm,
        });
      },
    },
  ];
}
