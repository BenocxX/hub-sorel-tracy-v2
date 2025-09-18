<script lang="ts">
  import {
    BasicSlide,
    List,
    Bold,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 13 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      L'aptitude d'un logiciel à fonctionner dans un environnement matériel ou logiciel qui diffère
      de son environnement initial.
    {/snippet}
    <li>
      <Bold>Adaptabilité</Bold>. Capacité de migration du système (par exemple, transfert d'un
      environnement de test vers un serveur de production).
    </li>
    <li><Bold>Installabilité</Bold>. Caractérise l'effort requis pour installer le logiciel.</li>
    <li>
      <Bold>Conformité aux règles de portabilité</Bold>. Capacité de faire fonctionner le logiciel
      dans un environnement non dédié en coexistence.
    </li>
    <li>
      <Bold>Interchangeabilité</Bold>. Facilité de remplacement (de substitution) pour un autre
      logiciel similaire.
    </li>
  </List>
</BasicSlide>
