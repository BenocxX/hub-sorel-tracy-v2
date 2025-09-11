<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 27 });
</script>

<BasicSlide>
  <List>
    <li>
      <Bold>Isolé un bogue</Bold> dans un test unitaire avant de le résoudre. Ceci permettra de ne jamais
      réinjecter le même bogue.
    </li>
    <li>
      Exécuter les tests <Bold>fréquemment</Bold> lors du développement. Surtout dans une phase de refactoring.
      Il faudrait tous les exécuter après chaque petite modification du code.
    </li>
    <li>
      Avoir une <Bold>couverture de tests intéressante</Bold>. Avoir des tests qui couvrent 30% du
      code c'est bien, mais 75% c'est encore mieux !
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List>
    <li>
      Avoir seulement <Bold>une assertion par test</Bold> unitaire autant que possible. Ceci permet de
      cibler le test plus précisément.
    </li>
    <li>
      <Bold>Appliquer les pratiques de refactoring</Bold> et de bonne programmation dans les tests unitaires.
      Les classes de tests ne devraient jamais être sales !
    </li>
    <li>
      Adopter les techniques de <Bold>développement piloté par les tests</Bold> si possible. C'est une
      nouvelle façon de concevoir les applications, mais elles seront beaucoup plus robustes initialement
      avec un design mieux réfléchi. C'est payant à long terme !
    </li>
  </List>
</BasicSlide>
