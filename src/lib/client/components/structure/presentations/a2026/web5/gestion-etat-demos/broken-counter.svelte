<script lang="ts">
  import { Button } from '$lib/client/components/ui/button';

  // Volontairement PAS un rune : la mutation ne déclenche aucun re-render,
  // ce qui reproduit le bug de l'exemple React (`let count = 0`).
  let count = 0;

  function handleClick() {
    count++;
    console.log(`Vous avez cliqué ${count} fois`);
  }
</script>

<div class="flex gap-2">
  <Button onclick={handleClick}>Vous avez cliqué 0 fois</Button>
</div>
