<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 8 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      Capacité qu'ont les fonctionnalités d'un logiciel à répondre aux exigences implicites et
      explicites des utilisateurs.
    {/snippet}
    <li>
      <Bold>Aptitude</Bold>. Il s'agit de la pertinence des opérations. L'idée d'effectuer les
      bonnes opérations au moment opportun.
    </li>
    <li>
      <Bold>Exactitude</Bold>. Les résultats issus des opérations du logiciel doivent être précis et
      justes.
    </li>
    <li>
      <Bold>Interopérabilité</Bold>. Concerne la capacité d'un composant du logiciel pour interagir
      avec d'autres composants ou d'autres systèmes.
    </li>
    <li>
      <Bold>Conformité réglementaire</Bold>. Le logiciel doit respecter les lois, les règlements et
      les normes en vigueur sujettes à concerner le déroulement des opérations (par exemple, les
      lois de protection des renseignements personnels).
    </li>
    <li><Bold>Sécurité</Bold>. Concerne la restriction d'accès aux fonctionnalités du logiciel.</li>
  </List>
</BasicSlide>
