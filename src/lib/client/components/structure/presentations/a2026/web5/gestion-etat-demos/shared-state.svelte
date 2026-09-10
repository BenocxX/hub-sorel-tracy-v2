<script lang="ts">
  import { Button } from '$lib/client/components/ui/button';

  let count = $state(0);

  function handleClick() {
    count++;
  }
</script>

<div class="flex gap-2">
  <Button onclick={handleClick}>Vous avez cliqué {count} fois</Button>
  <Button onclick={handleClick}>Vous avez cliqué {count} fois</Button>
</div>
