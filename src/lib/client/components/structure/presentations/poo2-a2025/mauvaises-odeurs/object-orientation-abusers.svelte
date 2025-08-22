<script lang="ts">
  import {
    TextAndImageSlide,
    Bold,
    Italic,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    InlineCodeBlock,
  } from '$lib/client/components/revealjs/custom';
  import OOAbusersImg from './images/oo-abusers.png';
  import SwitchStatementsImg from './images/switch-statements.png';
  import TemporaryFieldImg from './images/temporary-field.png';
  import RefusedBequestImg from './images/refused-bequest.png';
  import AlternativeClassesWithDifferentInterfacesImg from './images/alternative-classes-with-different-interfaces.png';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 9 });
</script>

<TextAndImageSlide src={OOAbusersImg} alt="Object Orientation Abusers">
  <p>
    Ces <Bold>abuseurs</Bold> (<Italic>abusers</Italic>) regroupent les odeurs qui perturbent les
    principes orientés-objets soit en étant incomplet ou incorrect.
  </p>
  <p>
    Il peut s'agir de mauvaise utilisation de l'héritage ou d'incompréhension du moteur objet. Ces
    odeurs peuvent être particulièrement toxique dans la mesure qu'elles peuvent affecter
    l'architecture de l'application dans son ensemble.
  </p>
</TextAndImageSlide>
<TextAndImageSlide src={SwitchStatementsImg} alt="Switch Statements" isImageRight>
  <p>
    L'odeur <Bold>condition switch</Bold> (<Italic>switch statement</Italic>) se fait sentir
    lorsqu'il y a un <InlineCodeBlock>switch</InlineCodeBlock> ou une séquence de
    <InlineCodeBlock>if</InlineCodeBlock> complexe.
  </p>
  <List>
    {#snippet paragraph()}
      L'utilisation de <InlineCodeBlock>switch</InlineCodeBlock> dans un programme POO devrait être très
      rare. Normalement, un même <InlineCodeBlock>switch</InlineCodeBlock> va se retrouver à plusieurs
      endroits dans le code se qui complexifie son entretien.
    {/snippet}
    <li>
      Un <InlineCodeBlock>switch</InlineCodeBlock> indique souvent l'occasion ratée pour faire une
      <Bold>architecture polymorphe</Bold>.
    </li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={TemporaryFieldImg} alt="Temporary Field" isImageRight>
  <p>
    L'odeur <Bold>propriété temporaire</Bold> (<Italic>temporary field</Italic>) apparait lorsque
    des variables d'instance sont vides la plupart du temps ou utiliser uniquement une méthode.
  </p>
  <List>
    {#snippet paragraph()}
      Souvent symptôme d'un algorithme qui nécessite plusieurs variables qui se sont retrouvés comme
      propriétés de classe à un moment.
    {/snippet}
    <li>
      Ces variables peuvent être déplacées dans une classe avec leur traitements associés ou
      carrément être éliminées pour être utilisées comme variables de méthode.
    </li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={RefusedBequestImg} alt="Refused Bequest" isImageRight>
  <p>
    L'odeur <Bold>héritage inapproprié</Bold> (<Italic>refused bequest</Italic>) existe dès qu'on
    utilise l'héritage pour réutiliser des variables mais que les enfants n'ont pas de lien
    ensemble.
  </p>
  <List>
    {#snippet paragraph()}
      La raison de créer une hiérarchie de classes va au-delà de la simple réutilisation. Il est
      nécessaire qu'il existe un <Bold>sens sémantique</Bold> à la famille pour réutiliser au maximum
      les fonctionnalités du parent.
    {/snippet}
    <li>
      La solution consiste à <Bold>revoir le modèle de classes</Bold> et mieux organiser les hiérarchies.
    </li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide
  src={AlternativeClassesWithDifferentInterfacesImg}
  alt="Alternative Classes with Different Interfaces"
  isImageRight
>
  <List>
    {#snippet paragraph()}
      L'odeur <Bold>classe alternative avec interfaces différentes</Bold> (
      <Italic>alternative class with different interfaces</Italic>) se fait sentir lorsque plusieurs
      classes font les même genre de traitement mais que l'interface est différent (le nom des
      méthodes, le style des appels, etc.).
    {/snippet}
    <li>
      La solution consiste à <Bold>renommer les méthodes</Bold> pour avoir une utilisation identique
      pour simplifier la compréhension.
    </li>
    <li>Idéalement, <Bold>injecter une interface</Bold> pour s'assurer de la signature.</li>
  </List>
</TextAndImageSlide>
