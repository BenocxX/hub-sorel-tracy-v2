<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    List,
    CodeBlock,
    InlineCodeBlock,
    Italic,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Avant de voir les structures, j'aimerais vous introduire au mot clé
    <InlineCodeBlock>typedef</InlineCodeBlock>.
  </p>
  <p class="fragment">
    Ce mot clé permet de créer un alias pour un type de données. Par exemple, si vous n'aimez pas
    écrire le type <InlineCodeBlock>double x = 3.14;</InlineCodeBlock>, vous pourriez faire :
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`typedef double nombreReel; 
  
int main() {
  // Maintenant, nous pouvons utiliser 'nombreReel' à la place de 'double'
  // Équivalent à 'double x = 3.14;'
  nombreReel x = 3.14;
  return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Toutefois, il ne faut pas abuser de ce mot clé. Il peut rendre le code beaucoup plus difficile à
    comprendre s'il est mal utilisé.
  </p>
  <p class="fragment">
    Nous allons l'utiliser beaucoup pour les structures, mais il est important de se rappeler que ce
    n'est pas une bonne idée de l'utiliser pour des types de données simples. Par exemple, il serait
    très mélangeant de faire :
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`typedef int entier;
typedef char caractere;
typedef float nombreFlottant;`}
  />
</BasicSlide>
