<script lang="ts" generics="TItem">
  import * as Sidebar from '$lib/client/components/ui/sidebar';
  import * as Collapsible from '$lib/client/components/ui/collapsible';
  import type { Snippet } from 'svelte';
  import { Button } from '$lib/client/components/ui/button';
  import { ChevronRightIcon } from 'lucide-svelte';

  type Props = {
    items: TItem[];
    isActive?: boolean;
    tooltip: string;
    trigger: Snippet<[{ props: Record<string, unknown> }]>;
    content: Snippet<[TItem]>;
  };

  const { items, isActive, tooltip, trigger, content }: Props = $props();
</script>

<Collapsible.Root open={true} class="group/collapsible">
  {#snippet child({ props })}
    <Sidebar.MenuItem {...props}>
      <Sidebar.MenuButton {isActive} class="pr-0">
        {#snippet tooltipContent()}{tooltip}{/snippet}
        {@render trigger({ props: { class: 'flex flex-1 items-center gap-2 [&>svg]:size-4' } })}
        <Collapsible.Trigger>
          {#snippet child({ props })}
            <Button variant="ghost" size="icon-sm" {...props}>
              <ChevronRightIcon
                class="size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
              />
            </Button>
          {/snippet}
        </Collapsible.Trigger>
      </Sidebar.MenuButton>
      <Collapsible.Content>
        <Sidebar.MenuSub>
          {#each items as item (item)}
            <Sidebar.MenuSubItem>
              {@render content(item)}
            </Sidebar.MenuSubItem>
          {/each}
        </Sidebar.MenuSub>
      </Collapsible.Content>
    </Sidebar.MenuItem>
  {/snippet}
</Collapsible.Root>
