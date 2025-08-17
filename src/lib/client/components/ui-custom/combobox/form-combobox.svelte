<script lang="ts" generics="T extends { id: unknown }">
  import * as Form from '$lib/client/components/ui/form/index.js';
  import * as Popover from '$lib/client/components/ui/popover/index.js';
  import * as Command from '$lib/client/components/ui/command/index.js';
  import { tick, type Snippet } from 'svelte';
  import { useId } from 'bits-ui';
  import { buttonVariants } from '$lib/client/components/ui/button';
  import { cn } from '$lib/client/utils';
  import { CheckIcon, ChevronsUpDownIcon } from 'lucide-svelte';

  type Props = {
    items: T[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value?: any;
    label: string;
    emptyValue: string;
    itemDisplay: Snippet<[T]>;
    content: Snippet<
      [
        {
          items: typeof items;
          commandItemDisplay: Snippet<[T]>;
          onSelect: (item: T) => void;
        },
      ]
    >;
  };

  let { items, value = $bindable(), label, emptyValue, itemDisplay, content }: Props = $props();

  let open = $state(false);

  // We want to refocus the trigger button when the user selects
  // an item from the list so users can continue navigating the
  // rest of the form with the keyboard.
  function closeAndFocusTrigger(triggerId: string) {
    open = false;
    tick().then(() => {
      document.getElementById(triggerId)?.focus();
    });
  }
  const triggerId = useId();

  function onSelect(item: T) {
    value = item.id;
    closeAndFocusTrigger(triggerId);
  }
</script>

<Popover.Root bind:open>
  <Form.Control id={triggerId}>
    {#snippet children({ props })}
      <Form.Label class="mb-1">{label}</Form.Label>
      <Popover.Trigger
        class={cn(buttonVariants({ variant: 'outline' }), 'justify-between')}
        role="combobox"
        {...props}
      >
        {@const item = items.find((item) => item.id === value)}
        {#if item}
          {@render itemDisplay(item)}
        {:else}
          {emptyValue}
        {/if}
        <ChevronsUpDownIcon class="opacity-50" />
      </Popover.Trigger>
      <input hidden {value} name={props.name} />
    {/snippet}
  </Form.Control>
  <Popover.Content class="w-[400px] overflow-y-auto p-0">
    <Command.Root>
      <Command.Input
        autofocus
        placeholder="Rechercher..."
        class="h-9 placeholder:text-foreground-discreet"
      />
      <Command.Empty>Aucun résultat...</Command.Empty>
      <div class="max-h-[300px] overflow-y-auto">
        {@render content({ items, commandItemDisplay, onSelect })}
      </div>
    </Command.Root>
  </Popover.Content>
</Popover.Root>

{#snippet commandItemDisplay(item: T)}
  {@render itemDisplay(item)}
  <CheckIcon class={cn('ml-auto', item.id !== value && 'text-transparent')} />
{/snippet}
