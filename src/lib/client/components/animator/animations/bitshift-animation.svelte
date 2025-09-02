<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { easeInOutQuad } from '../animator';
  import { useAnimator } from '../useAnimator.svelte';
  import { browser } from '$app/environment';

  // SVG canvas size
  const width = 400;
  const height = 200;

  // Circle properties (runes)
  let x = $state(50);
  let y = $state(50);
  let color = $state('blue');

  // Step sizes
  const STEP_SMALL = 16; // ~1 frame
  const STEP_LARGE = 100; // coarse step

  // Animator: 3-second timeline
  const { animator, state: animationState } = useAnimator({ duration: 3000 });

  // Step 1 → move circle horizontally
  animator.addTween({
    start: 0,
    duration: 1000,
    from: 50,
    to: width - 50,
    easing: easeInOutQuad,
    update: (val) => (x = val),
  });

  // Step 2 → change color to red
  animator.addCallback({
    at: 1000,
    fn: () => (color = 'red'),
  });

  // Step 3 → move circle down
  animator.addTween({
    start: 1000,
    duration: 2000,
    from: 50,
    to: 150,
    easing: easeInOutQuad,
    update: (val) => (y = val),
  });

  // Generic step helper: pause then step
  function step(deltaMs: number) {
    // Pause first so stepping doesn't race with play()
    animator.pause();
    animator.step(deltaMs);
  }

  const stepForwardSmall = () => step(STEP_SMALL);
  const stepBackwardSmall = () => step(-STEP_SMALL);
  const stepForwardLarge = () => step(STEP_LARGE);
  const stepBackwardLarge = () => step(-STEP_LARGE);

  // Keyboard bindings
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'ArrowRight') stepForwardSmall();
    else if (e.key === 'ArrowLeft') stepBackwardSmall();
    else if (e.key === 'PageDown') stepForwardLarge();
    else if (e.key === 'PageUp') stepBackwardLarge();
  }

  onMount(() => {
    if (browser) {
      window.addEventListener('keydown', handleKeydown);
    }
  });

  onDestroy(() => {
    if (browser) {
      window.removeEventListener('keydown', handleKeydown);
    }
  });
</script>

<svg {width} {height} style="border:1px solid #ccc">
  <circle cx={x} cy={y} r="20" fill={color} />
</svg>

<!-- Debug info -->
<p>Time: {Math.round(animationState.time)} ms</p>
<p>Playing: {animationState.playing ? 'yes' : 'no'}</p>

<!-- Playback controls -->
<div class="controls">
  <button onclick={() => animator.restart()}>Restart</button>
  <button onclick={() => animator.pause()}>Pause</button>
  <button onclick={() => animator.play()}>Play</button>
</div>

<!-- Step controls -->
<div class="step-controls">
  <button onclick={stepBackwardLarge}>‹‹ -100ms</button>
  <button onclick={stepBackwardSmall}>‹ -16ms</button>

  <button onclick={stepForwardSmall}>+16ms ›</button>
  <button onclick={stepForwardLarge}>+100ms ››</button>
</div>

<style>
  .controls,
  .step-controls {
    display: flex;
    gap: 8px;
    margin-top: 8px;
  }
  button {
    padding: 6px 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background: white;
    cursor: pointer;
  }
  button:active {
    transform: translateY(1px);
  }
  circle {
    transition: fill 0.2s linear;
  }
</style>
