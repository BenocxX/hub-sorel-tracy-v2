<script lang="ts">
  import {
    BasicSlide,
    Italic,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { Input } from '$lib/client/components/ui/input';
  import { Label } from '$lib/client/components/ui/label';
  import { Tween } from 'svelte/motion';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 26 });

  const THROTTLE_DELAY = 1000;
  const DELAY_MAX = 100;
  const DELAY_MIN = 0;

  let throttleDelay = new Tween(DELAY_MAX, { duration: THROTTLE_DELAY });

  let throttleClassResult = $state('');
  let throttleFuncResult = $state('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function throttle(callback: (...args: any[]) => void, delay: number) {
    let timeoutId: number | null = null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (...args: any[]) => {
      if (timeoutId) {
        return;
      }

      throttleDelay.target = DELAY_MIN;

      timeoutId = setTimeout(() => {
        callback(...args);
        timeoutId = null;
        throttleDelay.set(DELAY_MAX, { duration: 0 });
      }, delay);
    };
  }

  const throttleClassCode = [
    `class Throttler {

}`,

    `class Throttler {
  constructor(callback, delay) {

  }
}`,

    `class Throttler {
  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;
    this.timeoutId = null;

    this.throttle = this.throttle.bind(this);
  }
}`,

    `class Throttler {
  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;
    this.timeoutId = null;

    this.throttle = this.throttle.bind(this);
  }

  throttle(...args) {

  }
}`,

    `class Throttler {
  constructor(callback, delay) { /* ... */ }

  throttle(...args) {

  }
}`,

    `class Throttler {
  constructor(callback, delay) { /* ... */ }

  throttle(...args) {
    if (this.timeoutId) {
      return;
    }
  }
}`,

    `class Throttler {
  constructor(callback, delay) { /* ... */ }

  throttle(...args) {
    if (this.timeoutId) {
      return;
    }

    this.timeoutId = setTimeout(() => {
      this.callback(...args);
    }, this.delay);
  }
}`,

    `class Throttler {
  constructor(callback, delay) { /* ... */ }

  throttle(...args) {
    if (this.timeoutId) {
      return;
    }

    this.timeoutId = setTimeout(() => {
      this.callback(...args);
      this.timeoutId = null;
    }, this.delay);
  }
}`,
  ];

  const throttleFuncCode = [
    `function throttle(callback, delay) {

}`,

    `function throttle(callback, delay) {
  let timeoutId;
}`,

    `function throttle(callback, delay) {
  let timeoutId;

  return (...args) => {

  };
}`,

    `function throttle(callback, delay) {
  let timeoutId;

  return (...args) => {
    if (timeoutId) {
      return;
    }
  };
}`,

    `function throttle(callback, delay) {
  let timeoutId;

  return (...args) => {
    if (timeoutId) {
      return;
    }

    timeoutId = setTimeout(() => {
      callback(...args);
      timeoutId = null;
    }, delay);
  };
}`,
  ];
</script>

<BasicSlide>
  <p>
    Un <InlineCodeBlock>throttle</InlineCodeBlock> (ou <Italic>étrangleur</Italic>) est une
    technique qui permet de limiter la fréquence d'exécution d'une fonction.
  </p>
  <p class="fragment">
    Contrairement au <InlineCodeBlock>debounce</InlineCodeBlock>, qui retarde l'exécution jusqu'à ce
    qu'une période d'inactivité soit détectée, le
    <InlineCodeBlock>throttle</InlineCodeBlock> garantit qu'une fonction ne sera exécutée qu'une fois
    toutes les X millisecondes, peu importe le nombre d'événements déclencheurs.
  </p>
  <p class="fragment">
    Cela est particulièrement utile pour des événements qui peuvent se produire fréquemment, comme
    le défilement de la page ou le redimensionnement de la fenêtre, où vous souhaitez limiter la
    charge sur les performances en réduisant le nombre d'appels à une fonction tout en assurant une
    exécution régulière.
  </p>
</BasicSlide>
{#each throttleClassCode as code, index (index)}
  <BasicSlide>
    <CodeBlock autoAnimateId="throttle-class" language="JS" {code} />
  </BasicSlide>
{/each}
<BasicSlide>
  <p>
    Voici un exemple d'utilisation de la classe <InlineCodeBlock>Throttle</InlineCodeBlock> :
  </p>
  <CodeBlock
    language="JS"
    code={`function handleInput(event) {
  console.log("Input:", event.target.value);
}

const throttler = new Throttler(handleInput, ${THROTTLE_DELAY});
input.addEventListener("input", throttler.throttle);`}
  >
    <Label for="debounced-input" class="mb-4">Input avec throttle</Label>
    <Input
      id="debounced-input"
      type="text"
      placeholder="Tapez quelque chose..."
      oninput={throttle((event) => {
        console.log('Input: ', event.target.value);
        throttleClassResult = event.target.value;
      }, THROTTLE_DELAY)}
    />
    <div class="relative my-4 h-2 w-full overflow-hidden rounded bg-secondary">
      <div
        class="h-full bg-primary transition-[width] duration-100 ease-linear"
        style="width: {throttleDelay.current}%;"
      ></div>
    </div>
    <p>Résultat throttle : {throttleClassResult}</p>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Tout comme pour le <InlineCodeBlock>debounce</InlineCodeBlock>, on peut aussi implémenter le
    <InlineCodeBlock>throttle</InlineCodeBlock> en utilisant une fonction.
  </p>
  <p class="fragment">
    Encore une fois, rien nous empêche d'utiliser la class
    <InlineCodeBlock>Throttle</InlineCodeBlock>, mais il est plus courant d'utiliser une fonction
    pour effectuer un throttle.
  </p>
</BasicSlide>
{#each throttleFuncCode as code, index (index)}
  <BasicSlide>
    <CodeBlock autoAnimateId="throttle-func" language="JS" {code} />
  </BasicSlide>
{/each}
<BasicSlide>
  <p>
    Voici un exemple d'utilisation de la fonction <InlineCodeBlock>throttle</InlineCodeBlock> :
  </p>
  <CodeBlock
    language="JS"
    code={`function handleInput(event) {
    console.log("Input:", event.target.value);
}

const throttledHandleInput = throttle(handleInput, ${THROTTLE_DELAY});
input.addEventListener('input', throttledHandleInput);`}
  >
    <Label for="debounced-input" class="mb-4">Input avec throttle</Label>
    <Input
      id="debounced-input"
      type="text"
      placeholder="Tapez quelque chose..."
      oninput={throttle((event) => {
        console.log('Input: ', event.target.value);
        throttleFuncResult = event.target.value;
      }, THROTTLE_DELAY)}
    />
    <div class="relative my-4 h-2 w-full overflow-hidden rounded bg-secondary">
      <div
        class="h-full bg-primary transition-[width] duration-100 ease-linear"
        style="width: {throttleDelay.current}%;"
      ></div>
    </div>
    <p>Résultat throttle : {throttleFuncResult}</p>
  </CodeBlock>
</BasicSlide>
