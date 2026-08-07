<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    List,
    CodeBlock,
    InlineCodeBlock,
    BoldItalic,
    Italic,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    La mémoire d'un ordinateur est un composant essentiel qui nous permet de stocker et accéder aux
    données de notre programme. On l'appelle souvent la "mémoire vive" ou RAM (<Italic>
      Random Access Memory
    </Italic>).
  </p>
</BasicSlide>
<BasicSlide>
  <List fragment>
    {#snippet paragraph()}
      Elle est organisée en plusieurs sections, chacune ayant une fonction spécifique :
    {/snippet}
    <li class="fragment"><BoldItalic>Le code</BoldItalic></li>
    <li class="fragment"><BoldItalic>Les données non initialisées</BoldItalic></li>
    <li class="fragment"><BoldItalic>Les données initialisées</BoldItalic></li>
    <li class="fragment"><BoldItalic>Le heap</BoldItalic></li>
    <li class="fragment"><BoldItalic>Le stack</BoldItalic></li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    <BoldItalic>Le code</BoldItalic> contient les instructions de notre programme. Vous pouvez le voir
    comme le "cerveau" de notre application, où toutes les opérations sont définies, ligne par ligne.
  </p>
  <p class="fragment">
    <BoldItalic>Le code</BoldItalic> n'est pas votre code <InlineCodeBlock>C</InlineCodeBlock>, mais
    plutôt du code machine, ce que le processeur exécute réellement. C'est une représentation
    binaire de votre code, obtenus grâce à la compilation de votre code source.
  </p>
  <p class="fragment">
    <BoldItalic>Le code</BoldItalic> est "read-only", ce qui signifie que vous ne pouvez pas le modifier
    pendant l'exécution de votre programme. Voici une commande permettant d'obtenir un fichier assembleur
    à partir d'un fichier source en C :
  </p>
  <CodeBlock fragment language="Bash" code="gcc -S -o fichier.s ./fichier.c" />
</BasicSlide>
<BasicSlide>
  <p>
    Les <BoldItalic>données non initialisées</BoldItalic> sont des variables qui n'ont pas été explicitement
    initialisées dans votre code. Elles occupent de l'espace en mémoire, mais leur contenu est indéfini
    jusqu'à ce que vous les utilisiez. Elles sont initialisées à zéro par le système d'exploitation avant
    l'exécution du programme.
  </p>
  <p class="fragment">
    Les <BoldItalic>données initialisées</BoldItalic> sont des variables qui ont été explicitement initialisées
    dans votre code. Elles contiennent une valeur définie dès le départ.
  </p>
  <p class="fragment">
    Ces deux sections sont souvent regroupées sous le nom de "data segment" ou "segment de données".
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Les <BoldItalic>Données dynamiques</BoldItalic> sont des données qui sont allouées et libérées dynamiquement
    pendant l'exécution de votre programme. On retrouve ces données dans le
    <BoldItalic>heap</BoldItalic> ou dans le <BoldItalic>stack</BoldItalic>.
  </p>
  <p class="fragment">
    Le <BoldItalic>heap</BoldItalic> est une zone de mémoire utilisée pour l'allocation dynamique. C'est
    là que les données sont allouées et libérées manuellement par le programmeur, souvent à l'aide de
    fonctions comme <InlineCodeBlock>malloc</InlineCodeBlock> et
    <InlineCodeBlock>free</InlineCodeBlock>.
  </p>
  <p class="fragment">
    Le <BoldItalic>stack</BoldItalic> est une zone de mémoire utilisée pour stocker les variables locales
    et les adresses de retour des fonctions. Il est géré automatiquement par le système d'exploitation
    et le compilateur.
  </p>
</BasicSlide>
<BasicSlide>
  <p>Dessinons ensemble la représentation de la mémoire du programme suivant :</p>
  <CodeBlock
    language="C"
    code={`int uninitialized; // données non initialisées
int initialized = 10; // données initialisées

int main() {
    // variable locale, stockée dans le stack
    int localVariable = 5;

    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>Dessinons ensemble la représentation de la mémoire du programme suivant :</p>
  <CodeBlock
    language="C"
    code={`#include <stdlib.h>

int uninitialized; // données non initialisées
int initialized = 10; // données initialisées

int main() {
    // variable locale, stockée dans le stack
    int localVariable = 5;

    // variable dynamique, stockée dans le heap
    int *dynamicVariable = malloc(sizeof(int));

    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>Dessinons ensemble la représentation de la mémoire du programme suivant :</p>
  <CodeBlock
    language="C"
    code={`#include <stdlib.h>

int uninitialized; // données non initialisées
int initialized = 10; // données initialisées

int add(int a, int b) {
    // variable locale, stockée dans le stack
    int result = a + b;
    return result;
}

int main() {
    // variable locale, stockée dans le stack
    int localVariable = 5;

    // variable dynamique, stockée dans le heap
    int *dynamicVariable = malloc(sizeof(int));

    // appel de fonction, les paramètres et l'adresse de retour sont stockés dans le stack
    add(localVariable, initialized);

    // libération de la variable dynamique
    free(dynamicVariable);
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>Dessinons ensemble la représentation de la mémoire du programme suivant :</p>
  <CodeBlock
    language="C"
    code={`int multiplyByTwo(int a) {
    return a * 2;
}

int minusOne(int a) {
    return a - 1;
}

int calculate(int a, int b) {
    return minusOne(a) + multiplyByTwo(b);
}

int main() {
    int result = calculate(5, 10);
    return 0;
}`}
  />
</BasicSlide>
