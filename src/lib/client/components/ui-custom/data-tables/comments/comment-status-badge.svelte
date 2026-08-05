<script lang="ts">
  import { Badge } from '$lib/client/components/ui/badge';

  type Props = {
    resolved: boolean;
  };

  const { resolved }: Props = $props();
</script>

{#if resolved}
  <Badge variant="success">Répondu</Badge>
{:else}
  <Badge variant="outline">En attente</Badge>
{/if}
