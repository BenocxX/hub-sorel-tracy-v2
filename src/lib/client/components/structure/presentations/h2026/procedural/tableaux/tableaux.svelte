<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    List,
    CodeBlock,
    BoldItalic,
  } from '$lib/client/components/revealjs/custom';
  import InlineCodeBlock from '$lib/client/components/revealjs/custom/inline-code-block.svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <List paragraph="Les tableaux permettent de :">
    <li>Stocker plusieurs valeurs du même type dans une seule variable</li>
    <li>Utiliser des indices pour accéder aux éléments</li>
    <li>Ajouter, supprimer ou modifier des éléments</li>
    <li>Chaînes de caractères -&gt; tableaux de caractères</li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>Pour déclarer un tableau en C, on utilise la syntaxe suivante :</p>
  <CodeBlock
    language="C"
    code={`int main() {
    // Déclaration d'un tableau d'entiers de taille 5
    // Contenant 5 éléments prédéfinis
    // [1, 2, 3, 4, 5]
    int nombres[5] = {1, 2, 3, 4, 5};
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Il est aussi possible de déclarer un tableau sans spécifier sa taille, en laissant le
    compilateur la déduire à partir du nombre d'éléments initialisés :
  </p>
  <CodeBlock
    language="C"
    code={`int main() {
    // Déclaration d'un tableau d'entiers
    // La taille est déduite automatiquement (5 éléments)
    int nombres[] = {1, 2, 3, 4, 5};
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>Sinon, on peut aussi déclarer un tableau vide et remplir ses éléments plus tard :</p>
  <CodeBlock
    language="C"
    code={`int main() {
    // Déclaration d'un tableau d'entiers de taille 5
    int nombres[5];

    // Initialisation des éléments du tableau
    nombres[0] = 1;
    nombres[1] = 2;
    nombres[2] = 3;
    nombres[3] = 4;
    nombres[4] = 5;
    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>Il est possible d'utiliser une boucle pour remplir un tableau :</p>
  <CodeBlock
    language="C"
    code={`int main() {
    // Déclaration d'un tableau d'entiers de taille 5
    int nombres[5];

    // Remplissage du tableau avec une boucle for
    for (int i = 0; i < 5; i++) {
        nombres[i] = i + 1;
    } 

    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Depuis C99, il est possible d'initialiser un tableau avec une taille variable. On appelle ça un
    VLA (Variable Length Array, ou tableau de longueur variable). Par exemple :
  </p>
  <CodeBlock
    language="C"
    code={`int main() {
    int taille;
    printf("Entrez la taille du tableau : ");
    scanf("%d", &taille);

    // Déclaration d'un tableau de taille variable
    int nombres[taille];

    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Notez que les VLA sont alloués sur la pile (stack), ce qui peut poser des problèmes si la taille
    est trop grande.
  </p>
  <p class="fragment">
    De plus, les VLA ne sont pas pris en charge par tous les compilateurs C, et leur utilisation est
    déconseillée dans les projets nécessitant une portabilité maximale. En général, il est
    préférable d'utiliser l'allocation dynamique de mémoire avec
    <InlineCodeBlock>malloc()</InlineCodeBlock> et <InlineCodeBlock>free()</InlineCodeBlock>
    pour gérer des tableaux de taille variable. Nous allons voir cela plus tard dans la session.
  </p>
</BasicSlide>
<BasicSlide>
  <List paragraph="Il y a trois termes importants à comprendre lorsqu'on parle de tableaux :">
    <li class="fragment">
      La <BoldItalic>taille</BoldItalic> : le nombre d'éléments que le tableau peut contenir
    </li>
    <li class="fragment">
      L'<BoldItalic>index</BoldItalic> : la position d'un élément dans le tableau. Débute à 0.
    </li>
    <li class="fragment">
      L'<BoldItalic>élément</BoldItalic> : la valeur stockée à une position donnée dans le tableau
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    Il est possible de lire ou modifier un élément d'un tableau en utilisant son index. Par exemple,
    pour accéder au premier élément d'un tableau nommé <InlineCodeBlock>nombres</InlineCodeBlock>,
    on utilise
    <InlineCodeBlock>nombres[0]</InlineCodeBlock>. Pour modifier le troisième élément, on peut faire
    <InlineCodeBlock>nombres[2] = 10;</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="C"
    code={`int main() {
    int nombres[] = {1, 2, 3, 4, 5};

    // Accéder au premier élément
    int premier = nombres[0];

    // Modifier le troisième élément
    nombres[2] = 10; // Le tableau devient {1, 2, 10, 4, 5}

    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Nous allons voir les fonctions la semaine prochaine, mais il est important de garder en tête
    qu'il est impossible de retourner un tableau depuis une fonction en C. Retourner un tableau
    impliquerait de retourner un pointeur vers une zone mémoire qui pourrait ne plus être valide
    après la fin de la fonction.
  </p>
  <p class="fragment">On en reparlera plus en détail plus tard dans la session!</p>
</BasicSlide>
<BasicSlide>
  <p>
    Il est possible d'avoir des tableaux multidimensionnels en C, comme des tableaux à deux
    dimensions (tableaux de tableaux). Par exemple, pour déclarer une matrice 3x3 d'entiers :
  </p>
  <CodeBlock
    language="C"
    code={`int main() {
    // Déclaration d'un tableau 2D (matrice) de taille 3x3
    int matrice[3][3] = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Il est commun d'utiliser des matrices pour entreposer une liste de strings, puisque les strings
    sont elles-mêmes des tableaux de caractères. Par exemple, pour stocker une liste de noms :
  </p>
  <CodeBlock
    language="C"
    code={`int main() {
    // Déclaration d'un tableau de chaînes de caractères (strings)
    char noms[3][20] = {
        "Alice",
        "Bob",
        "Jean"
    };

    return 0;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Pour accéder au deuxième nom dans le tableau de strings, on utilise
    <InlineCodeBlock>noms[1]</InlineCodeBlock>. Pour accéder au troisième caractère du premier nom,
    on utilise
    <InlineCodeBlock>noms[0][2]</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="C"
    code={`#inlude <stdio.h>
    
int main() {
    char noms[3][20] = { "Alice", "Bob", "Jean" };

    printf("Deuxième nom : %s\\n", noms[1]);
    printf("Troisième caractère du premier nom : %c\\n", noms[0][2]);

    return 0;
}`}
  />
</BasicSlide>
