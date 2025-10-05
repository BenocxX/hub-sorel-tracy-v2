<script lang="ts">
  import {
    BasicSlide,
    Italic,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 7 });
</script>

<BasicSlide>
  <p>
    Il n'est malheureusement pas possible de styliser un champ de téléversement directement par CSS
    à cause d'enjeu de sécurité. Donc, nous sommes limités au style natif des téléversements... Il
    existe des techniques pour styliser quand même ces éléments.
  </p>
  <p>
    La technique principale nécessite l'utilisation d'un
    <InlineCodeBlock>label</InlineCodeBlock> et de l'attribut <InlineCodeBlock>for</InlineCodeBlock>
    pour associer le label à l'élément de téléversement. Le label peut être stylisé, mais l'élément de
    téléversement doit être caché (avec <InlineCodeBlock>display: none;</InlineCodeBlock> ou
    <InlineCodeBlock>visibility: hidden;</InlineCodeBlock>).
  </p>
  <p>
    Aucune des techniques ne sont <Italic>élégantes</Italic>. Il s'agit de solutions sales à un
    problème sale... Si ce n'est pas indispensable de styliser les éléments de téléversement,
    laissez-les par défaut.
  </p>
</BasicSlide>
