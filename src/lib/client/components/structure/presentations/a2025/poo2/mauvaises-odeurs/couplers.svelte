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
  import CouplersImg from './images/couplers.png';
  import FeatureEnvyImg from './images/feature-envy.png';
  import InappropriateIntimacyImg from './images/inappropriate-intimacy.png';
  import MessageChainImg from './images/message-chains.png';
  import MiddleManImg from './images/middle-man.png';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 25 });
</script>

<TextAndImageSlide src={CouplersImg} alt="Couplers">
  <p>
    Ces <Bold>couplers</Bold> regroupent les odeurs qui représente des classes qui sont couplées ou déléguées
    de façon excessives.
  </p>
  <p>
    Le <Bold>couplage</Bold> représente la mesure dans laquelle une classe est dépendante d'une autre.
    L'idée est d'avoir un bonne balance entre la dépendance et l'utilisabilité de la classe.
  </p>
  <p>
    Normalement symptôme d'une mauvaise architecture de classes qui peut devenir dangereuse lors de
    l'entretien.
  </p>
</TextAndImageSlide>
<TextAndImageSlide src={FeatureEnvyImg} alt="Feature Envy" isImageRight>
  <p>
    L'odeur <Bold>jalousie de fonctionnalités</Bold> (<Italic>feature envy</Italic>) existe dès
    d'une classe accède les données ou les méthodes d'une autre classe plus que les sienne.
  </p>
  <List>
    {#snippet paragraph()}
      Arrive normalement lorsque les propriétés ne sont pas groupé avec les traitements.
    {/snippet}
    <li><Bold>Déplacer les traitements</Bold> jaloux vers la classe enviée.</li>
    <li>Peut être ignorer si la classe concernée fait partie d'un patron de conception.</li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={InappropriateIntimacyImg} alt="Inappropriate Intimacy" isImageRight>
  <List>
    {#snippet paragraph()}
      L'odeur <Bold>intimité inappropriée</Bold> (<Italic>inappropriate intimacy</Italic>) se fait
      sentir lorsqu'une classe peut accéder une variable d'une autre ou une méthode interne.
    {/snippet}
    <li>
      S'assurer que les <Bold>variables sont privées</Bold>. Respecter l'encapsulation devrait
      régler le problème.
    </li>
    <li>
      Les <Bold>méthodes internes</Bold> d'une classe qui ne forme pas l'interface des services devraient
      être <Bold>privées</Bold>.
    </li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={MessageChainImg} alt="Message chain" isImageRight>
  <p>
    L'odeur <Bold>chaîne de messages</Bold> (<Italic>message chain</Italic>) existe lorsque vous
    retrouver un code du style <InlineCodeBlock>a.b().c().d()</InlineCodeBlock>.
  </p>
  <List>
    {#snippet paragraph()}
      Dans ce cas, il existe beaucoup trop d'appel pour exécuter un traitement ce qui créer une
      grande dépendance.
    {/snippet}
    <li><Bold>Déléguer</Bold> l'appel de la chaîne à une méthode.</li>
    <li>
      Selon le cas, il est possible de <Bold>déplacer des méthodes</Bold> pour simplifier l'appel.
    </li>
  </List>
</TextAndImageSlide>
<TextAndImageSlide src={MiddleManImg} alt="Middle Man" isImageRight>
  <p>
    L'odeur <Bold>homme au milieu</Bold> (<Italic>middle man</Italic>) existe lorsque pour utiliser
    une fonctionnalité il faut absolument utiliser une autre classe.
  </p>
  <List>
    {#snippet paragraph()}
      Peut être le résultat d'une délégation excessive pour éliminer les chaînes de messages.
    {/snippet}
    <li><Bold>Supprimer</Bold> la classe de délégation.</li>
  </List>
</TextAndImageSlide>
