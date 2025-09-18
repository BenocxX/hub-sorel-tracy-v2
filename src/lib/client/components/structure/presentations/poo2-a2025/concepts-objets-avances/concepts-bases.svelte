<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    Underline,
    List,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <List>
    <li>
      Une <Bold>classe</Bold> est un regroupement de données logiques offrant certains services publics.
      Une classe constitue un plan ou un moule qui va servir à la création d’un objet.
    </li>
    <li class="fragment">
      Un <Bold>objet</Bold> (ou une <Bold>instance</Bold>) représente une version tangible
      (malléable) d’une classe. Le résultat de la mise en oeuvre du plan ou du moule. Par exemple,
      l’objet <InlineCodeBlock>arnold</InlineCodeBlock> issu de la classe
      <InlineCodeBlock>Etudiant</InlineCodeBlock>. La plupart du temps, nous manipulons les objets
      plutôt que les classes.
    </li>
    <li class="fragment">
      Une <Bold>propriété</Bold> (ou variable d’instance) est une donnée appartenant à la classe qui
      aura une valeur pouvant être différente par objet. On lui attribue un <Bold>type</Bold> (qui peut
      être d’une autre classe), une <Bold>portée</Bold> et un nom <Bold>sémantique</Bold>.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List>
    <li>
      Une <Bold>propriété statique</Bold> (ou variable de classe) est une donnée qui appartient à la
      classe et qui sera partagée par tous les objets issus de cette classe. Si un objet modifie la donnée,
      cette modification sera reflétée dans tous les autres objets. Ces données résident avec le plan.
      On utilise le mot-clé <InlineCodeBlock>static</InlineCodeBlock> pour identifier une propriété comme
      telle.
    </li>
    <li class="fragment">
      Une <Bold>méthode</Bold> est une fonction à l’intérieur d’une classe qui détermine un service offert
      par celle-ci. On lui attribue un <Bold>type de retour</Bold>, une <Bold>portée</Bold>, un
      <Bold>nom sémantique</Bold> et une <Bold>liste de paramètres</Bold> si nécessaire.
    </li>
    <li class="fragment">
      Un <Bold>constructeur</Bold> est une méthode spéciale à l’intérieur d’une classe qui constitue
      les étapes de création d’un objet depuis cette classe. C’est la recette pour créer un objet. Cette
      méthode n’est jamais appelée directement, pour lui faire appel, on utilise le mot clé
      <InlineCodeBlock>new</InlineCodeBlock>. Par exemple,
      <InlineCodeBlock>Etudiant bruce = new Etudiant("Bruce", "Wayne")</InlineCodeBlock>;
    </li>
    <li class="fragment">
      Une <Bold>instanciation</Bold> est l’action de créer un objet depuis une classe en utilisant normalement
      un constructeur (donc, depuis l’opérateur <InlineCodeBlock>new</InlineCodeBlock>).
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List>
    {#snippet paragraph()}
      Le <Bold>principe d’encapsulation</Bold> (visibilité ou portée) fait référence à l’accessibilité
      des propriétés et des méthodes d’une classe. Il existe quatre niveaux :
    {/snippet}
    <li class="fragment">
      <Bold>Privé</Bold> (<InlineCodeBlock>private</InlineCodeBlock>) : l’élément ciblé est visible
      uniquement depuis l’intérieur de la classe elle-même.
    </li>
    <li class="fragment">
      <Bold>Public</Bold> (<InlineCodeBlock>public</InlineCodeBlock>) : l’élément ciblé est visible
      de partout !
    </li>
    <li class="fragment">
      <Bold>Protégé</Bold> (<InlineCodeBlock>protected</InlineCodeBlock>) : l’élément ciblé est
      visible depuis l’intérieur de la classe, tous les enfants de celle-ci et également toutes les
      autres classes du même package.
    </li>
    <li class="fragment">
      <Bold>Package</Bold> : l’élément ciblé est visible de partout au sein du même package.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List>
    <li>
      Une <Bold>signature de méthode</Bold> fait référence à la composition du
      <Underline>nom</Underline> de la méthode, de son <Underline>nombre de paramètres</Underline>,
      du <Underline>type de ses paramètres</Underline> et de
      <Underline>l’ordre des paramètres</Underline>. Par exemple :
      <InlineCodeBlock>calculatePay(String, int, int, double)</InlineCodeBlock>
    </li>
    <li class="fragment">
      Une <Bold>surcharge de méthode</Bold> est la définition d’une méthode qui a le
      <Underline>même nom</Underline> qu’une autre à l’intérieur de la même classe, mais que la signature
      des paramètres est différente. Par exemple :
      <InlineCodeBlock>calculatePay(String, int, int, double)</InlineCodeBlock> et
      <InlineCodeBlock>calculatePay(String, int, int)</InlineCodeBlock>
    </li>
    <li class="fragment">
      <Bold>L’héritage</Bold> (généralisation / spécialisation) est l’un des fondements du paradigme
      objet qui permet, entre autres, la réutilisation du code. Il s’agit de créer une hiérarchie de
      classes issue d’une même famille logique. Les données et méthodes publiques (ou protégées) sont
      partagées entre parent et enfants.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List>
    <li>
      La <Bold>redéfinition de méthode</Bold> est la définition d’une méthode qui a la
      <Underline>même signature</Underline> (nom et paramètres) qu’une méthode visible (publique ou protégée)
      d’un des parents de la hiérarchie. Ceci à pour effet d’écraser le comportement d’une méthode parente
      par une méthode propre à un enfant.
    </li>
    <li class="fragment">
      La <Bold>super classe</Bold> constitue le parent initial de toutes les classes créées. En Java,
      elle se nomme <InlineCodeBlock>Object</InlineCodeBlock>. Elle renferme des méthodes souvent
      redéfinies telles que <InlineCodeBlock>Equals</InlineCodeBlock> et
      <InlineCodeBlock>toString</InlineCodeBlock> qui permettent respectivement de définir la notion
      d’égalité entre deux objets issus d’une même classe et de définir la représentation textuelle (chaîne
      de caractères) de l’objet.
    </li>
    <li class="fragment">
      Un <Bold>accesseur</Bold> (getter) est une méthode qui permet d’obtenir le contenu d’une propriété.
      On nomme ces méthodes par le nom de la propriété préfixé du mot
      <InlineCodeBlock>get</InlineCodeBlock>.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List>
    <li>
      Un <Bold>mutateur</Bold> (setter) est une méthode qui permet de définir le contenu d’une propriété.
      On nomme ces méthodes par le nom de la propriété préfixé du mot
      <InlineCodeBlock>set</InlineCodeBlock>.
    </li>
    <li class="fragment">
      Un <Bold>prédicat</Bold> est une méthode qui retourne une valeur de type booléenne. On nomme ces
      méthodes par le nom de la propriété préfixé du mot <InlineCodeBlock>is</InlineCodeBlock>.
    </li>
    <li class="fragment">
      <Bold>L’abstraction générale</Bold> d’une classe est l’idée de vouloir cacher son fonctionnement
      interne que ce soit au niveau des propriétés ou des méthodes. On rend disponibles uniquement les
      services que devrait fournir la classe.
    </li>
  </List>
</BasicSlide>
