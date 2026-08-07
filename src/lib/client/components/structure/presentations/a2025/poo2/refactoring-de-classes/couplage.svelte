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
  registerInTOC({ page: 9 });
</script>

<BasicSlide>
  <p>
    Le couplage est <Bold
      >la mesure dans laquelle chaque classe d'un programme repose sur chacune des autres classes</Bold
    >. C'est-à-dire le niveau de dépendance des données et des opérations d'une classe vers d'autres
    classes.
  </p>
  <p>
    On tente d'obtenir <Bold>un faible couplage</Bold>. On se limite à restreindre les dépendances
    au sein d'une même famille logique de classes.
  </p>
  <p>
    Le couplage est mis en contraste avec la cohésion. En effet, une forte cohésion entraine souvent
    d'avoir un fort couplage (puisque les classes risquent de se découper pour respecter le principe
    de responsabilité unique) et vice-versa.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Par contre, réussir à avoir <Bold>un faible couplage</Bold> et <Bold>une forte cohésion</Bold> garantit
    la qualité du code d'une classe. L'idée est qu'il sera possible d'extraire cette classe (ou groupement
    de classes) sans difficulté et de greffer le tout dans un autre projet.
  </p>
  <p>
    Les packages d'un projet proposent un groupement de classes qui ont souvent une certaine forme
    de dépendance entre elles. Les couplages familiaux sont incontournables dès qu'il y a une
    relation de parent – enfant issu d'héritage.
  </p>
  <p>
    Un couplage très fort entraine comme désavantage des modifications en cascade, l'impossibilité
    d'extraire une partie pour réutilisation et demande un effort considérable dans l'assemblage dû
    aux fortes dépendances.
  </p>
</BasicSlide>
<BasicSlide>
  <List paragraph="Dans le contexte d'une classe X et Y, le couplage augmente si :">
    <li>X a un attribut de type Y;</li>
    <li>X appel une méthode de Y;</li>
    <li>X contient une méthode qui fait référence à Y (type de retour ou paramètre);</li>
    <li>X est une sous classe de Y;</li>
  </List>
  <p>
    Une approche pour réduire le couplage est de suivre le principe d'encapsulation qui permet de
    cacher tous les éléments qui ne devraient pas être accessibles et réduit donc le couplage
    possible aux éléments publics dits de service.
  </p>
  <p>
    En limitant également les responsabilités des méthodes, on s'assure de réduire également le
    couplage.
  </p>
</BasicSlide>
