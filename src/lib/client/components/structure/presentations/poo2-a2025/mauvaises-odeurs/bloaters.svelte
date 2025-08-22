<script lang="ts">
  import {
    TextAndImageSlide,
    Bold,
    BoldItalic,
    Italic,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import BloatersImg from './images/bloaters.png';
  import LongMethodImg from './images/long-method.png';
  import LargeClassImg from './images/large-class.png';
  import PrimitiveObsessionImg from './images/primitive-obsession.png';
  import LongParameterListImg from './images/long-parameter-list.png';
  import DataClumpsImg from './images/data-clumps.png';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 3 });
</script>

<TextAndImageSlide src={BloatersImg} alt="Bloaters">
  <p>
    Les <BoldItalic>bloaters</BoldItalic> regroupent les odeurs associés à des morceaux de code, des
    méthodes ou des classes devenus trop volumineuses au fil du temps. Normalement, il s'agit de symptômes
    qui s'accumulent lors du développement.
  </p>
  <p>
    Aucun développeur ne souhaite que son code devienne impraticable, c'est une mauvaise odeur qui
    s'installe plus le développement avance. C'est pourquoi il est nécessaire d'adopter une rigueur
    et une discipline de développement pour éviter ces problèmes.
  </p>
</TextAndImageSlide>
<TextAndImageSlide src={LongMethodImg} alt="Long Method" isImageRight>
  <List>
    {#snippet paragraph()}
      L'odeur <Bold>Longue méthode</Bold> (<Italic>long method</Italic>) se fait sentir lorsqu'une
      méthode est jugée trop longue. La règle du pouce est qu'<Bold
        >une méthode ayant plus de 10 lignes de code</Bold
      > devrait être à surveiller.
    {/snippet}
    <li>
      Réduire la taille de la méthode en effectuant des <Bold>extractions de sous-méthodes</Bold> privées.
    </li>
    <li>
      S'il s'agit d'un algorithme complexe, possiblement
      <Bold>déplacer complètement dans une nouvelle classe</Bold>.
    </li>
    <li>
      Les <Bold>conditions et les boucles</Bold> peuvent facilement être découpées ou simplifiées.
    </li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={LargeClassImg} alt="Large Class" isImageRight>
  <p>
    L'odeur <Bold>Large classe</Bold> (<Italic>large class</Italic>) se fait sentir lorsqu'une
    classe est jugée trop longue.
  </p>
  <List>
    {#snippet paragraph()}
      Un peu comme les méthodes longues, cet odeur se fait sentir au fil que l'application évolue.
      Le développeur continue d'ajouter des fonctionnalités à une classe existante qui fait en sorte
      qu'elle a maintenant beaucoup trop de fonctionnalités.
    {/snippet}
    <li>
      <Bold>Découper</Bold> la classe en <Bold>plusieurs sous-classes</Bold> selon les différentes responsabilités.
    </li>
    <li>
      Si applicable, <Bold>découper de façon hiérarchique</Bold> si des champs se répètent d'une sous-classe
      à l'autre.
    </li>
    <li><Bold>Extraite une interface</Bold> si des comportements similaires.</li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={PrimitiveObsessionImg} alt="Primitive Obsession" isImageRight>
  <p>
    L'odeur <Bold>obsession des primitifs</Bold> (<Italic>primitive obsession</Italic>) apparait
    lorsque le développeur utilise des types primitifs pour des tâches simples (ex. devise
    monétaire).
  </p>
  <p></p>
  <List>
    {#snippet paragraph()}
      Il est plus simple d'ajouter un champ primitif à une classe plutôt que de créer un nouveau
      type (classe) ... C'est pourquoi, dans plusieurs cas, les développeurs simulent des types plus
      complexes avec des types primitifs (ex. la monnaie) simplement par paresse.
    {/snippet}
    <li>
      <Bold>Transformer</Bold> les types primitifs simulant des types plus complexes en classe respective.
    </li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={LongParameterListImg} alt="Long Parameter List" isImageRight>
  <p>
    L'odeur <Bold>trop de paramètres</Bold> (<Italic>long parameter list</Italic>) se fait sentir
    lorsqu'une méthode à plus de 3 paramètres pour son appel.
  </p>
  <List>
    {#snippet paragraph()}
      Normalement symptôme d'une méthode qui <Bold>effectue plus qu'une responsabilité</Bold>. Rend
      l'appel plus complexe et il sera également plus difficile de mettre sous tests.
    {/snippet}
    <li>
      Si vous avez absolument besoin de plusieurs arguments, il peut s'agir peut-être de <Bold>
        donner un objet en argument
      </Bold>.
    </li>
    <li><Bold>Limiter</Bold> à un ou deux arguments.</li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={DataClumpsImg} alt="Data Clumps" isImageRight>
  <List>
    {#snippet paragraph()}
      L'odeur <Bold>blocs de données</Bold> (<Italic>data clumps</Italic>) fait référence à un
      ensemble de variables qui sont relativement indissociables (ex. X et Y). C'est-à- dire que ce
      groupe de variables est toujours ensemble pour fonctionner.
    {/snippet}
    <li><Bold>Grouper les variables</Bold> au sein d'une classe.</li>
    <li>
      Probablement qu'il sera possible de <Bold>réorganiser le code</Bold> de façon à ce que la nouvelle
      classe puisse avoir des services reliées aux données.
    </li>
  </List>
</TextAndImageSlide>
