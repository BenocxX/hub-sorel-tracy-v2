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
  registerInTOC({ page: 3 });
</script>

<BasicSlide>
  <List paragraph="Quelques règles et bonnes pratiques pour la conception de tests unitaires :">
    <li>
      Un test valide le bon fonctionnement d'<Bold>une seule fonctionnalité</Bold> (méthode) d'une seule
      classe (il devient donc très intéressant d'avoir construit notre programme avec des méthodes courtes).
    </li>
    <li>
      Un test doit être <Bold>très court</Bold> (puisqu'il est destiné à tester une petite partie) et
      <Bold>très rapide à exécuter</Bold>. Souvenez-vous que les tests (tous) peuvent être exécutés
      plusieurs fois par heure.
    </li>
    <li>
      Les tests doivent être programmés en appliquant <Bold>les bonnes pratiques</Bold> comme n'importe
      quelle partie du programme. Les tests se doivent d'être très <Bold>sémantiques</Bold> et clairs.
      Si les tests sont sales, c'est mal parti !
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List>
    <li>
      Un test <Bold>ne doit absolument pas altérer le comportement du programme</Bold>. Une fois le
      test terminé, l'état du programme doit être comme il était avant le début du test. Les
      frameworks de tests nous fournissent les outils nécessaires.
    </li>
    <li>
      <Bold>On ne peut pas tout tester par tests unitaires</Bold>. On teste principalement les
      classes métiers. Les classes qui ont une logique d'affaires et qui sont le noyau de
      l'application. Il existe d'autres formes de tests pour les autres aspects (par exemple,
      l'interface graphique n'est pas testée unitairement).
    </li>
    <li>
      Un test unitaire <Bold>ne doit pas manipuler d'éléments externes</Bold>. Par exemple : une
      base de données, une connexion réseau, un fichier sur disque, etc.
    </li>
    <li>
      <Bold>Une méthode d'une classe peut avoir plusieurs tests unitaires rattachés</Bold>. Par
      exemple, si la méthode contient un « if » simple (deux cas). Il faudra donc deux tests pour
      cette méthode pour s'assurer que les deux cas fonctionnent.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <List>
    <li>
      <Bold>Un test sert aussi pour le non-fonctionnement</Bold>. Chaque fonctionnalité testée
      devrait avoir deux cas de tests : un cas positif et un cas négatif. Par exemple, s'assurer que
      le programme lance la bonne erreur si une donnée invalide est fournie. Normalement, on
      s'assure de <Bold>tester les cas limites, les exceptions et les cas hors bornes</Bold>.
    </li>
    <li>
      <Bold>Un test unitaire doit être indépendant</Bold> des autres. Un test ne doit pas appelé d'autre
      ! Vous pouvez écrire des méthodes privées que vos tests appels pour simplifier le code, mais JAMAIS
      un test ne doit en appeler un autre test.
    </li>
  </List>
</BasicSlide>
