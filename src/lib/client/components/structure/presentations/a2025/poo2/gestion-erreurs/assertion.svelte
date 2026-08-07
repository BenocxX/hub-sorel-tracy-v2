<script lang="ts">
  import {
    BasicSlide,
    Italic,
    Bold,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 12 });
</script>

<BasicSlide>
  <p>
    Une assertion qui échoue conclut le programme avec une erreur fatale. Selon les cas, on évite
    d'utiliser les assertions dans un code en production. Par contre, pour le développement c'est
    parfait. L'idée est d'insérer une trace dans le programme qui indique : <Italic>
      ici, cette variable devrait absolument avoir comme valeur X
    </Italic>.
  </p>
  <p>
    On se sert souvent des assertions pour
    <Bold>valider les pré-conditions et les post-conditions</Bold> d'une méthode. Par exemple, éviter
    de recevoir un argument <InlineCodeBlock>null</InlineCodeBlock> à une méthode. L'idée est de
    <Bold>s'assurer de l'impossibilité d'une affirmation</Bold>. Par exemple, si selon le flux du
    programme c'est strictement IMPOSSIBLE que l'argument soit <InlineCodeBlock
      >null</InlineCodeBlock
    >, alors pourquoi ne pas s'en assurer avec une assertion ?
  </p>
  <p>Les assertions contribuent à une programmation défensive.</p>
</BasicSlide>
