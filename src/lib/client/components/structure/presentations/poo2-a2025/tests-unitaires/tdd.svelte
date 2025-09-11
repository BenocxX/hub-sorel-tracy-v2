<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 25 });
</script>

<BasicSlide>
  <p>
    Le TDD (<Italic>Test Driven Developement</Italic>) créé par Kent Beck est une méthode Agile qui
    apporte une emphase sur le refactoring et la création de tests unitaires.
  </p>
  <List>
    {#snippet paragraph()}
      L'idée est d'avoir une couverture de tests la plus large possible et de
      <Bold>rédiger les tests avant le code</Bold>. La méthode de développement suit donc les étapes
      suivantes :
    {/snippet}
    <li>
      Écrire un test pour une fonctionnalité à programmer (à cette étape le code ne compile pas
      puisque le code à tester n'existe pas);
    </li>
    <li>
      Écrire le code fonctionnel de la fonctionnalité de façon à faire échouer le test (ceci permet
      de valider le test ... si le test réussit alors qu'il devrait échouer, c'est signe qu'il y a
      un problème);
    </li>
    <li>
      Écrire le code de la fonctionnalité qui fait réussir le test (à partir de ce moment, vous avez
      une bonne idée sur la validité de la fonctionnalité);
    </li>
    <li>
      Effectuer des manipulations de refactoring jusqu'à un design de code satisfaisant (il n'y a
      pas de crainte à avoir, le code est sous test).
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    On nomme cette technique "Red - Green - Refactor". Les avantages de cette technique sont : une
    réflexion initiale sur le comportement de la classe, s'assure d'avoir un design de code
    facilement testable (et augmente donc la maintenabilité), favorise les pratiques de refactoring
    et assure d'avoir une couverture de tests très intéressante pour un projet.
  </p>
  <p>Par contre, cette technique demande une nouvelle rigueur de programmation.</p>
</BasicSlide>
