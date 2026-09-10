<script lang="ts">
  import { Button } from '$lib/client/components/ui/button';
  import { Input } from '$lib/client/components/ui/input';

  let count = $state(0);
  let name = $state('Bob');

  function handleClick() {
    count++;
  }
</script>

<div class="space-y-2">
  <Button onclick={handleClick}>
    Vous avez cliqué {count} fois
  </Button>
  <Input type="text" bind:value={name} />
  <p>Bonjour, {name}!</p>
</div>
