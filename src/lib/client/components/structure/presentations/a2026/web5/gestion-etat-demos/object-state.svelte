<script lang="ts">
  import { Input } from '$lib/client/components/ui/input';

  let name = $state('Bob');
</script>

<div class="space-y-2">
  <p>Nom: {name}</p>
  <p>Âge: 25</p>
  <Input type="text" bind:value={name} />
</div>
