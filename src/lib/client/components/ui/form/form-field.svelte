<script lang="ts" module>
  import type { FormPath as _FormPath } from 'sveltekit-superforms';
  type T = Record<string, unknown>;
  type U = _FormPath<T>;
</script>

<script lang="ts" generics="T extends Record<string, unknown>, U extends _FormPath<T>">
  import * as FormPrimitive from 'formsnap';
  import type { WithoutChildren, WithElementRef } from 'bits-ui';
  import { cn } from '$lib/client/utils';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    form,
    name,
    children: childrenProp,
    ...restProps
  }: FormPrimitive.FieldProps<T, U> &
    WithoutChildren<WithElementRef<HTMLAttributes<HTMLDivElement>>> = $props();
</script>

<FormPrimitive.Field {form} {name}>
  {#snippet children({ constraints, errors, tainted, value })}
    <div bind:this={ref} class={cn('space-y-2', className)} {...restProps}>
      {@render childrenProp?.({ constraints, errors, tainted, value: value as T[U] })}
    </div>
  {/snippet}
</FormPrimitive.Field>
