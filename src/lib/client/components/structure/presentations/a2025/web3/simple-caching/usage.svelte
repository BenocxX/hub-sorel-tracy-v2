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
  registerInTOC({ page: 23 });

  const usageCodes = [
    `const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;`,

    `const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
const userKey = "user-18956";`,

    `const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
const userKey = "user-18956";

const cachedData = readCache(userKey);`,

    `const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
const userKey = "user-18956";

const cachedData = readCache(userKey);

if (cachedData) {

} else {

}`,

    `const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
const userKey = "user-18956";

const cachedData = readCache(userKey);

if (cachedData) {
  console.log("Données en cache:", cachedData);
} else {
  console.log("Le cache a expiré ou n'existe pas.");
}`,

    `const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
const userKey = "user-18956";

const cachedData = readCache(userKey);

if (cachedData) {
  console.log("Données en cache:", cachedData);
} else {
  console.log("Le cache a expiré ou n'existe pas.");
  const response = await fetch("...");
}`,

    `const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
const userKey = "user-18956";

const cachedData = readCache(userKey);

if (cachedData) {
  console.log("Données en cache:", cachedData);
} else {
  console.log("Le cache a expiré ou n'existe pas.");
  const response = await fetch("...");
  const newData = await response.json();
}`,

    `const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;
const userKey = "user-18956";

const cachedData = readCache(userKey);

if (cachedData) {
  console.log("Données en cache:", cachedData);
} else {
  console.log("Le cache a expiré ou n'existe pas.");
  const response = await fetch("...");
  const newData = await response.json();
  writeCache(userKey, newData, TWENTY_FOUR_HOURS);
}`,
  ];
</script>

<BasicSlide>
  <p>
    Voici comment nous pouvons utiliser nos deux nouvelles fonctions de mise en cache
    <InlineCodeBlock>writeCache</InlineCodeBlock> et <InlineCodeBlock>readCache</InlineCodeBlock> dans
    un site web.
  </p>
</BasicSlide>
{#each usageCodes as code, index (index)}
  <BasicSlide>
    <CodeBlock autoAnimateId="usage-code" language="JS" {code} />
  </BasicSlide>
{/each}
