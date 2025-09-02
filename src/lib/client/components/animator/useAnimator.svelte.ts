import { Animator, type AnimatorOptions } from './animator';

/**
 * This hook provides a reactive animation timeline using the Animator class.
 *
 * @param opts Options for the Animator instance.
 * @returns An object containing the animator instance and the current state.
 */
export function useAnimator(opts: AnimatorOptions) {
  const animator = new Animator(opts);

  const state = $state({
    playing: false,
    time: 0,
    duration: opts.duration,
  });

  animator.onTick = (time: number) => (state.time = time);
  animator.onPlay = () => (state.playing = true);
  animator.onPause = () => (state.playing = false);

  return { animator, state };
}
