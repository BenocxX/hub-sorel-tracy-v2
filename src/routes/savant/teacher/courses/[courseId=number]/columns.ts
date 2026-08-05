import { renderComponent, renderSnippet } from '$lib/client/components/ui/data-table';
import type { Comment, Course, User } from '$lib/common/types/prisma-types';
import type { ColumnDef } from '@tanstack/table-core';
import { createRawSnippet } from 'svelte';
import DataTableUsersActions from './data-table-users-actions.svelte';
import DataTableSortHeaderButton from '$lib/client/components/ui-custom/data-tables/data-table-sort-header-button.svelte';
import type { Infer, SuperValidated } from 'sveltekit-superforms';
import type { RemoveUserFromCourseSchema } from '$lib/common/schemas/course-schemas';
import type { Presentation } from '@prisma/client';
import DataTablePresentationsActions from './data-table-presentations-actions.svelte';
import type {
  DeletePresentationSchema,
  ModifyPresentationSchema,
  TogglePresentationLockedSchema,
} from '$lib/common/schemas/presentation-schemas';
import { localizeRole } from '$lib/common/tools/localizer';
import { formatTimeBetween } from '$lib/common/tools/format';
import UsernameAvatar from './username-avatar.svelte';
import PresentationTitleLink from '$lib/client/components/ui-custom/data-tables/presentations/presentation-title-link.svelte';
import CommentContentLink from '$lib/client/components/ui-custom/data-tables/comments/comment-content-link.svelte';
import CommentStatusBadge from '$lib/client/components/ui-custom/data-tables/comments/comment-status-badge.svelte';

export function makeUserColumns({
  course,
  removeUserFromCourse,
}: {
  course: Course;
  removeUserFromCourse: SuperValidated<Infer<RemoveUserFromCourseSchema>>;
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
      cell: ({ row }) => renderComponent(UsernameAvatar, { user: row.original }),
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
        return renderComponent(DataTableUsersActions, {
          user: row.original,
          course,
          removeUserFromCourse,
        });
      },
    },
  ];
}

export function makePresentationColumns({
  course,
  modifyPresentation,
  togglePresentationLocked,
  deletePresentation,
}: {
  course: Course;
  modifyPresentation: SuperValidated<Infer<ModifyPresentationSchema>>;
  togglePresentationLocked: SuperValidated<Infer<TogglePresentationLockedSchema>>;
  deletePresentation: SuperValidated<Infer<DeletePresentationSchema>>;
}): ColumnDef<Presentation>[] {
  return [
    {
      meta: { frenchName: 'Titre' },
      accessorKey: 'title',
      header: ({ column }) => {
        return renderComponent(DataTableSortHeaderButton, {
          isSorted: column.getIsSorted(),
          text: 'Titre',
          onclick: column.getToggleSortingHandler(),
        });
      },
      cell: ({ row }) => renderComponent(PresentationTitleLink, row.original),
    },
    {
      meta: { frenchName: 'Description' },
      accessorKey: 'description',
      header: 'Description',
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
        return renderComponent(DataTablePresentationsActions, {
          course,
          presentation: row.original,
          modifyPresentation,
          togglePresentationLocked,
          deletePresentation,
        });
      },
    },
  ];
}

export type CommentDashboardRow = Comment<{
  author: { include: { discordUser: true } };
  presentation: { select: { id: true; title: true } };
  _count: { select: { replies: true } };
}>;

export function makeCommentColumns(): ColumnDef<CommentDashboardRow>[] {
  return [
    {
      meta: { frenchName: 'Question' },
      accessorKey: 'content',
      header: 'Question',
      cell: ({ row }) => renderComponent(CommentContentLink, { comment: row.original }),
    },
    {
      meta: { frenchName: 'Présentation' },
      id: 'presentation',
      accessorFn: (row) => row.presentation.title,
      header: ({ column }) => {
        return renderComponent(DataTableSortHeaderButton, {
          isSorted: column.getIsSorted(),
          text: 'Présentation',
          onclick: column.getToggleSortingHandler(),
        });
      },
    },
    {
      meta: { frenchName: 'Auteur' },
      id: 'author',
      accessorFn: (row) => `${row.author.firstname} ${row.author.lastname}`,
      header: 'Auteur',
      cell: ({ row }) => renderComponent(UsernameAvatar, { user: row.original.author }),
    },
    {
      meta: { frenchName: 'Statut' },
      id: 'status',
      accessorFn: (row) => row.resolved,
      header: ({ column }) => {
        return renderComponent(DataTableSortHeaderButton, {
          isSorted: column.getIsSorted(),
          text: 'Statut',
          onclick: column.getToggleSortingHandler(),
        });
      },
      cell: ({ row }) => renderComponent(CommentStatusBadge, { resolved: row.original.resolved }),
    },
    {
      meta: { frenchName: 'Réponses' },
      id: 'replyCount',
      accessorFn: (row) => row._count.replies,
      header: 'Réponses',
    },
    {
      meta: { frenchName: 'Date' },
      accessorKey: 'createdAt',
      header: ({ column }) => {
        return renderComponent(DataTableSortHeaderButton, {
          isSorted: column.getIsSorted(),
          text: 'Date',
          onclick: column.getToggleSortingHandler(),
        });
      },
      cell: ({ row }) => {
        const cellSnippet = createRawSnippet(() => ({
          render: () => `<div>${formatTimeBetween(row.original.createdAt)}</div>`,
        }));
        return renderSnippet(cellSnippet, '');
      },
    },
  ];
}
