<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    CodeBlock,
    InlineCodeBlock,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Pour utiliser une variable en C, il faut d'abord la déclarer en spécifiant son type et son nom.
    Par exemple :
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`int main() {
    int age; // Déclaration d'une variable entière nommée "age"
    age = 25; // Affectation de la valeur 25 à la variable "age"
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Pour définir une constante, on utilise la directive <InlineCodeBlock>#define</InlineCodeBlock> suivie
    du nom de la constante et de sa valeur. Il ne faut pas utiliser le symbole
    <InlineCodeBlock>=</InlineCodeBlock>, ni de point-virgule à la fin.
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`#define ADULTE_AGE 18
    
int main() {
    int age = 25; // Déclaration d'une variable entière nommée "age"

    if (age < ADULTE_AGE) {
        // Code pour les mineurs
    }

    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Il est aussi possible de déclarer des constantes avec le mot-clé
    <InlineCodeBlock>const</InlineCodeBlock>. Celle-ci doivent être initialisées lors de leur
    déclaration et ne peuvent pas être modifiées par la suite. Elles sont accessibles comme des
    variables normales, alors que les constantes définies avec
    <InlineCodeBlock>#define</InlineCodeBlock> sont accessibles partout dans le code.
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`int main() {
    const int ADULTE_AGE = 18;
    int age = 25; // Déclaration d'une variable entière nommée "age"

    if (age < ADULTE_AGE) {
        // Code pour les mineurs
    }

    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Notez que les constantes sont généralement écrites en majuscules pour les différencier des
    variables. On utilise le caractère <InlineCodeBlock>_</InlineCodeBlock> pour séparer les mots dans
    le nom d'une constante.
  </p>
  <p class="fragment">
    Prennez l'habitude d'utiliser des constantes pour les valeurs qui ne changent pas dans votre
    programme. C'est une bonne pratique du langage C et ça améliore la lisibilité et la
    maintenabilité de votre code.
  </p>
  <p class="fragment">
    De plus, favorisez l'utilisation de <InlineCodeBlock>const</InlineCodeBlock> lorsque possible, car
    celle-ci sont accessibles comme des variables normales et offrent une meilleure gestion de la portée
    et du typage.
  </p>
</BasicSlide>
