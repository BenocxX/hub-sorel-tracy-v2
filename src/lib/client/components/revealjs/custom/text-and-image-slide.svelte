<script lang="ts">
  import { BasicSlide, Image } from '$lib/client/components/revealjs/custom';
  import type { BasicSlideProps } from '$lib/client/components/revealjs/custom/basic-slide.svelte';
  import { cn } from '$lib/client/utils';
  import type { Snippet } from 'svelte';

  type Props = BasicSlideProps & {
    src: string;
    alt: string;
    isImageRight?: boolean;
    children: Snippet;
  };

  const { src, alt, isImageRight = false, children, ...props }: Props = $props();
</script>

<BasicSlide {...props}>
  <div class={cn('flex gap-8', isImageRight && 'flex-row-reverse')}>
    <Image {src} {alt} figureClass="flex-1 hidden lg:flex h-full" class="my-auto" />
    <div class="flex-[2] space-y-6 sm:space-y-10">
      {@render children()}
    </div>
  </div>
</BasicSlide>
