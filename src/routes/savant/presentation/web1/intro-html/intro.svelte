<script lang="ts">
  import BasicSlide from '$lib/client/components/revealjs/custom/basic-slide.svelte';
  import { setContext } from 'svelte';

  type Props = {
    section: string;
  };

  const { section }: Props = $props();

  setContext('slide-section', section);
</script>

<BasicSlide>
  <p>Tous les sites accessibles publiquement constituent le World Wide Web.</p>
</BasicSlide>
