<script module lang="ts">
  export type SlideProps = {
    children: Snippet;
    in?: () => void;
    out?: () => void;
    animate?: boolean;
    animateEasing?: string;
    animateUnmatched?: boolean;
    animateId?: string;
    animateRestart?: boolean;
    stepDuration?: number;
    background?: string;
    gradient?: string;
    image?: string;
    video?: string;
    iframe?: string;
    interactive?: boolean;
    transition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
    class?: string;
    id?: string;
  };
</script>

<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    children,
    background,
    class: className,
    disableAutoAnimate,
    autoAnimateRestart,
    instantUnmatched = true,
    transition,
    animateEasing,
    animateId,
    stepDuration,
    gradient,
    image,
    video,
    iframe,
    interactive,
    ...props
  }: SlideProps & {
    disableAutoAnimate?: boolean;
    autoAnimateRestart?: boolean;
    instantUnmatched?: boolean; // will not animate unmatched elements, removing the fade-in fade-out effect
  } = $props();

  function listeners(el: HTMLElement) {
    const events = ['in', 'out'] as const;
    events.forEach((event) => el.addEventListener(event, () => props[event]?.()));
  }
</script>

<section
  use:listeners
  class={'slide-container ' + className}
  data-background={background}
  data-auto-animate={disableAutoAnimate ? undefined : true}
  data-auto-animate-restart={autoAnimateRestart ? true : undefined}
  data-auto-animate-unmatched={instantUnmatched ? false : undefined}
  data-auto-animate-easing={animateEasing}
  data-auto-animate-id={animateId}
  data-transition={transition}
  data-autoslide={stepDuration}
  data-background-gradient={gradient}
  data-background-image={image}
  data-background-video={video}
  data-background-iframe={iframe}
  data-background-interactive={interactive}
  {...props}
>
  {#if children}
    {@render children()}
  {/if}
</section>
