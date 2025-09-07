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
  registerInTOC({ page: 6 });
</script>

<BasicSlide>
  <p>
    La cohésion, au sein d'une classe ou d'une méthode,
    <Bold>est la mesure dans laquelle les éléments sont indissociables</Bold>. C'est-à-dire que les
    données et opérations vont bien ensemble. C'est logique qu'ils soient regroupés ensemble et
    aident à constituer la responsabilité de la classe.
  </p>
  <p>
    On tente d'avoir des classes et des méthodes avec <Bold>une forte cohésion</Bold>. Nous voulons
    le plus possible que les opérations et les données aient le plus de sens possible entre eux.
  </p>
  <p>
    Avoir une forte cohésion contribue à maintenir la responsabilité unique d'une classe et permet
    une meilleure robustesse, une meilleure compréhension du code, une meilleure réutilisation et
    une meilleure maintenabilité générale.
  </p>
</BasicSlide>
<BasicSlide>
  <List paragraph="Quelques types de cohésion :">
    <li>
      <Bold>Logique</Bold> : les opérations sont groupées puisqu'elles font logiquement partie du même
      type de catégorie.
    </li>
    <li>
      <Bold>Temporelle</Bold> : les opérations sont groupées puisqu'elles sont exécutées dans un même
      temps.
    </li>
    <li>
      <Bold>Procédural</Bold> : les opérations sont groupées puisqu'elles forment une chaîne d'opérations
      appartenant à une séquence.
    </li>
    <li>
      <Bold>Informationnelle</Bold> : les opérations sont groupées puisqu'elles opèrent sur les mêmes
      données.
    </li>
    <li>
      <Bold>Fonctionnelle</Bold> : les opérations sont groupées parce qu'elles contribuent toutes à une
      même tâche unique (c'est le type souhaité).
    </li>

    <li>
      <Bold>Aléatoire</Bold> : les opérations sont groupées arbitrairement. Le seul lien qui les unis
      est qu'elles sont organisées ensemble (exemple : classe utilitaire).
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    En respectant les principes de construction de méthode, la cohésion devrait naturellement être
    plus forte. Il faut simplement faire attention pour avoir des opérations au sein d'une même
    méthode qui a un sens entre elles.
  </p>
</BasicSlide>
