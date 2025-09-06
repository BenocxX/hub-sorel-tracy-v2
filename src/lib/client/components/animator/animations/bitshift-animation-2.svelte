<script lang="ts">
  import { all, TweenStepper } from '../tween-stepper.svelte';
  import { tweener } from '../tweener.svelte';
  import * as d3Interpolate from 'd3-interpolate';
  import TweenStepperControls from '../tween-stepper-controls.svelte';

  const stepper = new TweenStepper();

  const position = tweener({ left: 25, top: 50, right: 0, bottom: 0 }, { duration: 500 });
  const color = tweener('#FFF', { interpolate: d3Interpolate.interpolateLab });

  stepper.addStep(() => all(position.to({ left: 25, top: 50 }), color.to('#FFF')));
  stepper.addStep(() => position.to({ left: 75, top: 50 }));
  stepper.addStep(() => all(position.to({ left: 75, top: 25 }), color.to('#FF0000')));
  stepper.addStep(() => position.to({ left: 75, top: 75 }));
  stepper.addStep(() => position.to({ left: 75, top: 50 }));
</script>

<div class="relative h-[300px] w-full rounded-xl bg-secondary">
  <div
    class="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
    style="left: {position.current.left}%; top: {position.current.top}%; right: {position.current
      .right}%; bottom: {position.current.bottom}%; background-color: {color.current};"
  ></div>
</div>
<TweenStepperControls {stepper} />
