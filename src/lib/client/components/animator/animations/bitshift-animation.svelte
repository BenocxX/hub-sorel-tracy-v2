<script lang="ts">
  import { tweened } from 'svelte/motion';
  import { Button } from '../../ui/button';
  import Checkbox from '../../ui/checkbox/checkbox.svelte';
  import { animated } from '../animate.svelte';
  import { interpolateLab } from 'd3-interpolate';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const steps: any[] = [];
  let currentStep = 0;
  let isPaused = false;
  let isPlaying = $state(false);
  let isLoop = $state(false);

  const circle = animated({ left: 25, top: 50, right: 0, bottom: 0 }, { duration: 500 });
  const color = tweened('#FFF', { interpolate: interpolateLab });

  steps.push(() => Promise.all([circle.to({ left: 25, top: 50 }), color.set('#FFF')]));
  steps.push(() => circle.to({ left: 75, top: 50 }));
  steps.push(() => circle.to({ left: 25, top: 50 }));
  steps.push(() => Promise.all([circle.to({ left: 25, top: 25 }), color.set('#FF0000')]));
  steps.push(() => circle.to({ left: 25, top: 75 }));
  steps.push(() => circle.to({ left: 25, top: 50 }));

  async function play() {
    do {
      if (isPaused) {
        isPaused = false;
      }

      isPlaying = true;
      for (let i = currentStep; i < steps.length && !isPaused; i++) {
        currentStep = i;
        console.log('Play step: ', steps[i]);
        await steps[i]();
      }
      isPlaying = false;

      if (!isPaused) {
        currentStep = 0;
      }
    } while (isLoop);
  }

  async function pause() {
    isPaused = true;
  }

  async function restart() {
    isPaused = false;
    currentStep = 0;
    await steps[currentStep]();
  }

  async function previous() {
    isPlaying = true;
    let previousStepIndex = currentStep - 1;
    if (previousStepIndex < 0) {
      previousStepIndex = steps.length - 1;
    }

    const previousStep = steps[previousStepIndex];
    console.log('Previous step: ', previousStep);
    await previousStep();
    currentStep--;
    if (currentStep < 0) {
      currentStep = steps.length - 1;
    }

    isPlaying = false;
  }

  async function next() {
    isPlaying = true;
    let nextStep = steps[currentStep + 1];
    if (!nextStep) {
      nextStep = steps[0];
    }

    console.log('Next step: ', nextStep);
    await nextStep();
    currentStep++;

    if (currentStep === steps.length) {
      currentStep = 0;
    }
    isPlaying = false;
  }
</script>

<div class="relative h-[300px] w-full rounded-xl bg-secondary">
  <div
    class="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
    style="left: {circle.tween.current.left}%; top: {circle.tween.current.top}%; right: {circle
      .tween.current.right}%; bottom: {circle.tween.current.bottom}%; background-color: {$color};"
  ></div>
</div>
<div class="flex items-center justify-center gap-2 pt-8 *:!text-lg">
  <Button disabled={isPlaying} onclick={restart}>Restart</Button>
  <Button disabled={isPlaying} onclick={previous}>Previous step</Button>
  <Button disabled={isPlaying} onclick={next}>Next step</Button>
  <Button disabled={isPlaying} onclick={play}>Play</Button>
  <Button onclick={pause}>Pause</Button>
  <div class="flex items-center gap-2">
    <label for="loop" class="!text-lg">Loop</label>
    <Checkbox id="loop" bind:checked={isLoop} />
  </div>
</div>
