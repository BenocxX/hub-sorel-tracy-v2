<script lang="ts">
  import { tweener } from '..';
  import { flip } from 'svelte/animate';

  const binaries = $state([1, 1, 0]);

  const result = tweener(currentBinary(), { duration: 500 });

  async function leftShift() {
    binaries.push(0);
    await updateResult();
  }

  async function rightShift() {
    binaries.pop();
    await updateResult();
  }

  async function updateResult() {
    await result.to(currentBinary());
  }

  function currentBinary() {
    return parseInt(binaries.join(''), 2);
  }
</script>

<div class="relative h-[300px] w-full rounded-xl bg-secondary">
  <ul class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-1">
    {#each binaries as binary, index (index)}
      <li animate:flip={{ duration: 200 }}>{binary}</li>
    {/each}
  </ul>
  <span>result: {result.current.toFixed(0)}</span>
</div>
<button onclick={leftShift}>Left shift</button>
<button onclick={rightShift}>Right shift</button>
