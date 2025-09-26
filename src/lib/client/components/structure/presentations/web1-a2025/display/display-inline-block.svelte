<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 10 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      Il existe également la valeur <Bold>inline-block</Bold> qui permet d'avoir le meilleur des deux
      mondes pour le <Bold>inline</Bold> et le <Bold>bold</Bold>.
    {/snippet}
    <li>
      Un élément <Bold>inline-block</Bold> se comportera comme un élément <Bold>inline</Bold>, mais
      on peut y appliquer une dimension définie!
    </li>
  </List>
  <p>
    <Italic>
      ATTENTION: Les espaces peuvent causer certains problèmes avec la valeur
      <Bold>inline-block</Bold>.
    </Italic>
  </p>
</BasicSlide>
