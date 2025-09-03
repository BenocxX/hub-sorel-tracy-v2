import { cubicInOut } from 'svelte/easing';
import { Tween } from 'svelte/motion';

/**
 * Extracts the second constructor parameter type from a class constructor type. Also provides a generic T
 * for the second constructor parameter.
 */
type SecondConstructorParam<C, T> = C extends new (arg0: any, arg1: infer P, ...rest: any) => any
  ? P
  : never;

export function animate<T>(value: T, options?: SecondConstructorParam<typeof Tween<T>, T>) {
  const tween = new Tween(value, {
    easing: cubicInOut,
    ...options,
  });

  const tasks: (() => Promise<void>)[] = [];

  function to(value: Partial<T>, options?: SecondConstructorParam<typeof Tween<T>, T>) {
    tasks.push(() => tween.set({ ...tween.target, ...value }, options));
    return { to, then };
  }

  async function then(resolve: () => void) {
    for (const task of tasks) {
      await task();
    }
    resolve();
  }

  return { tween, to, then };
}
