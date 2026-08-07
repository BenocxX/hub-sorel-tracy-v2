<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 8 });
</script>

<BasicSlide>
  <p>
    L'héritage est l'idée de constituer une <Bold>hiérarchie de classes</Bold> où l'une des classes est
    considérée comme un "parent" (mère) et les autres sont des "enfants" (filles) de cette classe. On
    parle aussi de généralisation – spécialisation.
  </p>
  <p>
    Les classes enfants vont <Bold>hériter</Bold> de toutes les méthodes et propriétés accessibles (selon
    la portée publique et protégée) de son parent. Ce principe contribue à la
    <Bold>réutilisation de code</Bold> tant reconnu du paradigme orienté-objet.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    La classe mère est en quelque sorte le <Bold>gabarit</Bold> des classes enfants. Il s'agit de la
    forme de base d'une entité quelconque. Elle peut être enrichie (spécialisée) par le biais des classes
    filles.
  </p>
  <List>
    {#snippet paragraph()}
      Concrètement, la classe enfant <Bold>EST</Bold> une implémentation de la classe parente auquel
      s'est ajouté une ou plusieurs "spécialisations" telles que :
    {/snippet}
    <li>Des services supplémentaires</li>
    <li>Des propriétés supplémentaires</li>
    <li>Des redéfinitions de méthodes</li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    D'ailleurs, de base, toutes les classes Java héritent automatiquement de la classe
    <InlineCodeBlock>Object</InlineCodeBlock>. C'est pourquoi le paradigme orienté-objet fonctionne
    ! Puisque toutes les classes définies dans un projet SONT des objets (puisqu'elle hérite de
    Object) et peuvent donc être gérées par le moteur interne.
  </p>
  <p>
    Ces pourquoi tous les objets ont de base des méthodes que le programmeur n'a pas écrites telle
    que <InlineCodeBlock>toString</InlineCodeBlock>, <InlineCodeBlock>equals</InlineCodeBlock>,
    <InlineCodeBlock>hashCode</InlineCodeBlock>, etc. Il s'agit de méthodes notamment utilisées par
    le moteur interne de gestion des objets.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Pour appliquer le rapport d'héritage, on utilise le mot-clé
    <InlineCodeBlock>extends</InlineCodeBlock> suivit du nom de la classe parente. En Java, on peut hérité
    uniquement d'une classe à la fois.
  </p>
  <CodeBlock
    language="Java"
    code={`public class Dog extends Animal {
    private String breed;
    
    ...
}`}
  />
  <p class="fragment">
    Attention ! Si la classe parente contient un constructeur avec des paramètres, il est
    obligatoire de fournir un constructeur à la sous-classe qui va appeler celui du parent avec les
    bons arguments.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    À l'intérieur d'une classe enfant, il est possible d'avoir accès au contexte du parent
    (variables et méthodes accessibles) en utilisant super.
  </p>
  <CodeBlock
    language="Java"
    code={`public class Dog extends Animal {
    public Dog(String name) {
        // Appel le constructeur de Animal avec le nom en argument.
        super(name);
    }

    ... 

}`}
  />
</BasicSlide>
