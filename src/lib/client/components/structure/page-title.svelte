<script lang="ts">
  import { cn } from '$lib/client/utils';

  type Props = {
    title: string;
    subtitle?: string;
    class?: string;
  };

  const { title, subtitle, class: classes }: Props = $props();
</script>

<div class={cn('mb-8 space-y-2 border-b pb-8', classes)}>
  <h1 class="text-4xl font-medium">{title}</h1>
  {#if subtitle}
    <h4 class="text-lg text-foreground-discreet">{subtitle}</h4>
  {/if}
</div>
