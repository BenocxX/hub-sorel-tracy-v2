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
    BoldItalic,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      Lorsqu'on programme, on aime beaucoup séparer notre code. Il existe trois manières afin
      d'organiser notre code:
    {/snippet}
    <li class="fragment">Les fonctions</li>
    <li class="fragment">Les modules (fichiers)</li>
    <li class="fragment">Les classes (langages POO)</li>
  </List>
  <p class="fragment">
    Pour ce qui est du langage C, nous allons utiliser majoritairement les fonctions et les modules.
  </p>
</BasicSlide>
<BasicSlide>
  <List>
    {#snippet paragraph()}
      Une fonction est un morceau de code qui peut être réutilisé à plusieurs endroits dans notre
      programme. Elle contient quatre éléments importants:
    {/snippet}
    <li class="fragment">Le type de la donnée retournée (s'il y en a une)</li>
    <li class="fragment">Un nom</li>
    <li class="fragment">Un ou plusieurs paramètres</li>
    <li class="fragment">Un bloc de code</li>
  </List>
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="C"
    code={`TYPE_RETOUR NOM_FONCTION(PARAMETRES) {
  // bloc de code
}`}
  />
  <CodeBlock
    fragment
    language="C"
    code={`int add(int a, int b) {
    return a + b;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Le type de retour est le type de donnée que la fonction va retourner à la fin de son exécution.
    Si la fonction ne retourne rien, on utilise le type <InlineCodeBlock>void</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="C"
    code={`void printHello() {
    printf("Hello, world!");
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Lorsqu'on parle de fonctions, on utilise souvent le terme <BoldItalic>paramètre</BoldItalic> ou
    <BoldItalic>argument</BoldItalic>.
  </p>
  <p class="fragment">
    Un argument représente une donnée que l'on passe à une fonction pour qu'elle puisse l'utiliser
    dans son bloc de code.
  </p>
  <p class="fragment">
    Un paramètre est une variable qui est déclarée dans la définition de la fonction et qui reçoit
    la valeur de l'argument lorsque la fonction est appelée.
  </p>
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="C"
    code={`int add(int a, int b) { // a et b sont les paramètres
    return a + b;
}

int main() {
    int result = add(5, 3); // 5 et 3 sont les arguments
    printf("%d", result);
    return 0;
}`}
  />
  <p class="fragment">
    La fonction <InlineCodeBlock>add</InlineCodeBlock> est déclarée avant le
    <InlineCodeBlock>main</InlineCodeBlock>, pourquoi? Est-ce qu'on peut la déclarer après?
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    En C, il est nécessaire de déclarer une fonction avant de l'utiliser. Cela veut dire que toutes
    nos fonctions devraient être déclarées avant d'être utilisées dans notre code.
  </p>
  <p class="fragment">
    Cela peut devenir un problème lorsque nous avons beaucoup de fonctions, car ça peut rendre notre
    code difficile à lire et à maintenir. De plus, c'est assez désagréable de devoir déclarer nos
    fonctions avant de les utiliser, surtout si on veut les organiser dans un ordre logique.
  </p>
  <p class="fragment">
    Par chance, le langage C nous permet de seulement déclarer la définition de nos fonctions et de
    les définir plus tard dans notre code. Cela nous permet de mieux organiser notre code et de le
    rendre plus lisible.
  </p>
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="C"
    code={`// Déclaration de la fonction (contrat avec le compilateur)
int add(int a, int b);

int main() {
    int result = add(5, 3); // On peut utiliser la fonction quelle soit définie
    printf("%d", result);
    return 0;
}

// Définition de la fonction
int add(int a, int b) {
    return a + b;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    La stratégie de déclarer nos fonctions avant de les définir est très courante en C, et elle nous
    permet d'organiser notre code de manière plus logique. Je vous recommande de prendre l'habitude
    de déclarer vos fonctions avant de les définir, même si ce n'est pas obligatoire. Cela rendra
    votre code plus lisible et plus facile à maintenir.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Les arguments d'une fonction lui sont passés par valeur, ce qui veut dire que la fonction reçoit
    une copie de la valeur de l'argument. Cela signifie que si la fonction modifie la valeur de
    l'argument, ça n'affectera pas la valeur de l'argument dans le code appelant.
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`void increment(int a) { // a est une copie de l'argument passé
    a++;
}

int main() {
    int x = 5;
    increment(x);
    printf("%d", x); // Affiche 5, pas 6, car x n'est pas modifié par la fonction
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Cependant, il est possible de passer des arguments par référence en utilisant des pointeurs.
    Cela permet à la fonction de modifier la valeur de l'argument dans le code appelant.
  </p>
  <p class="fragment">
    Voici un exemple, mais gardez en tête que nous allons voir les pointeurs plus en détail la
    semaine prochaine.
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`void increment(int *a) { // a est un pointeur vers l'argument passé
    (*a)++;
}

int main() {
    int x = 5;
    increment(&x); // On passe l'adresse de x à la fonction
    printf("%d", x); // Affiche 6, car x est modifié par la fonction
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Notez qu'en général, il est préférable de passer des arguments par valeur lorsque c'est
    possible, car cela rend le code plus simple et plus facile à comprendre.
  </p>
  <p class="fragment">
    Passer des arguments par référence (pointeurs) peut être plus efficace dans certains cas, mais
    cela peut aussi rendre le code plus complexe et plus difficile à comprendre.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Toutefois, certains types de données, comme les tableaux, sont toujours passés par référence en
    C, même si on ne le spécifie pas explicitement. C'est un comportement particulier du langage C
    qui peut parfois prendre les débutants par surprise.
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`void modifyArray(int arr[]) { // arr est un pointeur vers le premier élément du tableau
    arr[0] = 10; // Modifie le premier élément du tableau
}

int main() {
    int myArray[3] = {1, 2, 3};
    modifyArray(myArray); // On passe le tableau à la fonction
    printf("%d", myArray[0]); // Affiche 10, car le tableau est modifié par la fonction
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Lorsqu'on passe un tableau à une fonction, il est une bonne pratique de passer également la
    taille du tableau en tant que paramètre, afin que la fonction puisse savoir combien d'éléments
    le tableau contient. Cela permet d'éviter les erreurs de dépassement de mémoire et rend le code
    plus sûr.
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`void modifyArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] = i; // Modifie chaque élément du tableau
    }
}

int main() {
    int myArray[3] = {1, 2, 3};
    modifyArray(myArray, 3); // On passe le tableau et sa taille à la fonction
    for (int i = 0; i < 3; i++) {
        printf("%d ", myArray[i]); // Affiche "0 1 2", car le tableau est modifié par la fonction
    }
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Pour calculer la taille d'un tableau, on peut utiliser l'opérateur
    <InlineCodeBlock>sizeof</InlineCodeBlock> pour obtenir la taille totale du tableau en octets, puis
    la diviser par la taille d'un élément du tableau pour obtenir le nombre d'éléments dans celui-ci.
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`int main() {
    int myArray[3] = {1, 2, 3};
    
    // int = 4 octets (généralement)
    // sizeof(myArray[0]) = 4 octets (taille d'un "int" du tableau)
    // int size = 12 octets / 4 octets = 3 éléments dans le tableau
    int size = sizeof(myArray) / sizeof(myArray[0]);

    for (int i = 0; i < size; i++) 
        printf("%d ", myArray[i]); // Affiche "0 1 2", car le tableau est modifié par la fonction
    }

    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <List
    paragraph="Voici quelques bonnes pratiques à suivre lors de l'utilisation de fonctions en C:"
  >
    <li class="fragment">Donner des noms significatifs à vos fonctions et à leurs paramètres</li>
    <li class="fragment">Éviter les fonctions trop longues ou complexes</li>
    <li class="fragment">Passer des arguments par valeur lorsque c'est possible</li>
    <li class="fragment">
      Passer des arguments par référence (pointeurs) uniquement lorsque nécessaire
    </li>
  </List>
</BasicSlide>
