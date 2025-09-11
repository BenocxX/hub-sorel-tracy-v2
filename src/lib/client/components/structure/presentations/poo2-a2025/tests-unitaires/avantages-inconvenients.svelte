<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 6 });
</script>

<BasicSlide>
  <List
    paragraph="Les avantages d'utiliser les tests unitaires dans un projet ne sont pas négligeables. En voici quelques-unes :"
  >
    <li>
      Permets de <Bold>sécuriser les pratiques de refactoring</Bold>. On exécute tous nos tests à
      chaque petit pas de refactoring pour s'assurer que rien n'est brisé. Si quelque chose brise,
      on est fixé très rapidement et c'est facilement corrigible. On dit que les tests unitaires
      fournissent un <Bold>filet de sécurité</Bold>.
    </li>
    <li>
      <Bold>Augmente la confiance</Bold> en notre application. Avec des tests qui s'occupent de tous
      les aspects logiques de l'application, la confiance dans le bon fonctionnement du produit ne peut
      que grimper. Vous ne marchez plus sur des œufs.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List>
    <li>
      <Bold>Confirme la compréhension des spécifications</Bold>. Lorsqu'on rédige des tests, on
      s'assure de respecter l'énoncé des fonctionnalités. Si elles n'ont pas été bien comprises, les
      questions vont surgir à cette étape. Il y'a des cas (surtout des cas négatifs) dont personne
      n'a encore pensé au résultat.
    </li>
    <li>
      Dans le même ordre d'idée, les tests <Bold>permettent de détecter des erreurs logiques</Bold> très
      tôt dans le développement.
    </li>
    <li>
      <Bold>Véhicule les spécifications dans le code</Bold>. Pas besoin d'une documentation
      exhaustive de la logique d'affaire avec des tests unitaires. S'ils ont été bien écrits,
      seulement lire le nom du test devrait en dire long sur la spécification à la base de ce
      dernier.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List>
    <li>
      <Bold>Détection d'erreurs très tôt</Bold>. En effet, les tests aident considérablement à
      détecter les bogues de l'application rapidement. Par exemple, les
      <InlineCodeBlock>NullPointerException</InlineCodeBlock>. Plusieurs disent qu'un bogue est un
      test oublié !
    </li>
    <li>
      <Bold>Sers de terrain d'exploration</Bold>. Vous voulez savoir ce que ça fait si on lance un
      <InlineCodeBlock>null</InlineCodeBlock> ou un nombre négatif dans une méthode ? C'est le temps
      de le découvrir dans un test. Vous pouvez donc plus facilement explorer les limites de vos algorithmes.
    </li>
    <li>
      <Bold>Tester les fonctionnalités sans exécuter le programme complet</Bold>. Sans doute le plus
      gros avantage. Tester les programmes sans avoir à l'exécuter, saisir les données, etc.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List paragraph="Rien n'est parfait ... Les tests unitaires ont également des inconvénients.">
    <li>
      <Bold>Les tests sont du code</Bold>. Ils sont donc sujets aux erreurs de programmation comme
      n'importe quelle section du logiciel. C'est-à-dire, un test peut être bogué ! C'est pourquoi
      il faut être rigoureux à faire des très petits tests. Difficile de faire une erreur dans 2-3
      lignes de codes.
    </li>
    <li>
      <Bold>Très "plate" à maintenir</Bold>. Puisque les tests sont liés directement avec une
      classe. Si vous modifiez une méthode de celle-ci (par exemple, le nombre de paramètres ou son
      nom), il faut penser à la faire également dans les tests sinon ils ne compileront pas. Si on
      ajoute une méthode, il faut aller créer les tests adéquats.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List>
    <li>
      <Bold>Souvent difficile</Bold>. Créer des tests très petits qui respectent les règles est une
      activité qui peut devenir rapidement difficile. Il arrivera tôt ou tard un cas qui sera
      particulièrement difficile à tester et la tentation de laisser-faire sera très grande ...
    </li>
    <li>
      <Bold>Une nouvelle rigueur de développement</Bold>. Pour accommoder certains tests, il faudra
      peut-être modifier la façon dont les classes sont codées. Il ne faut pas avoir peur de
      modifier le code métier afin de le rendre « testable » (qui d'ailleurs est un critère de
      qualité de la norme ISO 9126). Il sera tout simplement plus propre naturellement. On nomme
      cette pratique Design for Testability.
    </li>
  </List>
</BasicSlide>
