<script lang="ts">
  import {
    BasicSlide,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 3 });
</script>

<BasicSlide>
  <p>
    Une norme est un accord international documenté, issu par un consensus de différents groupes de
    travail, qui définit les spécifications techniques et autres critères précis de matériaux, de
    produits, de processus et de services.
  </p>
  <List>
    <li>Issu d'un organisme international, mais non gouvernemental;</li>
    <li>C'est un gage de qualité;</li>
    <li>C'est un gage de crédibilité;</li>
    <li>Formé de critères de qualité objectifs, vérifiables, publics, équitables et crédibles;</li>
    <li>
      Peut-être nécessaire d'avoir une certification ISO pour l'obtention de certains contrats.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    Un standard est sensiblement comme une norme, c'est-à-dire qu'il renferme des caractéristiques
    techniques précises.
  </p>
  <p>
    Par contre, un standard n'est pas issu d'un organisme officiel de normalisation (ISO, BSI, CSA,
    etc.), mais de toutes autres sources.
  </p>
  <p>Ex. Standard Microsoft, Standard Oracle, etc.</p>
</BasicSlide>
