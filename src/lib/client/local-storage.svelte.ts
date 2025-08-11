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

function makeUserKey(value: string) {
  return `${value}-${page.data.user!.id}`;
}

function getLastSelectedSidebarIdPreference() {
  return useLocalStorage<string>(makeUserKey('last-selected-sidebar-id'), '');
}

function getSidebarOpenPreference() {
  return useLocalStorage<boolean>(makeUserKey('sidebar-open'), false);
}

export const preferences = {
  lastSelectedSidebarId: getLastSelectedSidebarIdPreference,
  sidebarOpen: getSidebarOpenPreference,
};
