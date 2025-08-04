<script lang="ts" generics="TData, TValue">
  import {
    type ColumnDef,
    type ColumnFiltersState,
    type GlobalFilterTableState,
    type PaginationState,
    type SortingState,
    type VisibilityState,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
  } from '@tanstack/table-core';
  import { createSvelteTable, FlexRender } from '$lib/client/components/ui/data-table/index.js';
  import * as Table from '$lib/client/components/ui/table/index.js';
  import * as DropdownMenu from '$lib/client/components/ui/dropdown-menu';
  import * as Select from '$lib/client/components/ui/select';
  import * as Dialog from '$lib/client/components/ui/dialog/index.js';
  import { Button } from '$lib/client/components/ui/button';
  import { Input } from '$lib/client/components/ui/input';
  import {
    ChevronLeft,
    ChevronRight,
    ChevronsLeft,
    ChevronsRight,
    Plus,
    Settings2,
  } from 'lucide-svelte';
  import type { Snippet } from 'svelte';

  type DataTableProps<TData, TValue> = {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    pagination?: { disabled?: boolean; index?: number; size?: number };
    visibility?: boolean;
    createDialogFormSnippet?: Snippet;
  };

  const {
    data,
    columns,
    pagination: paginationConfig,
    visibility = true,
    createDialogFormSnippet,
  }: DataTableProps<TData, TValue> = $props();

  let pagination = $state<PaginationState>({
    pageIndex: paginationConfig?.index ?? 0,
    pageSize: paginationConfig?.size ?? 10,
  });
  let sorting = $state<SortingState>([]);
  let columnFilters = $state<ColumnFiltersState>([]);
  let columnVisibility = $state<VisibilityState>({});
  let globalFilter = $state<GlobalFilterTableState>();

  const table = createSvelteTable({
    get data() {
      return data;
    },
    state: {
      get pagination() {
        return pagination;
      },
      get sorting() {
        return sorting;
      },
      get columnFilters() {
        return columnFilters;
      },
      get columnVisibility() {
        return columnVisibility;
      },
      get globalFilter() {
        return globalFilter;
      },
    },
    columns,
    onPaginationChange: (updater) => {
      if (typeof updater === 'function') {
        pagination = updater(pagination);
      } else {
        pagination = updater;
      }
    },
    onSortingChange: (updater) => {
      if (typeof updater === 'function') {
        sorting = updater(sorting);
      } else {
        sorting = updater;
      }
    },
    onColumnFiltersChange: (updater) => {
      if (typeof updater === 'function') {
        columnFilters = updater(columnFilters);
      } else {
        columnFilters = updater;
      }
    },
    onColumnVisibilityChange: (updater) => {
      if (typeof updater === 'function') {
        columnVisibility = updater(columnVisibility);
      } else {
        columnVisibility = updater;
      }
    },
    onGlobalFilterChange: (updater) => {
      if (typeof updater === 'function') {
        globalFilter = updater(globalFilter);
      } else {
        globalFilter = updater;
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
</script>

<div>
  <div class="flex items-center justify-between gap-2 py-4">
    <div class="flex w-full items-center gap-2">
      {#if createDialogFormSnippet}
        <Dialog.Root>
          <Dialog.Trigger>
            {#snippet child({ props })}
              <Button variant="outline" size="icon" class="aspect-square" {...props}>
                <Plus />
              </Button>
            {/snippet}
          </Dialog.Trigger>
          <Dialog.Content>
            {@render createDialogFormSnippet()}
          </Dialog.Content>
        </Dialog.Root>
      {/if}
      <Input
        id="search"
        placeholder="Recherche..."
        onchange={(e) => {
          table.setGlobalFilter(String(e.currentTarget.value));
        }}
        oninput={(e) => {
          table.setGlobalFilter(String(e.currentTarget.value));
        }}
        class="max-w-sm"
      />
    </div>
    {#if visibility}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {#snippet child({ props })}
            <Button {...props} variant="outline">
              <Settings2 />
              Affichage
            </Button>
          {/snippet}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
          {#each table.getAllColumns().filter((col) => col.getCanHide()) as column (column.id)}
            <DropdownMenu.CheckboxItem
              bind:checked={() => column.getIsVisible(), (v) => column.toggleVisibility(!!v)}
            >
              {column.columnDef.meta?.frenchName ?? column.id}
            </DropdownMenu.CheckboxItem>
          {/each}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    {/if}
  </div>
  <div class="rounded-md border">
    <Table.Root>
      <Table.Header>
        {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
          <Table.Row>
            {#each headerGroup.headers as header (header.id)}
              <Table.Head colspan={header.colSpan}>
                {#if !header.isPlaceholder}
                  <FlexRender
                    content={header.column.columnDef.header}
                    context={header.getContext()}
                  />
                {/if}
              </Table.Head>
            {/each}
          </Table.Row>
        {/each}
      </Table.Header>
      <Table.Body>
        {#each table.getRowModel().rows as row (row.id)}
          <Table.Row data-state={row.getIsSelected() && 'selected'}>
            {#each row.getVisibleCells() as cell (cell.id)}
              <Table.Cell>
                <FlexRender content={cell.column.columnDef.cell} context={cell.getContext()} />
              </Table.Cell>
            {/each}
          </Table.Row>
        {:else}
          <Table.Row>
            <Table.Cell colspan={columns.length} class="h-24 text-center">
              Aucun résultat.
            </Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
  {#if !paginationConfig?.disabled}
    <div
      class=" flex flex-col-reverse items-end justify-end sm:flex-row sm:items-center sm:gap-10 md:flex-col-reverse md:items-end md:gap-0 lg:flex-row lg:items-center lg:gap-10"
    >
      <div class="flex items-center gap-2">
        <span class="text-sm">Rangées par page</span>
        <Select.Root
          type="single"
          value={pagination.pageSize.toString()}
          onValueChange={(value) => table.setPageSize(+value)}
        >
          <Select.Trigger class="h-8 w-max gap-2">{pagination.pageSize}</Select.Trigger>
          <Select.Content>
            {#each Array.of(10, 20, 30, 40, 50) as itemPerPage (itemPerPage)}
              <Select.Item value={itemPerPage.toString()}>{itemPerPage}</Select.Item>
            {/each}
          </Select.Content>
        </Select.Root>
      </div>
      <div class="flex items-center gap-4">
        <div class="text-sm">Page {pagination.pageIndex + 1} sur {table.getPageCount()}</div>
        <div class="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="icon-sm"
            onclick={() => table.firstPage()}
            disabled={pagination.pageIndex === 0}
          >
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onclick={() => table.previousPage()}
            disabled={pagination.pageIndex === 0}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onclick={() => table.nextPage()}
            disabled={table.getPageCount() === pagination.pageIndex + 1}
          >
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            onclick={() => table.lastPage()}
            disabled={table.getPageCount() === pagination.pageIndex + 1}
          >
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  {/if}
</div>
