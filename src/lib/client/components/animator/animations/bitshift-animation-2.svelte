<script lang="ts">
  import { Button } from '../../ui/button';
  import Checkbox from '../../ui/checkbox/checkbox.svelte';
  import { all, TweenStepper } from '../tween-stepper.svelte';
  import { tweener } from '../tweener.svelte';
  import { interpolateLab } from 'd3-interpolate';

  const stepper = new TweenStepper();
  const { play, pause, restart, previous, next } = stepper.getControls();

  const circle = tweener({ left: 25, top: 50, right: 0, bottom: 0 }, { duration: 500 });
  const color = tweener('#FFF', { interpolate: interpolateLab });

  stepper.addStep(() => all(circle.to({ left: 25, top: 50 }), color.to('#FFF')));
  stepper.addStep(() => circle.to({ left: 75, top: 50 }));
  stepper.addStep(() => all(circle.to({ left: 75, top: 25 }), color.to('#FF0000')));
  stepper.addStep(() => circle.to({ left: 75, top: 75 }));
  stepper.addStep(() => circle.to({ left: 75, top: 50 }));
</script>

<div class="relative h-[300px] w-full rounded-xl bg-secondary">
  <div
    class="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
    style="left: {circle.current.left}%; top: {circle.current.top}%; right: {circle.current
      .right}%; bottom: {circle.current.bottom}%; background-color: {color.current};"
  ></div>
</div>
<div class="flex items-center justify-center gap-2 pt-8 *:!text-lg">
  <Button disabled={stepper.playing} onclick={restart}>Restart</Button>
  <Button disabled={stepper.playing} onclick={previous}>Previous step</Button>
  <Button disabled={stepper.playing} onclick={next}>Next step</Button>
  <Button disabled={stepper.playing} onclick={play}>Play</Button>
  <Button onclick={pause}>Pause</Button>
  <div class="flex items-center gap-2">
    <label for="loop" class="!text-lg">Loop</label>
    <Checkbox id="loop" bind:checked={stepper.loop} />
  </div>
</div>
