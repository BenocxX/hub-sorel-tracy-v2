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
  import DispensablesImg from './images/dispensables.png';
  import CommentsImg from './images/comments.png';
  import DuplicateCodeImg from './images/duplicate-code.png';
  import LazyClassImg from './images/lazy-class.png';
  import DataClassImg from './images/data-class.png';
  import DeadCodeImg from './images/dead-code.png';
  import SpeculativeGeneralityImg from './images/speculative-generality.png';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 18 });
</script>

<TextAndImageSlide src={DispensablesImg} alt="Dispensables">
  <p>
    Ces <Bold>dispensables</Bold> regroupent les odeurs qui représente des éléments du code superflus,
    inutiles ou mort.
  </p>
  <p>
    Plusieurs éléments du code source deviennent obsolète ou complète inutile à un moment et ces
    éléments devraient être nettoyer pour contribuer à un code plus propre.
  </p>
  <p>
    Ces éléments morts rajoutent une complexité de compréhension et de maintenance.
    <Bold>Les éliminer demeure toujours la meilleur solution</Bold>.
  </p>
</TextAndImageSlide>
<TextAndImageSlide src={CommentsImg} alt="Comments" isImageRight>
  <List>
    {#snippet paragraph()}
      L'odeur <Bold>commentaires</Bold> (<Italic>comments</Italic>) se fait sentir lorsqu'il y a des
      commentaires superflus dans le code source.
    {/snippet}
    <li>
      Lorsqu'un commentaire explique une méthode, c'est que le nom n'est pas assez sémantique.
    </li>
    <li>
      Lorsqu'un traitement au sein d'une méthode présente un commentaire explicatif, c'est qu'une
      méthode peut être extraite.
    </li>
    <li>Un code commenté est un code mort. Supprimer complètement.</li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={DuplicateCodeImg} alt="Duplicate code" isImageRight>
  <List>
    {#snippet paragraph()}
      L'odeur <Bold>code dupliqué</Bold> (<Italic>duplicate code</Italic>) existe lorsqu'un morceau
      de code se trouvent à plusieurs endroits (identique ou similaire).
    {/snippet}
    <li>Effectuer une extraction de méthode règle normalement le problème.</li>
    <li>
      S'il existe des changements mineurs d'un morceau à l'autre, injecter un paramètre à la méthode
      extraite.
    </li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={LazyClassImg} alt="Lazy class" isImageRight>
  <List>
    {#snippet paragraph()}
      L'odeur <Bold>classe paresseuse</Bold> (<Italic>lazy class</Italic>) se fait sentir lorsqu'une
      classe devient tellement petite et si peu utiliser qu'elle peut être jointe à une autre.
      Garder des classes inutiles ajoutent une complexité à l'application.
    {/snippet}
    <li><Bold>Éliminer la classe</Bold> si complètement inutile.</li>
    <li>
      <Bold>Joindre les fonctionnalités</Bold> et propriétés à une autre classe si applicable.
    </li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={DataClassImg} alt="Data class" isImageRight>
  <p>
    L'odeur <Bold>classe de données</Bold> (<Italic>data class</Italic>) existe lorsqu'une classe
    existe uniquement pour conserver des données et les méthodes d'accès à ces variables. Il
    n'existe aucun traitement sur les propriétés.
  </p>
  <List>
    {#snippet paragraph()}
      Le paradigme POO excelle lorsque les traitements sont liés à leur variables. Avoir des classes
      de données uniquement s'attribue d'avantage à des structures que des classes.
    {/snippet}
    <li><Bold>Intégrer les traitements</Bold> associés à ces variables dans la classe.</li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={DeadCodeImg} alt="Dead code" isImageRight>
  <List>
    {#snippet paragraph()}
      L'odeur <Bold>code mort</Bold> (<Italic>dead code</Italic>) se fait sentir lorsqu'il existe
      une méthode, une variable, une propriété ou une classe complètement inutilisé dans
      l'application.
    {/snippet}
    <li>
      Votre code source n'est pas un cimetière,
      <Bold>éliminer tout code qui n'est pas utilisé</Bold> pour assurer de la bonne maintenabilité.
    </li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={SpeculativeGeneralityImg} alt="Speculative Generality" isImageRight>
  <p>
    L'odeur <Bold>généralisation spéculative</Bold> (<Italic>speculative generality</Italic>) existe
    un peu comme du code mort, mais qui a été développer « juste au cas » pour un futur spéculatif.
  </p>
  <List>
    {#snippet paragraph()}
      Faire attention à ces pratiques qui peuvent coûter cher au développement. Si du code ne
      contribue pas à une fonctionnalité en utilisation, ce code est inutile dans le contexte de
      l'application.
    {/snippet}
    <li><Bold>Réduire</Bold> les hiérarchies inutiles.</li>
    <li><Bold>Combiner</Bold> des classes si applicable.</li>
    <li><Bold>Supprimer</Bold> les méthodes inutilisées.</li>
  </List>
</TextAndImageSlide>
