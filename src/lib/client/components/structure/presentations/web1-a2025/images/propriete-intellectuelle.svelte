<script lang="ts">
  import {
    BasicSlide,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import AttentionSubTitle from '$lib/client/components/revealjs/custom/subtitles/attention-sub-title.svelte';
  import { OutsideLink } from '$lib/client/components/utils';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 5 });
</script>

<BasicSlide>
  {#snippet subTitleComponent()}
    <AttentionSubTitle />
  {/snippet}
  <p>
    Soyez conscient qu'une image appartient à quelqu'un! Vous ne pouvez pas prendre n'importe quelle
    image et l'afficher sur votre site sans le consentement du propriétaire.
  </p>
  <p>
    C'est un domaine assez complexe et nébuleux surtout depuis l'apparition des réseaux sociaux.
  </p>
</BasicSlide>
<BasicSlide>
  <List paragraph="Voici deux sites web qui proposent des images gratuites et libres de droits: ">
    <li>
      <OutsideLink href="https://www.pexels.com/">Pexels</OutsideLink>
    </li>
    <li>
      <OutsideLink href="https://unsplash.com/">Unsplash</OutsideLink>
    </li>
  </List>
</BasicSlide>
