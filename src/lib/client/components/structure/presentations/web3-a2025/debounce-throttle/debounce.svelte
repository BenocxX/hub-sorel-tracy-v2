<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    List,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { Button } from '$lib/client/components/ui/button';
  import Input from '$lib/client/components/ui/input/input.svelte';
  import Label from '$lib/client/components/ui/label/label.svelte';
  import { Tween } from 'svelte/motion';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 3 });

  const DEBOUNCE_DELAY = 1000;
  const DELAY_MAX = 100;
  const DELAY_MIN = 0;

  let debounceDelay = new Tween(DELAY_MAX, { duration: DEBOUNCE_DELAY });

  let debouncerResult = $state('');
  let debounceResult = $state('');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function debounce(callback: (...args: any[]) => void, delay: number) {
    let timeoutId: number | undefined;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return async function (...args: any[]) {
      clearTimeout(timeoutId);
      debounceDelay.set(DELAY_MAX, { duration: 0 });
      debounceDelay.target = DELAY_MIN;

      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }

  const debounceClassCodes = [
    `class Debouncer {

}`,

    `class Debouncer {
  callback = null;
  delay = null;
  timeoutId = null;
}`,

    `class Debouncer {
  callback = null;
  delay = null;
  timeoutId = null;

  constructor(callback, delay) {

  }
}`,

    `class Debouncer {
  callback = null;
  delay = null;
  timeoutId = null;

  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;
    this.timeoutId = null;
  }
}`,

    `class Debouncer {
  /* properties */

  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;
    this.timeoutId = null;
  }
}`,

    `class Debouncer {
  /* properties */

  constructor(callback, delay) {
    /* initialize properties */
  }
}`,

    `class Debouncer {
  /* properties */

  constructor(callback, delay) {
    /* initialize properties */
  }

  debounce() {

  }
}`,

    `class Debouncer {
  /* properties */

  constructor(callback, delay) {
    /* initialize properties */
  }

  debounce() {
    clearTimeout(this.timeoutId);
  }
}`,
    `class Debouncer {
  /* properties */

  constructor(callback, delay) {
    /* initialize properties */
  }

  debounce() {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.callback();
    }, this.delay);
  }
}`,
    `class Debouncer {
  /* properties */

  constructor(callback, delay) {
    /* initialize properties */
  }

  debounce(...args) {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.callback(...args);
    }, this.delay);
  }
}`,

    `class Debouncer {
  /* properties */

  constructor(callback, delay) {
    /* initialize properties */

    this.debounce = this.debounce.bind(this);
  }

  debounce(...args) {
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.callback(...args);
    }, this.delay);
  }
}`,
  ];

  const debouncerUsageCodes = [
    `function handleInput(event) {
    console.log("Input:", event.target.value);
}`,

    `function handleInput(event) {
    console.log("Input:", event.target.value);
}

input.addEventListener("input", handleInput);`,

    `function handleInput(event) {
    console.log("Input:", event.target.value);
}

const debouncer = new Debouncer(handleInput, ${DEBOUNCE_DELAY});

input.addEventListener("input", handleInput);`,
  ];

  const debounceFunctionCodes = [
    `function handleInput(event) {
    console.log("Input:", event.target.value);
}

input.addEventListener("input", handleInput);`,

    `function handleInput(event) { /* ... */ }

input.addEventListener("input", handleInput);`,

    `function handleInput(event) { /* ... */ }

function debounce(callback, delay) {

}

input.addEventListener("input", handleInput);`,

    `function handleInput(event) { /* ... */ }

function debounce(callback, delay) {
  let timeoutId = null;
}

input.addEventListener("input", handleInput);`,

    `function handleInput(event) { /* ... */ }

function debounce(callback, delay) {
  let timeoutId = null;

  return () => {
      
  };
}

input.addEventListener("input", handleInput);`,

    `function handleInput(event) { /* ... */ }

function debounce(callback, delay) {
  let timeoutId = null;

  return () => {
    clearTimeout(timeoutId);
  };
}

input.addEventListener("input", handleInput);`,

    `function handleInput(event) { /* ... */ }

function debounce(callback, delay) {
  let timeoutId = null;

  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(), delay);
  };
}

input.addEventListener("input", handleInput);`,

    `function handleInput(event) { /* ... */ }

function debounce(callback, delay) {
  let timeoutId = null;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}

input.addEventListener("input", handleInput);`,

    `function handleInput(event) { /* ... */ }

function debounce(callback, delay) {
  let timeoutId = null;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}

const debouncedHandleInput = debounce(handleInput, ${DEBOUNCE_DELAY});
input.addEventListener("input", handleInput);`,
  ];
</script>

<BasicSlide>
  <p>
    Un <Bold>debounce</Bold> (ou <Italic>anti-rebond</Italic>) est une technique utilisée en
    programmation pour limiter le nombre d'appels à une fonction dans un intervalle de temps donné.
    Cela permet d'optimiser les performances en évitant des exécutions inutiles.
  </p>
  <p>
    Pour effectuer un debounce, nous allons programmer un délai avant d'exécuter la fonction. Si la
    fonction est appelée à nouveau avant la fin de ce délai, le compteur est réinitialisé, jusqu'à
    ce qu'il n'y ait plus d'appels pendant le délai spécifié. Une fois le délai écoulé sans nouvel
    appel, la fonction est exécutée.
  </p>
  <p class="fragment">
    En d'autres mots, on jette à la poubelle tous les événements qui se produisent trop rapidement,
    et on ne garde que le dernier afin de l'exécuter.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Avant de vous montrer comment programmer un debounce, il est important de comprendre la fonction
    <InlineCodeBlock>setTimeout()</InlineCodeBlock>.
  </p>
  <p>
    <InlineCodeBlock>setTimeout()</InlineCodeBlock> est une fonction JavaScript qui permet d'exécuter
    une autre fonction après un certain délai (en millisecondes).
  </p>
  <List fragment paragraph="Elle prend deux arguments :">
    <li>La fonction à exécuter après le délai.</li>
    <li>Le délai en millisecondes avant d'exécuter la fonction.</li>
  </List>
  <p class="fragment">
    Aussi, <InlineCodeBlock>setTimeout()</InlineCodeBlock> retourne un identifiant unique pour le timeout
    en cours.
  </p>
</BasicSlide>
<BasicSlide>
  <p>Voici un exemple d'utilisation de <InlineCodeBlock>setTimeout()</InlineCodeBlock> :</p>
  <CodeBlock
    language="JS"
    code={`button.addEventListener("click", () => {
  console.log('Button clicked');

  const timeoutId = setTimeout(() => {
    console.log("Hello, world!");
  }, 1000);

  console.log(\`Timeout ID: \${timeoutId}\`);
});`}
  >
    <Button
      onclick={() => {
        console.log('Button clicked');

        const timeoutId = setTimeout(() => {
          console.log('Hello, world!');
        }, 1000);

        console.log(`Timeout ID: ${timeoutId}`);
      }}
    >
      Test setTimeout
    </Button>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Il existe aussi une fonction similaire appelée <InlineCodeBlock>clearTimeout()</InlineCodeBlock
    >, qui permet d'annuler un <InlineCodeBlock>setTimeout()</InlineCodeBlock> avant qu'il ne s'exécute.
  </p>

  <p>Voici un exemple d'utilisation de <InlineCodeBlock>clearTimeout()</InlineCodeBlock> :</p>
  <CodeBlock
    language="JS"
    code={`button.addEventListener("click", () => {
  console.log('Button clicked');

  const timeoutId = setTimeout(() => {
    console.log("Hello, world!");
  }, 1000);

  clearTimeout(timeoutId);
  console.log(\`Timeout ID: \${timeoutId} cleared\`);
});`}
  >
    <Button
      onclick={() => {
        console.log('Button clicked');

        const timeoutId = setTimeout(() => {
          console.log('Hello, world!');
        }, 1000);

        clearTimeout(timeoutId);
        console.log(`Timeout ID: ${timeoutId} cleared`);
      }}
    >
      Test clearTimeout
    </Button>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    À titre d'information, il existe aussi une fonction appelée
    <InlineCodeBlock>setInterval()</InlineCodeBlock>. Cette fonction est similaire à
    <InlineCodeBlock>setTimeout()</InlineCodeBlock>, mais au lieu d'exécuter la fonction une seule
    fois après le délai spécifié, elle exécute la fonction de manière répétée à chaque intervalle de
    temps spécifié.
  </p>
  <p>
    Vous pouvez annuler un <InlineCodeBlock>setInterval()</InlineCodeBlock> en utilisant la fonction
    <InlineCodeBlock>clearInterval()</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="JS"
    code={`button.addEventListener("click", () => {
  console.log('Button clicked');

  const intervalId = setInterval(() => {
    console.log("Hello, world!");
  }, 1000);

  // clearInterval(intervalId);
  console.log(\`Interval ID: \${intervalId}\`);
});`}
  >
    <Button
      onclick={() => {
        console.log('Button clicked');

        const intervalId = setInterval(() => {
          console.log('Hello, world!');
        }, 1000);

        console.log(`Interval ID: ${intervalId}`);
      }}
    >
      Test setInterval
    </Button>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Maintenant que vous comprenez <InlineCodeBlock>setTimeout()</InlineCodeBlock> et
    <InlineCodeBlock>clearTimeout()</InlineCodeBlock>, nous pouvons voir comment programmer un
    debounce.
  </p>
  <p>
    Premièrement, je veux vous montrer un exemple en utilisant une classe. Toutefois, gardez en tête
    que ce n'est pas la seule façon de le faire (ni la plus populaire). Nous allons voir la méthode
    la plus populaire après.
  </p>
</BasicSlide>
{#each debounceClassCodes as code, index (index)}
  <BasicSlide>
    <CodeBlock autoAnimateId="debouncer-class" language="JS" {code} />
  </BasicSlide>
{/each}
{#each debouncerUsageCodes as code, index (index)}
  <BasicSlide>
    <p>
      Voici un exemple d'utilisation de la classe <InlineCodeBlock>Debouncer</InlineCodeBlock> :
    </p>
    <CodeBlock autoAnimateId="debouncer-usage" language="JS" {code} />
  </BasicSlide>
{/each}
<BasicSlide>
  <p>
    Voici un exemple d'utilisation de la classe <InlineCodeBlock>Debouncer</InlineCodeBlock> :
  </p>
  <CodeBlock
    autoAnimateId="debouncer-usage"
    language="JS"
    code={`function handleInput(event) {
    console.log("Input:", event.target.value);
}

const debouncer = new Debouncer(handleInput, ${DEBOUNCE_DELAY});

input.addEventListener("input", debouncer.debounce);`}
  >
    <Label for="debounced-input" class="mb-4">Input avec debounce</Label>
    <Input
      id="debounced-input"
      type="text"
      placeholder="Tapez quelque chose..."
      oninput={debounce((event) => {
        console.log('Input:', event.target.value);
        debouncerResult = event.target.value;
      }, DEBOUNCE_DELAY)}
    />
    <div class="relative my-4 h-2 w-full overflow-hidden rounded bg-secondary">
      <div
        class="h-full bg-primary transition-[width] duration-100 ease-linear"
        style="width: {debounceDelay.current}%;"
      ></div>
    </div>
    <p>Résultat debounced : {debouncerResult}</p>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Toutefois, comme vous le savez, JavaScript est un langage "fonctionnel". Cela signifie que nous
    pouvons créer des fonctions qui retournent d'autres fonctions. C'est exactement ce que nous
    allons faire pour notre debounce.
  </p>
  <p>
    Rien nous empêche d'utiliser la class <InlineCodeBlock>Debouncer</InlineCodeBlock>, mais il est
    plus courant d'utiliser une fonction pour effectuer un debounce.
  </p>
</BasicSlide>
{#each debounceFunctionCodes as code, index (index)}
  <BasicSlide>
    <CodeBlock autoAnimateId="debounce-function" language="JS" {code} />
  </BasicSlide>
{/each}
<BasicSlide>
  <CodeBlock
    autoAnimateId="debounce-function"
    language="JS"
    code={`function handleInput(event) { /* ... */ }

function debounce(callback, delay) {
  let timeoutId = null;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}

const debouncedHandleInput = debounce(handleInput, ${DEBOUNCE_DELAY});
input.addEventListener("input", debouncedHandleInput);`}
  >
    <Label for="debounced-input-2" class="mb-4">Input avec debounce</Label>
    <Input
      id="debounced-input-2"
      type="text"
      placeholder="Tapez quelque chose..."
      oninput={debounce((event) => {
        console.log('Input: ', event.target.value);
        debounceResult = event.target.value;
      }, DEBOUNCE_DELAY)}
    />
    <div class="relative my-4 h-2 w-full overflow-hidden rounded bg-secondary">
      <div
        class="h-full bg-primary transition-[width] duration-100 ease-linear"
        style="width: {debounceDelay.current}%;"
      ></div>
    </div>
    <p>Résultat debounced : {debounceResult}</p>
  </CodeBlock>
</BasicSlide>
