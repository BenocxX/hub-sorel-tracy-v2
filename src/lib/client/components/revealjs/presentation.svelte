<script lang="ts">
  import { tick, type Snippet } from 'svelte';
  import { setPresentation } from './store.svelte.js';
  import 'reveal.js/dist/reveal.css';

  type Options = {
    reload?: boolean;
  };

  type PresentationProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
    children?: Snippet;
    options?: Reveal.Options & Options;
    class?: string;
  };

  let revealDiv: HTMLDivElement | null = null;
  let offsetBetweenRevealJSAndTopOfPage: number = $state(0);

  let { children, options, ...props }: PresentationProps = $props();

  async function init() {
    const Reveal = (await import('reveal.js')).default;
    const Highlight = (await import('reveal.js/plugin/highlight/highlight')).default;
    const Zoom = (await import('reveal.js/plugin/zoom/zoom')).default;
    const Notes = (await import('reveal.js/plugin/notes/notes')).default;

    const defaults: Reveal.Options = {
      embedded: true,
      plugins: [Zoom, Highlight, Notes],
      // slide controls
      controls: true,
      controlsLayout: 'edges',
      // slide progress bar
      progress: true,
      // slide transition
      transition: 'slide',
      // bring your own layout
      disableLayout: true,
      // display mode used to show slides
      display: 'grid',
      // auto-animate duration
      autoAnimateDuration: 1,
      // auto-animate easing
      autoAnimateEasing: 'ease',
      // animate unmatched elements
      autoAnimateUnmatched: true,
      // hide cursor
      hideInactiveCursor: true,
      // time before cursor is hidden (ms)
      hideCursorTime: 5000,
      // Push state to history (useful to share links and bookmarks)
      history: true,
      // show slide number
      slideNumber: 'c/t',
    };

    // create deck instance
    const deck = new Reveal({ ...defaults, ...options });

    // expose reveal instance
    setPresentation(deck);

    // custom event listeners
    const inEvent = new CustomEvent('in');
    const outEvent = new CustomEvent('out');
    const currentEvent = new CustomEvent('current');

    // dispatch event for current active fragment
    // so `do` works in both directions
    async function dispatchFocused() {
      await tick();
      let currentFragmentEl = document.querySelector('.current-fragment');
      if (currentFragmentEl) {
        currentFragmentEl.dispatchEvent(currentEvent);
      }
    }

    // keep track of current slide
    deck.on('slidechanged', (event) => {
      if ('currentSlide' in event) {
        const currentSlideEl = event.currentSlide as HTMLElement;
        currentSlideEl?.dispatchEvent(inEvent);
      }

      if ('previousSlide' in event) {
        const currentPreviousEl = event.previousSlide as HTMLElement;
        currentPreviousEl?.dispatchEvent(outEvent);
      }

      dispatchFocused();
    });

    deck.on('slidetransitionend', (event) => {
      dispatchFocused();
    });

    deck.on('fragmentshown', (event) => {
      if ('fragment' in event) {
        const el = event.fragment as HTMLElement;
        let eventType: Event;

        if (el.tagName === 'CODE') {
          const codeEvent = new CustomEvent('change', {
            bubbles: true,
            detail: { step: el.dataset.lineNumbers },
          });
          eventType = codeEvent;
        } else {
          eventType = inEvent;
        }

        el?.dispatchEvent(eventType);
        dispatchFocused();
      }
    });

    deck.on('fragmenthidden', (event) => {
      if ('fragment' in event) {
        const fragmentEl = event.fragment as HTMLElement;
        fragmentEl?.dispatchEvent(outEvent);
        dispatchFocused();
      }
    });

    deck.initialize();

    if (options?.reload) {
      // reload page after update to avoid HMR issues
      reloadPageAfterUpdate();
    }
  }

  function reloadPageAfterUpdate() {
    if (import.meta.hot) {
      import.meta.hot.on('vite:afterUpdate', () => {
        location.reload();
      });
    }
  }

  $effect(() => {
    init();

    if (revealDiv) {
      offsetBetweenRevealJSAndTopOfPage = revealDiv.offsetTop;
    }
  });
</script>

<!--
  Cannot be "minHeight", "height: 100%" nor "flex-1" because RevealJS needs an exact height...
  That's why we hard-coded a custom height. Wack.
-->
<div
  bind:this={revealDiv}
  class="reveal"
  style={`height: calc(100vh - ${offsetBetweenRevealJSAndTopOfPage}px)`}
>
  <div class="slides {props.class}">
    {#if children}
      {@render children()}
    {/if}
  </div>
</div>
