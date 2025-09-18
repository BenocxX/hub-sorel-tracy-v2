<script lang="ts">
  import { all, interpolateHex, tweener, TweenStepper, TweenStepperControls } from '..';

  const stepper = new TweenStepper();

  const position = tweener({ left: 25, top: 50, right: 0, bottom: 0 }, { duration: 500 });
  const color = tweener('#ff0000', { duration: 500, interpolate: interpolateHex });

  stepper.addStep(() => position.to({ left: 25, top: 50 }, { duration: 0 }));
  stepper.addStep(() => all(position.to({ left: 75, top: 50 }), color.to('#0000FF')));
  stepper.addStep(() => position.to({ left: 75, top: 25 }));
  stepper.addStep(() => position.to({ left: 75, top: 75 }));
  stepper.addStep(() => all(position.to({ left: 75, top: 50 }), color.to('#FF0000')));
</script>

<div class="relative h-[300px] w-full rounded-xl bg-secondary">
  <div
    class="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
    style="left: {position.current.left}%; top: {position.current.top}%; right: {position.current
      .right}%; bottom: {position.current.bottom}%; background-color: {color.current}"
  ></div>
</div>
<TweenStepperControls {stepper} />
