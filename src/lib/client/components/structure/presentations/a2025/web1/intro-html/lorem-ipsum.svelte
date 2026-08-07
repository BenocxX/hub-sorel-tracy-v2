<script lang="ts">
  import {
    BasicSlide,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { OutsideLink } from '$lib/client/components/utils';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 27 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      Lorsqu'on a pas de contenu textuel pour remplir les différentes sections d'un site Web, on
      utilise du texte générique agréable à l'oeil et qui simule l'énergie d'un véritable texte.
      Ceci évite d'écrire n'importe quoi partout dans le site.
    {/snippet}
    <li>
      <OutsideLink href="https://www.lipsum.com/">https://www.lipsum.com/</OutsideLink>
    </li>
    <li>
      <OutsideLink href="http://baconipsum.com/">http://baconipsum.com/</OutsideLink>
    </li>
  </List>
</BasicSlide>
