<script lang="ts">
  import { useAnimator } from '../useAnimator.svelte.js';
  import { onDestroy } from 'svelte';

  // Configurable debounce delay (ms)
  const DEBOUNCE_DELAY = 1000;

  // Animator for the countdown bar
  const { animator } = useAnimator({ duration: DEBOUNCE_DELAY });

  // Runes state
  let inputValue = $state('');
  let outputValue = $state('');
  let countdown = $state(0); // 0 → 100% width of the bar

  // Debounce logic:
  function handleInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    inputValue = val;

    // Reset animator timeline
    animator.pause();
    animator.seek(0);

    // Add tween that shrinks bar from full → 0 over DEBOUNCE_DELAY
    animator.addTween({
      start: 0,
      duration: DEBOUNCE_DELAY,
      from: 100,
      to: 0,
      update: (v) => (countdown = v),
    });

    // Add callback at end to emit "debounced" value
    animator.addCallback({
      at: DEBOUNCE_DELAY,
      fn: () => {
        outputValue = val;
      },
    });

    animator.play();
  }

  // Cleanup when leaving slide
  onDestroy(() => animator.pause());
</script>

<div class="debounce-demo">
  <label>
    Type here:
    <input type="text" oninput={handleInput} />
  </label>

  <div class="visual">
    <div class="bar" style="width: {countdown}%;"></div>
  </div>

  <p>
    <strong>Input:</strong>
    {inputValue}
  </p>
  <p>
    <strong>Debounced output:</strong>
    {outputValue}
  </p>
</div>

<style>
  .debounce-demo {
    font-family: sans-serif;
    padding: 1rem;
  }
  input {
    margin: 0.5rem 0;
    padding: 0.25rem;
    font-size: 1rem;
  }
  .visual {
    position: relative;
    width: 100%;
    height: 10px;
    background: #ddd;
    margin: 1rem 0;
    border-radius: 4px;
    overflow: hidden;
  }
  .bar {
    height: 100%;
    background: dodgerblue;
    transition: width 0.1s linear;
  }
</style>
