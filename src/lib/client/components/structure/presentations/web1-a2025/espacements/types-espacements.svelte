<script lang="ts">
  import {
    BasicSlide,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Lors de la création d'un site web, on doit utiliser différentes techniques afin d'espacer
    différents éléments. L'espacement est essentiel pour rendre un site web lisible et agréable à
    consulter.
  </p>
  <List paragraph="Il existe plusieurs propriétés CSS permettant l'espacement d'éléments:">
    <li class="line-through">Hauteur/Largeur</li>
    <li>Padding (rembourrage en français)</li>
    <li>Bordures</li>
    <li>Margin (marge en français)</li>
    <li>Flexbox</li>
  </List>
</BasicSlide>
<BasicSlide>
  <List
    paragraph="Lorsqu'on veut ajouter de l'espacement à un élément, il y a deux types d'espacement qu'on peut utiliser:"
  >
    <li>Espacement interne (padding)</li>
    <li>Espacement externe (margin)</li>
  </List>
  <p>
    Notez que les deux permettent d'arriver au mêmes résultats. Cependant, ils ont quelques
    comportements de différents...
  </p>
</BasicSlide>
