<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    BoldItalic,
    Image,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import BranchDiagram from './branch-diagram.png';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 10 });
</script>

<BasicSlide>
  <p>
    Le gestionnaire de sources prévoit une façon de travailler particulière pour l’intégration
    continue du code source et des versions du projet. Par défaut, un projet se situe sur la branche
    <BoldItalic>main</BoldItalic> (ou anciennement appelée <Italic>master</Italic>) du répertoire
    distant.
  </p>
  <p>
    Il est possible de créer plusieurs branches pour ensuite les combiner ou les intégrer à la
    branche principale (<Italic>main</Italic>). La manipulation des branches est propre à l’équipe
    de travail. Certains préfèrent toujours poussé (<Italic>push</Italic>) le code vers la branche <Italic
      >main</Italic
    > tandis que d’autres préfèrent créer une branche par fonctionnalité pour ne pas polluer la branche
    <Italic>main</Italic>.
  </p>
  <p>Ce choix dépend de la maturité de l’équipe et de l’envergure du projet.</p>
</BasicSlide>
<BasicSlide>
  <Image src={BranchDiagram} alt="Diagramme de branches" class="mx-auto w-full sm:w-[80%]" />
</BasicSlide>
