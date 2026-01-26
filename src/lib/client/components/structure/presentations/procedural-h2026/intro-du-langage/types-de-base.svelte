<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    List,
    InlineCodeBlock,
    CodeBlock,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <List paragraph="Voici les types de base en C:">
    <li>
      <InlineCodeBlock>short</InlineCodeBlock> : pour les petits entiers
    </li>
    <li>
      <InlineCodeBlock>int</InlineCodeBlock> : pour les entiers
    </li>
    <li>
      <InlineCodeBlock>long</InlineCodeBlock> : pour les grands entiers
    </li>
    <li>
      <InlineCodeBlock>float</InlineCodeBlock> : pour les nombres à virgule simple
    </li>
    <li>
      <InlineCodeBlock>double</InlineCodeBlock> : pour les nombres à virgule double
    </li>
    <li>
      <InlineCodeBlock>char</InlineCodeBlock> : pour les caractères
    </li>
    <li>
      <InlineCodeBlock>bool</InlineCodeBlock> : pour les valeurs booléennes (true/false)*****
    </li>
    <li>
      <InlineCodeBlock>void</InlineCodeBlock> : pour indiquer l'absence de type
    </li>
  </List>
  <p class="fragment">
    Gardez en tête que chaque type de base peut être modifié avec des modificateurs tels que
    <InlineCodeBlock>unsigned</InlineCodeBlock> et <InlineCodeBlock>signed</InlineCodeBlock> afin de
    spécifier le signe des nombres.
  </p>
</BasicSlide>
<BasicSlide>
  <p class="fragment">
    De plus, pour utiliser le type <InlineCodeBlock>bool</InlineCodeBlock>, vous devez inclure la
    bibliothèque <InlineCodeBlock>&lt;stdbool.h&gt;</InlineCodeBlock> au début de votre programme.
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`#include <stdbool.h>
  
int main() {
    bool estVrai = true;
    if (estVrai) {
        // Faire quelque chose
    }

    return 0;
}`}
  />
</BasicSlide>
