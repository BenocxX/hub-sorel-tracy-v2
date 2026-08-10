<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
    CodeBlock,
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
    Le principe de redéfinition (<InlineCodeBlock>override</InlineCodeBlock>) permet d'
    <Bold>écraser une méthode d'un parent par celle d'un enfant</Bold>.
  </p>
  <p>
    Le concept est de définir un comportement par défaut dans la classe parente et de l'écraser au
    besoin dans une classe enfant pour offrir une variante de ce comportement normalement plus
    spécialisée.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Pour réaliser une redéfinition, il s'agit d'écrire une méthode dans une classe enfant qui
    respecte la même signature qu'une méthode de la classe parente. C'est-à-dire, avoir le même nom,
    le même nombre d'arguments et les mêmes types d'arguments.
  </p>
  <p>
    Lors de l'exécution, le moteur sera en mesure de prendre la méthode la plus près de l'objet
    utilisé. Si elle n'existe pas à ce niveau, elle remonte d'un niveau et ainsi de suite jusqu'à
    <InlineCodeBlock>Object</InlineCodeBlock>. On ajoute l'annotation
    <InlineCodeBlock>Override</InlineCodeBlock> pour identifier une redéfinition.
  </p>
  <CodeBlock
    language="Java"
    code={`@Override
public String toString() {
    return name;
}`}
  />
</BasicSlide>
