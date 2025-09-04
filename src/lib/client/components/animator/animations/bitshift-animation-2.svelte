<script lang="ts">
  import { Pause, Play, Repeat, StepBack, StepForward, Undo2 } from 'lucide-svelte';
  import { Button } from '../../ui/button';
  import { Toggle } from '../../ui/toggle';
  import { all, TweenStepper } from '../tween-stepper.svelte';
  import { tweener } from '../tweener.svelte';
  import { interpolateLab } from 'd3-interpolate';
  import { Separator } from '../../ui/separator';

  const stepper = new TweenStepper();
  const { restart, previous, play, next, pause } = stepper.getControls();

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
<div class="flex items-center justify-center gap-2 pt-8">
  <Toggle
    disabled={stepper.running}
    variant="outline"
    aria-label="Recommencer"
    onclick={restart}
    bind:pressed={stepper.restarting}
  >
    <Undo2 class="size-4" />
  </Toggle>
  <Separator orientation="vertical" class="mx-2 h-6" />
  <Toggle
    disabled={stepper.running}
    variant="outline"
    aria-label="Précédent"
    onclick={previous}
    bind:pressed={stepper.playingPrevious}
  >
    <StepBack class="size-4" />
  </Toggle>
  <Toggle
    disabled={stepper.running}
    variant="outline"
    aria-label="Play"
    onclick={play}
    bind:pressed={stepper.playing}
  >
    <Play class="size-4" />
  </Toggle>
  <Toggle
    disabled={stepper.running}
    variant="outline"
    aria-label="Suivant"
    onclick={next}
    bind:pressed={stepper.playingNext}
  >
    <StepForward class="size-4" />
  </Toggle>
  <Separator orientation="vertical" class="mx-2 h-6" />
  <Toggle
    disabled={!stepper.playing}
    variant="outline"
    aria-label="Pause"
    onclick={pause}
    bind:pressed={stepper.paused}
  >
    <Pause class="size-4" />
  </Toggle>
  <Toggle variant="outline" aria-label="Recommencer" bind:pressed={stepper.loop}>
    <Repeat class="size-4" />
  </Toggle>
</div>
