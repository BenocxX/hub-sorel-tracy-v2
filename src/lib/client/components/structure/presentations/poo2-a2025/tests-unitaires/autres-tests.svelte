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
  registerInTOC({ page: 30 });
</script>

<BasicSlide>
  <List>
    <li>
      <Bold>Tests fonctionnels</Bold>. Ce sont des tests d'exécution et d'interface. Ici, on démarre
      l'application et on appuie sur les boutons, on saisie des données, etc. On simule un
      utilisateur final.
    </li>
    <li>
      <Bold>Tests de performance</Bold>. Utilisés pour s'assurer d'avoir un niveau de performance
      qui respecte les spécifications (temps de réponse, consommation de mémoire / CPU). Atteignable
      partiellement avec les tests unitaires (<InlineCodeBlock>@Timeout(5)</InlineCodeBlock>)
    </li>
    <li>
      <Bold>Tests de stress</Bold>. Tests destinés à analyser le comportement d'une application sous
      pression (une charge lourde d'utilisation).
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List>
    <li>
      <Bold>Tests d'intégration (ou de régression)</Bold>. Permettent de tester si l'assemblage de
      plusieurs sections du code (de plusieurs équipes par exemple) fonctionne. Les tests unitaires
      peuvent contribuer.
    </li>
    <li>
      <Bold>Tests d'acceptation</Bold>. Ce sont des tests qui valident, aux yeux du client, si
      l'application est acceptable ou non. Il est évidemment recommandé d'avoir des tests unitaires
      conformes avec les tests d'acceptation.
    </li>
  </List>
</BasicSlide>
