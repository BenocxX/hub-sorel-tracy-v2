import { browser } from '$app/environment';
import { page } from '$app/state';

/**
 * A function to manipualte a local storage.
 * @param key - The key that references the local storage
 * @param value - The default value when the local storage is empty
 * @returns A state that contains the value stored in the local storage
 */
export function useLocalStorage<T>(key: string, value: T) {
  let storage = $state<{ value: T }>({ value });

  if (browser) {
    const item = localStorage.getItem(key);
    if (item) {
      storage.value = JSON.parse(item);
    }
  }

  $effect(() => {
    localStorage.setItem(key, JSON.stringify(storage.value));
  });

  return storage;
}

export type UserPreferences = {
  lastSelectedSidebarId?: string;
};

export function useUserPreferences() {
  const preferencesStorage = useLocalStorage<UserPreferences>(
    `${page.data.user!.id}-preferences`,
    {}
  );
  return preferencesStorage.value;
}
