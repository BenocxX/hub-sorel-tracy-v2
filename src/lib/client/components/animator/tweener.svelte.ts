import { cubicInOut } from 'svelte/easing';
import { Tween } from 'svelte/motion';

/**
 * Extracts the second constructor parameter type from a class constructor type. Also provides a generic T
 * for the second constructor parameter.
 */
export type TweenOptions<C, T> = C extends new (arg0: any, arg1: infer P, ...rest: any) => any
  ? P
  : never;

export type TweenerTo<T> = (
  value: Partial<T>,
  options?: TweenOptions<typeof Tween<T>, T>
) => { to: TweenerTo<T>; then: (resolve: () => void) => Promise<void> };

export type Tweener<T> = {
  get current(): T;
  get target(): T;
  to: TweenerTo<T>;
  then(resolve: () => void): Promise<void>;
};

/**
 * Creates a value that can be tweened over time. Has a queue system to chain multiple animations and await them.
 * @param value The initial value to tween.
 * @param options Options to configure the tween.
 * @returns An object containing the tweened value and methods to control the tween.
 */
export function tweener<T>(value: T, options?: TweenOptions<typeof Tween<T>, T>): Tweener<T> {
  const tween = new Tween(value, {
    easing: cubicInOut,
    ...options,
  });

  let tasks: (() => Promise<void>)[] = [];

  /** This function allows you to chain animations together.  */
  function to(
    value: Partial<T>,
    options?: TweenOptions<typeof Tween<T>, T>
  ): ReturnType<TweenerTo<T>> {
    if (typeof value === 'object') {
      tasks.push(() => tween.set({ ...tween.target, ...value }, options));
    } else {
      tasks.push(() => tween.set(value, options));
    }
    return { to, then };
  }

  async function then(resolve: () => void) {
    for (const task of tasks) {
      await task();
    }

    tasks = [];
    resolve();
  }

  return {
    get current() {
      return tween.current;
    },
    get target() {
      return tween.target;
    },
    to,
    then,
  };
}
