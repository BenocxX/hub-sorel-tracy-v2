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
  import { Button } from '$lib/client/components/ui/button';
  import { Input } from '$lib/client/components/ui/input';
  import { Settings2 } from 'lucide-svelte';

  type DataTableProps<TData, TValue> = {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    pagination?: { disabled?: boolean; index?: number; size?: number };
    visibility?: boolean;
  };

  const {
    data,
    columns,
    pagination: paginationConfig,
    visibility = true,
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
  <div class="flex items-center py-4">
    <Input
      placeholder="Recherche"
      onchange={(e) => {
        table.setGlobalFilter(String(e.currentTarget.value));
      }}
      oninput={(e) => {
        table.setGlobalFilter(String(e.currentTarget.value));
      }}
      class="max-w-sm"
    />
    {#if visibility}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          {#snippet child({ props })}
            <Button {...props} variant="outline" size="xs" class="ml-auto">
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
    <div class="flex items-center justify-end space-x-2 py-4">
      <Button
        variant="outline"
        size="sm"
        onclick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Précédent
      </Button>
      <Button
        variant="outline"
        size="sm"
        onclick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Suivant
      </Button>
    </div>
  {/if}
</div>
