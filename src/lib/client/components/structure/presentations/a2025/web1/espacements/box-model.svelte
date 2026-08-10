<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    Image,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import BoxModelImage from './box-model-w3schools.png';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 4 });
</script>

<BasicSlide>
  <p>
    Lorsqu'on parle d'espacement en CSS, on fait souvent référence au <Bold>box model</Bold>.
  </p>
  <p>
    On peut imaginer le <Bold>box model</Bold> comme étant une boîte qui englobe chaque élément. Tous
    les éléments HTML sont représentés sous forme de boîtes rectangulaires.
  </p>
  <List listType="ol" paragraph="Cette boîte contient 4 parties:">
    <li>Le contenu</li>
    <li>Le padding</li>
    <li>La bordure</li>
    <li>Le margin</li>
  </List>
</BasicSlide>
<BasicSlide>
  <Image
    src={BoxModelImage}
    alt="Image du box model"
    href="https://www.w3schools.com/css/css_boxmodel.asp"
    caption="W3School"
  />
</BasicSlide>
