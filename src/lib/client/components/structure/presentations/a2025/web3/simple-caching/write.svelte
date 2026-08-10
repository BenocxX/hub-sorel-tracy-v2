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
  registerInTOC({ page: 7 });

  const writeCodes = [
    `export function writeCache(key, value, timeToLiveInMs) {

}`,

    `export function writeCache(key, value, timeToLiveInMs) {
  const now = new Date();
}`,

    `export function writeCache(key, value, timeToLiveInMs) {
  const now = new Date();

  const item = {
    value: value,
  };
}`,

    `export function writeCache(key, value, timeToLiveInMs) {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + timeToLiveInMs,
  };
}`,

    `export function writeCache(key, value, timeToLiveInMs) {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + timeToLiveInMs,
  };

  localStorage.setItem(key, JSON.stringify(item));
}`,
  ];
</script>

<BasicSlide>
  <p>
    Nous allons voir ensemble comment écrire une petite fonction réutilisable de mise en cache en
    utilisant le <InlineCodeBlock>LocalStorage</InlineCodeBlock>.
  </p>
  <p>
    Notez qu'il est essentiel d'utiliser le <InlineCodeBlock>JSON.stringify</InlineCodeBlock> pour stocker
    des objets dans le <InlineCodeBlock>LocalStorage</InlineCodeBlock>, car il ne supporte que les
    chaînes de caractères.
  </p>
</BasicSlide>
{#each writeCodes as code, index (index)}
  <BasicSlide>
    <CodeBlock autoAnimateId="write-code" language="JS" {code} />
  </BasicSlide>
{/each}
