<script lang="ts">
  import Slide, { type SlideProps } from '../slide.svelte';
  import { currentPresentation } from '../store.svelte';

  const props: Omit<SlideProps, 'children'> = $props();
</script>

<Slide class="!flex h-full flex-col items-center justify-center" {...props}>
  <h1 class="r-fit-text">{currentPresentation.title}</h1>
  <h2 class="mt-4 text-xl opacity-75 sm:text-5xl">{currentPresentation.subTitle}</h2>
</Slide>
