<script lang="ts">
  import { onMount } from 'svelte';
  import { animate } from '../animate.svelte';

  const circle = animate({ left: 25, top: 50, right: 0, bottom: 0 }, { duration: 1000 });

  onMount(async () => {
    await circle
      .to({ left: 75 }, { delay: 1000 })
      .to({ left: 25 })
      .to({ top: 25 })
      .to({ top: 75 })
      .to({ top: 50 });
  });
</script>

<div class="relative h-[300px] w-full rounded-xl bg-secondary">
  <div
    class="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
    style="left: {circle.tween.current.left}%; top: {circle.tween.current.top}%; right: {circle
      .tween.current.right}%; bottom: {circle.tween.current.bottom}%;"
  ></div>
</div>
