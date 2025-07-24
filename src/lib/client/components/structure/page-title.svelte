<script lang="ts">
  type Props = {
    title: string;
    subtitle?: string;
  };

  const { title, subtitle }: Props = $props();
</script>

<div class="mb-8 space-y-2 border-b pb-8">
  <h1 class="text-4xl font-medium">{title}</h1>
  {#if subtitle}
    <h4 class="text-lg text-foreground-discreet">{subtitle}</h4>
  {/if}
</div>
