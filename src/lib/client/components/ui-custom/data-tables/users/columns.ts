import type { User } from '$lib/common/types/prisma-types';
import type { ColumnDef } from '@tanstack/table-core';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'username',
    header: "Nom d'utilisateur",
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
    header: 'Role',
  },
];
