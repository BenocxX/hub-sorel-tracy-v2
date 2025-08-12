<script lang="ts">
  import { setContext, type Snippet } from 'svelte';

  type Props = {
    section: string;
    children: Snippet;
  };

  const { section, children }: Props = $props();
  console.log(section);

  setContext('slide-section', section);
</script>

{@render children()}
