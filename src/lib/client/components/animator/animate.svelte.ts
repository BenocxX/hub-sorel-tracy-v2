import { cubicInOut } from 'svelte/easing';
import { Tween } from 'svelte/motion';

/**
 * Extracts the second constructor parameter type from a class constructor type. Also provides a generic T
 * for the second constructor parameter.
 */
type SecondConstructorParam<C, T> = C extends new (arg0: any, arg1: infer P, ...rest: any) => any
  ? P
  : never;

export type Step<T> = Promise<{
  to: (value: Partial<T>, options?: SecondConstructorParam<typeof Tween<T>, T>) => Step<T>;
  then: (resolve: () => void) => void;
}>;

/**
 * Creates an animated value that can be tweened over time.
 * @param value The initial value to animate.
 * @param options Options to configure the animation.
 * @returns An object containing the animated value and methods to control the animation.
 */
export function animated<T>(value: T, options?: SecondConstructorParam<typeof Tween<T>, T>) {
  const tween = new Tween(value, {
    easing: cubicInOut,
    ...options,
  });

  let tasks: (() => Promise<void>)[] = [];

  /** This function allows you to chain animations together.  */
  function to(value: Partial<T>, options?: SecondConstructorParam<typeof Tween<T>, T>) {
    tasks.push(() => tween.set({ ...tween.target, ...value }, options));
    return { to, then };
  }

  async function then(resolve: () => void) {
    for (const task of tasks) {
      await task();
    }

    tasks = [];
    resolve();
  }

  return { tween, to, then };
}
