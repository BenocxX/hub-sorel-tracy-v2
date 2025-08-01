import type { ColumnDef } from '@tanstack/table-core';

type ColumnWithAccessorKey<TData, TColumn extends ColumnDef<TData>[]> = Extract<
  TColumn[number],
  { accessorKey: string }
>;
/**
 * Returns the valid accessor keys for the different columns of a data table. Useful for the DataTable
 * component for the searchbar "column" props.
 */
export type AccessorKey<TData, TColumn extends ColumnDef<TData>[]> = ColumnWithAccessorKey<
  TData,
  TColumn
>['accessorKey'];
