<script lang="ts">
  import {
    BasicSlide,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 13 });

  const readCodes = [
    `export function readCache(key) {

}`,

    `export function readCache(key) {
  const itemString = localStorage.getItem(key);
}`,

    `export function readCache(key) {
  const itemString = localStorage.getItem(key);

  if (!itemString) {

  }
}`,

    `export function readCache(key) {
  const itemString = localStorage.getItem(key);

  if (!itemString) {
    return null;
  }
}`,

    `export function readCache(key) {
  const itemString = localStorage.getItem(key);

  if (!itemString) {
    return null;
  }

  const item = JSON.parse(itemString);
}`,

    `export function readCache(key) {
  const itemString = localStorage.getItem(key);

  if (!itemString) {
    return null;
  }

  const item = JSON.parse(itemString);
  const now = new Date();
}`,

    `export function readCache(key) {
  const itemString = localStorage.getItem(key);

  if (!itemString) {
    return null;
  }

  const item = JSON.parse(itemString);
  const now = new Date();

  if (now.getTime() > item.expiry) {

  }
}`,

    `export function readCache(key) {
  const itemString = localStorage.getItem(key);

  if (!itemString) {
    return null;
  }

  const item = JSON.parse(itemString);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
}`,

    `export function readCache(key) {
  const itemString = localStorage.getItem(key);

  if (!itemString) {
    return null;
  }

  const item = JSON.parse(itemString);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}`,
  ];
</script>

<BasicSlide>
  <p>
    Nous allons maintenant voir comment écrire une petite fonction réutilisable de lecture du cache
    en utilisant le <InlineCodeBlock>LocalStorage</InlineCodeBlock> encore une fois.
  </p>
  <p>
    Notez qu'il est essentiel d'utiliser le <InlineCodeBlock>JSON.parse</InlineCodeBlock> pour lire des
    objets dans le <InlineCodeBlock>LocalStorage</InlineCodeBlock>, car il ne supporte que les
    chaînes de caractères.
  </p>
</BasicSlide>
{#each readCodes as code, index (index)}
  <BasicSlide>
    <CodeBlock autoAnimateId="read-code" language="JS" {code} />
  </BasicSlide>
{/each}
