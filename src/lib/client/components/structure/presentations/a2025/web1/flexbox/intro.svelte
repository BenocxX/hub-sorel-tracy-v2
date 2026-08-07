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
  import FlexboxLayout from './flexbox-layout.png';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide
  links={[
    {
      href: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
      label: 'CSS Flexbox Layout Guide',
    },
  ]}
>
  <p>
    <Bold>Flexbox</Bold> signifie <Bold>Flexible Box</Bold>, c'est un modèle de mise en page qui
    permet de disposer les éléments d'une interface de manière dynamique.
  </p>
  <p>
    Ainsi, nous pouvons mettre en place, aligner et espacer simplement plusieurs éléments d'un
    conteneur, et cela même si les éléments ont des tailles inconnues, différentes et/ou dynamiques.
  </p>
  <p>
    Le but principal des <Bold>Flexbox</Bold> est d'offrir un moyen flexible d'ajuster la tailles des
    éléments enfants pour remplir l'espace disponible dans le parent. Cela dans le but de s'adapter à
    toutes les tailles d'écrans et de résolutions.
  </p>
</BasicSlide>
<BasicSlide>
  <List>
    {#snippet paragraph()}
      Pour utiliser le modèle <Bold>Flexbox</Bold>, il faut 2 éléments:
    {/snippet}
    <li>
      <Bold>Parent</Bold>: l'élément qui contient les éléments enfants à disposer.
    </li>
    <li>
      <Bold>Enfants</Bold>: les éléments à disposer dans le parent.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <Image
    src={FlexboxLayout}
    alt="Diagramme de la structure d'un modèle Flexbox."
    href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-basics-and-terminology"
    caption="CSS Flexbox Layout Guide"
    class="border-2"
  />
</BasicSlide>
