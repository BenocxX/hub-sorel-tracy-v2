<script lang="ts">
  import { Button } from '$lib/client/components/ui/button';

  type Props = {
    isLogging: boolean;
  };

  const { isLogging = true }: Props = $props();

  // Équivalent Svelte de `useState` : la valeur est réactive, donc le
  // composant se re-render à chaque clic et le libellé du bouton se met à jour.
  let count = $state(0);

  function handleClick() {
    count++;
    if (isLogging) {
      console.log(`Vous avez cliqué ${count} fois`);
    }
  }
</script>

<div class="flex gap-2">
  <Button onclick={handleClick}>Vous avez cliqué {count} fois</Button>
</div>
