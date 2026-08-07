<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 13 });
</script>

<BasicSlide>
  <p>
    Ce mécanisme contribue à <Bold>éviter les erreurs plutôt que les contrôler</Bold>. L'idée sera
    d'utiliser des valeurs approximatives qui n'invalident pas les calculs pour éviter des erreurs.
  </p>
  <p>
    Une division par <InlineCodeBlock>0</InlineCodeBlock> génère toujours une erreur fatale. Par contre,
    une division par <InlineCodeBlock>0.00000000000001</InlineCodeBlock> fonctionnera.
  </p>
  <p>
    Ce mécanisme est utilisé lorsqu'il y a beaucoup de calculs impliqués qui peuvent être
    relativement complexes. Par exemple, les applications scientifiques ou mathématiques (algèbre
    matricielle, calcul différentiel, etc.)
  </p>
</BasicSlide>
