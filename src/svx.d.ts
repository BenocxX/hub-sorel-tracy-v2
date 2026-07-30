// Ambient type declarations for .svx files (mdsvex-compiled Svelte components).
// This must be a non-module file (no top-level import/export) for wildcard
// module declarations to be globally ambient.
declare module '*.svx' {
  import type { Component } from 'svelte';
  const component: Component;
  export default component;
}
