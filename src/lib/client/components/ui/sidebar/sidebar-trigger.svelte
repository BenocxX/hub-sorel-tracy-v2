<script lang="ts">
  import { Button } from '$lib/client/components/ui/button/index.js';
  import PanelLeft from '@lucide/svelte/icons/panel-left';
  import type { ComponentProps } from 'svelte';
  import { useSidebar } from './context.svelte.js';

  let {
    ref = $bindable(null),
    class: className,
    onclick,
    ...restProps
  }: ComponentProps<typeof Button> & {
    onclick?: (e: MouseEvent) => void;
  } = $props();

  const sidebar = useSidebar();
</script>

<Button
  type="button"
  onclick={(e) => {
    onclick?.(e);
    sidebar.toggle();
  }}
  data-sidebar="trigger"
  variant="outline"
  size="icon-sm"
  class={className}
  {...restProps}
>
  <PanelLeft />
  <span class="sr-only">Toggle Sidebar</span>
</Button>
