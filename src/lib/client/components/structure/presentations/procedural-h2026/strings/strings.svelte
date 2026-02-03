<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    List,
    CodeBlock,
    Italic,
  } from '$lib/client/components/revealjs/custom';
  import InlineCodeBlock from '$lib/client/components/revealjs/custom/inline-code-block.svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      Tout comme pour les booleans, il existe une bibliothèque standard en C pour manipuler les
      chaînes de caractères : <InlineCodeBlock>#include &lt;string.h&gt;</InlineCodeBlock>. Cette
      bibliothèque fournit de nombreuses fonctions utiles pour travailler avec des chaînes de
      caractères, en voici quelques-unes :
    {/snippet}
    <li class="fragment">
      <InlineCodeBlock>strlen</InlineCodeBlock> : Calcule la longueur d'une chaîne de caractères (sans
      compter le caractère nul).
    </li>
    <li class="fragment">
      <InlineCodeBlock>strcpy</InlineCodeBlock> : Copie une chaîne de caractères dans une autre.
    </li>
    <li class="fragment">
      <InlineCodeBlock>strcat</InlineCodeBlock> : Concatène (ajoute) une chaîne de caractères à la fin
      d'une autre.
    </li>
    <li class="fragment">
      <InlineCodeBlock>strcmp</InlineCodeBlock> : Compare deux chaînes de caractères et renvoie un entier
      indiquant s'ils sont égaux, ou si l'un est supérieur ou inférieur à l'autre.
    </li>
    <li class="fragment">etc...</li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    Les chaînes de caractères en C sont des tableaux de caractères terminés par un caractère nul
    <InlineCodeBlock>'\0'</InlineCodeBlock>.
  </p>
  <p class="fragment">
    Le caractère nul permet aux fonctions de manipulation de chaînes de savoir où s'arrêter lors du
    traitement de la chaîne. Il est important de toujours inclure ce caractère à la fin des chaînes
    de caractères pour éviter des comportements indésirables lors de leur utilisation.
  </p>
  <p class="fragment">
    Lorsqu'on lit une chaîne de caractères à partir de l'entrée standard, le caractère de nouvelle
    ligne <InlineCodeBlock>'\n'</InlineCodeBlock> est également inclus dans le tableau. Par conséquent,
    si on souhaite supprimer ce caractère de nouvelle ligne, il est nécessaire de le remplacer par le
    caractère nul <InlineCodeBlock>'\0'</InlineCodeBlock>.
  </p>
</BasicSlide>
<BasicSlide subTitle="strcspn">
  <p>
    La fonction <InlineCodeBlock>strcspn()</InlineCodeBlock> de la bibliothèque
    <InlineCodeBlock>string.h</InlineCodeBlock> peut être utilisée pour trouver la position du
    <InlineCodeBlock>'\n'</InlineCodeBlock> dans la chaîne, ce qui permet de le remplacer facilement.
  </p>
  <p class="fragment">
    <InlineCodeBlock>strcspn()</InlineCodeBlock> signifie "<Italic>string complement span</Italic>",
    ou en français "étendue du complément de chaîne", soit la longueur du segment initial de la
    chaîne qui ne contient aucun des caractères spécifiés dans un autre ensemble de caractères.
    Voici la définition de cette fonction:
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`size_t strcspn(const char *str1, const char *str2);
// Pseudocode: int strcspn(string str1, string str2)`}
  />
</BasicSlide>
<BasicSlide subTitle="strcspn">
  <CodeBlock
    language="C"
    code={`#include <stdio.h>
#include <string.h>

int main() {
    char nom[50];

    printf("Entrez votre nom : ");
    fgets(nom, 50, stdin);

    // Remplacer le caractère de nouvelle ligne par le caractère nul
    nom[strcspn(nom, "\\n")] = '\\0';

    printf("Bonjour, %s!\\n", nom);
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide subTitle="strcpy">
  <p>
    La fonction <InlineCodeBlock>strcpy()</InlineCodeBlock> est utilisée pour copier le contenu d'une
    chaîne de caractères source vers une chaîne de caractères destination.
  </p>
  <p class="fragment">
    <InlineCodeBlock>strcpy()</InlineCodeBlock> signifie "<Italic>string copy</Italic>", ou en
    français "copie de chaîne". Voici la définition de cette fonction :
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`char *strcpy(char *dest, const char *src);
// Pseudocode: string strcpy(string dest, string src)`}
  />
</BasicSlide>
<BasicSlide subTitle="strcpy">
  <CodeBlock
    language="C"
    code={`#include <stdio.h>
#include <string.h>

int main() {
    char source[] = "Bonjour le monde!";
    char destination[50];

    // Copier la chaîne de caractères de source à destination
    strcpy(destination, source);

    printf("Chaîne copiée : %s\\n", destination);
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide subTitle="strcpy">
  <p>
    Avec la fonction <InlineCodeBlock>strcpy()</InlineCodeBlock>, il est important de s'assurer que
    la chaîne de destination est suffisamment grande pour contenir la chaîne source, y compris le
    caractère nul <InlineCodeBlock>'\0'</InlineCodeBlock>. Sinon, cela peut entraîner des
    dépassements de mémoire et des comportements indésirables.
  </p>
  <p class="fragment">
    Il existe également une variante plus sûre de cette fonction, appelée
    <InlineCodeBlock>strncpy()</InlineCodeBlock>, qui permet de spécifier la taille maximale à
    copier afin d'éviter les dépassements de mémoire.
  </p>
  <p class="fragment">
    <InlineCodeBlock>strncpy()</InlineCodeBlock> signifie "<Italic>string n copy</Italic>", ou en
    français "copie N caractères d'une chaîne de caractères". Voici la définition de cette fonction
    :
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`char *strncpy(char *dest, const char *src, size_t n);
// Pseudocode: string strncpy(string dest, string src, int n)`}
  />
</BasicSlide>
<BasicSlide subTitle="strncpy">
  <CodeBlock
    language="C"
    code={`#include <stdio.h>
#include <string.h>

int main() {
    char source[] = "Bonjour le monde!";
    char destination[50];

    // Copier au maximum 7 caractères de source à destination
    strncpy(destination, source, 7);

    // S'assurer que la chaîne destination est terminée par un caractère nul
    destination[7] = '\\0';

    printf("Chaîne copiée : %s\\n", destination);
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide subTitle="strcmp">
  <p>
    La fonction <InlineCodeBlock>strcmp()</InlineCodeBlock> est utilisée pour comparer deux chaînes de
    caractères. Elle compare caractère par caractère en utilisant l'ordre des valeurs ASCII, jusqu'à
    ce qu'une différence soit trouvée ou que la fin des deux chaînes soit atteinte.
  </p>
  <p class="fragment">
    <InlineCodeBlock>strcmp()</InlineCodeBlock> signifie "<Italic>string compare</Italic>", ou en
    français "comparaison de chaînes". Voici la définition de cette fonction :
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`int strcmp(const char *str1, const char *str2);
// Pseudocode: int strcmp(string str1, string str2)`}
  />
  <p class="fragment">
    Il existe aussi une variante de cette fonction, appelée
    <InlineCodeBlock>strncmp()</InlineCodeBlock>, qui permet de comparer un nombre spécifié de
    caractères entre les deux chaînes.
  </p>
</BasicSlide>
<BasicSlide subTitle="strcmp">
  <CodeBlock
    language="C"
    code={`#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "Framboise";
    char str2[] = "Fraise";

    int result = strcmp(str1, str2);

    if (result < 0) {
        printf("%s est inférieur à %s\\n", str1, str2);
    } else if (result > 0) {
        printf("%s est supérieur à %s\\n", str1, str2);
    } else {
        printf("%s est égal à %s\\n", str1, str2);
    }

    return 0;
}`}
  />
</BasicSlide>
<BasicSlide subTitle="strcat">
  <p>
    La fonction <InlineCodeBlock>strcat()</InlineCodeBlock> est utilisée pour concaténer (ajouter) une
    chaîne de caractères à la fin d'une autre chaîne de caractères.
  </p>
  <p class="fragment">
    <InlineCodeBlock>strcat()</InlineCodeBlock> signifie "<Italic>string concatenate</Italic>", ou
    en français "concaténation de chaînes". Voici la définition de cette fonction :
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`char *strcat(char *dest, const char *src);
// Pseudocode: string strcat(string dest, string src)`}
  />
  <p class="fragment">
    Il existe aussi une variante plus sûre de cette fonction, appelée
    <InlineCodeBlock>strncat()</InlineCodeBlock>, qui permet de spécifier la taille maximale à
    concaténer afin d'éviter les dépassements de mémoire.
  </p>
</BasicSlide>
<BasicSlide subTitle="strcat">
  <CodeBlock
    language="C"
    code={`#include <stdio.h>
#include <string.h>

int main() {
    char destination[50] = "Bonjour, ";
    char source[] = "le monde!";

    // Concaténer la chaîne source à la fin de la chaîne destination
    strcat(destination, source);

    printf("Chaîne concaténée : %s\\n", destination);
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide subTitle="strlen">
  <p>
    La fonction <InlineCodeBlock>strlen()</InlineCodeBlock> est utilisée pour calculer la longueur d'une
    chaîne de caractères, en comptant le nombre de caractères avant le caractère nul
    <InlineCodeBlock>'\0'</InlineCodeBlock>.
  </p>
  <p class="fragment">
    <InlineCodeBlock>strlen()</InlineCodeBlock> signifie "<Italic>string length</Italic>", ou en
    français "longueur de chaîne". Voici la définition de cette fonction :
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`size_t strlen(const char *str);
// Pseudocode: int strlen(string str)`}
  />
</BasicSlide>
<BasicSlide subTitle="strlen">
  <CodeBlock
    language="C"
    code={`#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Bonjour";

    // Calculer la longueur de la chaîne
    int length = strlen(str);

    printf("Longueur de la chaîne : %d\\n", length);
    return 0;
}`}
  />
</BasicSlide>
