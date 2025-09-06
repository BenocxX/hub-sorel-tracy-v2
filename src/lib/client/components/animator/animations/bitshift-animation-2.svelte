<script lang="ts">
  import { TweenStepper } from '../tween-stepper.svelte';
  import { tweener } from '../tweener.svelte';
  import TweenStepperControls from '../tween-stepper-controls.svelte';

  const stepper = new TweenStepper();

  const position = tweener({ left: 25, top: 50, right: 0, bottom: 0 }, { duration: 500 });

  stepper.addStep(() => position.to({ left: 25, top: 50 }));
  stepper.addStep(() => position.to({ left: 75, top: 50 }));
  stepper.addStep(() => position.to({ left: 75, top: 25 }));
  stepper.addStep(() => position.to({ left: 75, top: 75 }));
  stepper.addStep(() => position.to({ left: 75, top: 50 }));
</script>

<div class="relative h-[300px] w-full rounded-xl bg-secondary">
  <div
    class="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
    style="left: {position.current.left}%; top: {position.current.top}%; right: {position.current
      .right}%; bottom: {position.current.bottom}%;"
  ></div>
</div>
<TweenStepperControls {stepper} />
