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
  registerInTOC({ page: 3 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      Il n'y a <Bold>aucun désavantage</Bold> à utiliser un gestionnaire de source. Peu importe s'il
      s'agit d'un projet seul ou en équipe, peu importe la taille de l'équipe, peu importe le projet,
      un gestionnaire est toujours avantageux et même essentiel. Voici les objectifs d'un gestionnaire
      de source :
    {/snippet}
    <li>Modification du code facile</li>
    <li>Différentes versions pour les fichiers et les projets</li>
    <li>Imputabilité et non-répudiation des changements (qui fait quoi)</li>
    <li>Historique sur l'ensemble des sources</li>
    <li>Possibilité de revenir en arrière à tout moment</li>
    <li>Suivi complet du projet</li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    Adopter un gestionnaire de source octroie une <Bold>productivité</Bold> accrue et une grande
    <Bold>flexibilité</Bold> dans le développement. Par le fait même, il favorise également les pratiques
    de refactoring et la mise sous tests.
  </p>
  <p>
    Les systèmes ouverts en ligne comme GitHub pousse le concept plus loin en favorisant le partage
    d'informations, le développement <Italic>open source</Italic> et la résolution de problème par des
    pairs.
  </p>
  <p>
    Il existe de nombreux gestionnaires de source telle que SVN, CVS, Mercurial, BitBucket,
    Microsoft Team Fundation, Git, etc. Certains sont gratuits, d'autres sont payants. Tout dépend
    de la réalité de l'entreprise et des technologies employées. La présentation se porte
    précisément sur <Bold>Git</Bold> avec <Bold>GitHub</Bold>.
  </p>
</BasicSlide>
