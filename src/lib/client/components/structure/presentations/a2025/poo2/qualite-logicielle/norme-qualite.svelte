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
  import ISO9126 from './ISO9126.gif';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 5 });
</script>

<BasicSlide>
  <p>
    Le domaine des technologies de l'information (TI) renferme beaucoup de normes. Le domaine étant
    relativement jeune, la qualité logicielle est en constante amélioration.
  </p>
  <List>
    {#snippet paragraph()}
      Les logiciels doivent répondre à des exigences qui peuvent être classées en deux grandes
      catégories :
    {/snippet}
    <li>
      <Bold>Les spécifications fonctionnelles</Bold>. Il s'agit de la définition du comportement
      précis du logiciel soit les traitements à effectuer, les sorties à produire, les entrer à
      saisir, etc.
    </li>
    <li>
      <Bold>Les spécifications non fonctionnelles</Bold>. Toutes autres spécifications qui ne
      traitent pas le comportement du logiciel.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    Assez rapidement, on s'est rendu compte que l'aspect fonctionnalité ne constituait pas
    l'intégralité des besoins du client et par conséquent ne pouvait pas être l'unique mesure de
    qualité.
  </p>
  <p>
    La norme ISO 9126 définit <Bold>6 caractéristiques de qualité</Bold> des produits logiciels, dont
    la fonctionnalité. Chaque caractéristique est décrite en plusieurs attributs qui doivent avoir une
    définition précise et des indicateurs mesurables (non défini dans la norme).
  </p>
  <p>
    Les 5 autres critères non fonctionnels sont la fiabilité, la facilité d'utilisation,
    l'efficacité, la maintenabilité et la portabilité.
  </p>
</BasicSlide>
<BasicSlide>
  <Image
    src={ISO9126}
    alt="ISO 9126"
    href="https://rochefolle.com/2013/06/18/a-la-poursuite-de-la-qualite/"
    caption="A la poursuite de la Qualité... - RocheFolle"
    figureClass="mx-auto"
  />
</BasicSlide>
