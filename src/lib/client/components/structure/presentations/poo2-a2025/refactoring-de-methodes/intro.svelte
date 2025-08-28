<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    Italic,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <List listType="ol">
    {#snippet paragraph()}
      Le <Italic>refactoring</Italic> consiste en une activité qui <Bold>
        rend le code plus lisible et de meilleure qualité
      </Bold>. Typiquement, un <Italic>refactoring</Italic> se réalise lorsqu'on entre dans un morceau
      de code qu'il faut modifier ou avant de quitter une fonctionnalité.
    {/snippet}
    <li>On prépare le terrain (premier <Italic>refactoring</Italic>) avant la modification;</li>
    <li>On code la modification suivant les bonnes pratiques;</li>
    <li>
      On effectue une dernière phase de <Italic>refactoring</Italic> avant de quitter (incluant le nouveau
      code).
    </li>
  </List>
  <p class="fragment">
    La règle d'or 👍 : <Bold>
      lorsque vous quittez un code, il doit être plus propre qu'à votre arrivée.
    </Bold>
  </p>
</BasicSlide>
