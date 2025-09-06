<script lang="ts">
  import { Pause, Play, Repeat, StepBack, StepForward, Undo2 } from 'lucide-svelte';
  import { TweenStepper } from './tween-stepper.svelte';
  import { Toggle } from '../ui/toggle';
  import { Separator } from '../ui/separator';

  const { stepper }: { stepper: TweenStepper } = $props();
  const { restart, previous, play, next, pause } = stepper.getControls();
</script>

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
