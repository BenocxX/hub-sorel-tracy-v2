<script lang="ts">
  import { onMount } from 'svelte';
  import { useAnimator } from '../useAnimator.svelte.js';

  // 6 in binary
  const original = 6;
  const shiftAmount = 2;
  const result = original << shiftAmount;

  // Timeline duration in ms
  const STEP_DURATION = 800; // time per bit change
  const POST_DELAY = 1200; // wait before looping

  const totalSteps = 3 + 1; // 3 shifts + final result display
  const timelineDuration = totalSteps * STEP_DURATION + POST_DELAY;

  // Animator
  const { animator, state: animationState } = useAnimator({ duration: timelineDuration });

  // Displayed value (binary string)
  let display = $state(original.toString(2).padStart(4, '0'));

  /**
   * Generate the intermediate bit values for each step
   */
  function generateSteps() {
    const steps: string[] = [];

    // Step 0: original
    steps.push(original.toString(2).padStart(4, '0'));

    // Step 1..shiftAmount: shift left 1 bit each
    let value = original;
    for (let i = 1; i <= shiftAmount; i++) {
      value <<= 1;
      steps.push(value.toString(2).padStart(4, '0'));
    }

    // Step after shifts: final result
    steps.push(result.toString(2).padStart(4, '0'));

    return steps;
  }

  const steps = generateSteps();

  onMount(() => {
    animator.addCallback({
      at: timelineDuration,
      fn: () => {
        console.log('Done');
        animator.pause();
      },
    });

    // Schedule steps in timeline
    steps.forEach((val, index) => {
      animator.addCallback({
        at: index * STEP_DURATION,
        fn: () => (display = val),
      });
    });

    animator.play();
  });
</script>

<div class="bitshift-demo">
  <h3>Bitshift Demo: 6 &lt;&lt; 2</h3>
  <div class="binary-display">
    {#each display.split('') as bit, index (bit + index)}
      <span class="bit">{bit}</span>
    {/each}
  </div>
  <p>Decimal: {parseInt(display, 2)}</p>
</div>

<style>
  .bitshift-demo {
    font-family: monospace;
    padding: 1rem;
    text-align: center;
  }

  .binary-display {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }

  .bit {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin: 0 0.25rem;
    line-height: 2rem;
    background: #ddd;
    border-radius: 4px;
    font-weight: bold;
    font-size: 1.5rem;
  }
</style>
