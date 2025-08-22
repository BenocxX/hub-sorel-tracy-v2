<script lang="ts">
  import {
    TextAndImageSlide,
    Bold,
    Italic,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import ChangePreventersImg from './images/change-preventers.png';
  import DivergentChangesImg from './images/divergent-change.png';
  import ShotgunSurgeryImg from './images/shotgun-surgery.png';
  import ParallelInheritanceHierarchiesImg from './images/parallel-inheritance-hierarchies.png';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 14 });
</script>

<TextAndImageSlide src={ChangePreventersImg} alt="Change preventers">
  <p>
    Ces <Bold>preventers</Bold> regroupent les odeurs qui rendent complexes les modifications du code.
    Traditionnellement, implique plusieurs changements dans le code pour modifier un élément.
  </p>
  <p>
    Ces odeurs sont dangereuses car elle peuvent rendre le travail de maintenance exponentiel. Si
    l'application est mal programmé, des petits correctifs pourraient impacter plusieurs
    fonctionnalités et rendre l'application potentiellement à risque de nouveaux bogues.
  </p>
</TextAndImageSlide>
<TextAndImageSlide src={DivergentChangesImg} alt="Divergent Changes" isImageRight>
  <p>
    L'odeur <Bold>changement divergents</Bold> (<Italic>divergent changes</Italic>) existe dès lors
    que plusieurs changement sont nécessaires dans une classe pour modifier une méthode.
  </p>
  <List>
    {#snippet paragraph()}
      Normalement due à un manque de refactoring au sein des méthodes.
    {/snippet}
    <li><Bold>Appliquer les bonnes pratiques</Bold> devraient limiter ces odeurs.</li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={ShotgunSurgeryImg} alt="Shotgun Surgery" isImageRight>
  <p>
    L'odeur <Bold>chirurgie au shotgun</Bold> (<Italic>shotgun surgery</Italic>) se fait sentir
    lorsqu'un changement nécessite plusieurs petits changements dans plusieurs classes.
  </p>
  <List>
    {#snippet paragraph()}
      Un peu le même principe que les changements divergents, mais au niveau de l'architecture de
      classes.
    {/snippet}
    <li><Bold>Grouper les fonctionnalités</Bold> par responsabilité.</li>
    <li><Bold>Limiter les changements divergents</Bold> devrait aider.</li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide
  src={ParallelInheritanceHierarchiesImg}
  alt="Parallel Inheritance Hierarchies"
  isImageRight
>
  <p>
    L'odeur <Bold>hiérarchies parallèles</Bold> (<Italic>parallel inheritance hierarchies</Italic>)
    existe lorsqu'il y a deux familles de classes qui croient de façon simultanée.
  </p>
  <List>
    {#snippet paragraph()}
      Lorsque vous créer une sous-classe pour une famille et que vous devez créer également une
      autre sous-classe dans une autre famille en parallèle.
    {/snippet}
    <li>La solution est de <Bold>combiner les deux familles</Bold> de classes en une seule.</li>
  </List>
</TextAndImageSlide>
