<script lang="ts">
  import { Tween } from 'svelte/motion';
  import { flip } from 'svelte/animate';

  let number = $state(6);
  const binaries = $derived((number >>> 0).toString(2));

  const result = new Tween(0, { duration: 250 });

  $effect(() => {
    result.target = number;
  });
</script>

<div class="relative h-[300px] w-full rounded-xl bg-secondary">
  <div class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-4">
    <span>Binaire: </span>
    <ul class="flex items-center gap-1">
      {#each binaries.split('') as binary, index (index)}
        <li animate:flip={{ duration: 250 }}>{binary}</li>
      {/each}
    </ul>
  </div>
  <span>result: {result.current.toFixed(0)}</span>
</div>
<button onclick={() => (number <<= 1)}>Left shift</button>
<button onclick={() => (number >>= 1)}>Right shift</button>
