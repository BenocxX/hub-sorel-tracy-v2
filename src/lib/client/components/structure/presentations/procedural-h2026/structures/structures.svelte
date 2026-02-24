<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    List,
    CodeBlock,
    InlineCodeBlock,
    MultiCodeBlock,
    Italic,
    Bold,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Le langage C est un langage de paradigme <Bold>Procédural</Bold>, ce qui signifie que nous
    n'avons pas accès à des concepts de haut niveau tels que les classes, les objets, l'héritage,
    etc. Nous devons nous concentrer sur la logique de notre programme et la manière dont les
    données sont manipulées.
  </p>
  <p class="fragment">
    Cependant, cela ne signifie pas que nous ne pouvons pas structurer notre code de manière
    efficace. Nous pouvons utiliser des fonctions pour organiser notre code en blocs logiques, nous
    pouvons utiliser des tableaux pour stocker une suite de données, et nous pouvons aussi utiliser
    des structures pour regrouper des données liées.
  </p>
  <p class="fragment">
    Les structures sont un moyen de regrouper des données de types différents sous un même nom.
    Elles sont particulièrement utiles pour représenter des objets du monde réel, comme une
    personne, une voiture, ou un point dans l'espace.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Les structures en C peuvent sembler similaires aux classes en Java, mais elles sont beaucoup
    plus simples. Elles peuvent contenir que des données, aucune fonction.
  </p>
  <p class="fragment">
    Cependant, nous pouvons utiliser des fonctions pour manipuler les données d'une structure, ce
    qui nous permet de créer une sorte de "pseudo-objet" en C.
  </p>
</BasicSlide>
<BasicSlide>
  <p>Voici la manière la plus simple de définir une structure en C :</p>
  <CodeBlock
    language="C"
    code={`struct Personne {
    char prenom[50];
    char nom[50];
    int age;
};`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Une fois une structure définie, nous pouvons créer des variables de ce type et accéder à leurs
    membres à l'aide de l'opérateur <InlineCodeBlock>.</InlineCodeBlock> :
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'C',
        label: 'Utilisation',
        code: `int main() {
    struct Personne jean;
    strncpy(jean.prenom, "Jean", sizeof(jean.prenom) - 1);
    jean.prenom[sizeof(jean.prenom) - 1] = '\\0';

    strncpy(jean.nom, "Dupont", sizeof(jean.nom) - 1);
    jean.nom[sizeof(jean.nom) - 1] = '\\0';

    jean.age = 30;
    printf("Nom: %s %s, Age: %d", jean.prenom, jean.nom, jean.age);
}`,
      },
      {
        language: 'C',
        label: 'Définition',
        code: `struct Personne {
    char prenom[50];
    char nom[50];
    int age;
};`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Notez que la définition d'une structure peut être placée dans le même fichier que le code qui
    l'utilise, ou elle peut être placée dans un fichier d'en-tête séparé pour une meilleure
    organisation.
  </p>
  <p class="fragment">
    En général, il est recommandé de placer les définitions de structures dans des fichiers
    <InlineCodeBlock>.h</InlineCodeBlock> et de les inclure dans les fichiers
    <InlineCodeBlock>.c</InlineCodeBlock> qui en ont besoin. Cela permet degérer plus facilement les
    dépendances et de réutiliser les structures dans plusieurs fichiers.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Il existe plusieurs manières plus avancées de définir des structures en C, notamment en
    utilisant le mot clé <InlineCodeBlock>typedef</InlineCodeBlock>.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'C',
        label: 'Définition',
        code: `struct Personne {
    char prenom[50];
    char nom[50];
    int age;
};

typedef struct Personne Personne;`,
      },
      {
        language: 'C',
        label: 'Utilisation',
        code: `int main() {
    Personne jean;
    strncpy(jean.prenom, "Jean", sizeof(jean.prenom) - 1);
    jean.prenom[sizeof(jean.prenom) - 1] = '\\0';

    strncpy(jean.nom, "Dupont", sizeof(jean.nom) - 1);
    jean.nom[sizeof(jean.nom) - 1] = '\\0';

    jean.age = 30;
    printf("Nom: %s %s, Age: %d", jean.prenom, jean.nom, jean.age);
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>Ou même en une seule ligne :</p>
  <MultiCodeBlock
    codes={[
      {
        language: 'C',
        label: 'Définition',
        code: `typedef struct Personne {
    char prenom[50];
    char nom[50];
    int age;
} Personne;`,
      },
      {
        language: 'C',
        label: 'Utilisation',
        code: `int main() {
    Personne jean;
    strncpy(jean.prenom, "Jean", sizeof(jean.prenom) - 1);
    jean.prenom[sizeof(jean.prenom) - 1] = '\\0';

    strncpy(jean.nom, "Dupont", sizeof(jean.nom) - 1);
    jean.nom[sizeof(jean.nom) - 1] = '\\0';

    jean.age = 30;
    printf("Nom: %s %s, Age: %d", jean.prenom, jean.nom, jean.age);
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Il est même possible de définir une structure sans nom! On appelle cela une structure "anonyme".
    Elle aura tout de même un nom afin qu'on puisse l'appeler, mais celui-ci proviendra du
    <InlineCodeBlock>typedef</InlineCodeBlock> :
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'C',
        label: 'Définition',
        code: `typedef struct {
    char prenom[50];
    char nom[50];
    int age;
} Personne;`,
      },
      {
        language: 'C',
        label: 'Utilisation',
        code: `int main() {
    Personne jean;
    strncpy(jean.prenom, "Jean", sizeof(jean.prenom) - 1);
    jean.prenom[sizeof(jean.prenom) - 1] = '\\0';

    strncpy(jean.nom, "Dupont", sizeof(jean.nom) - 1);
    jean.nom[sizeof(jean.nom) - 1] = '\\0';

    jean.age = 30;
    printf("Nom: %s %s, Age: %d", jean.prenom, jean.nom, jean.age);
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Tout comme n'importe quelle variable, les structures sont stockées en mémoire. Elles peuvent se
    trouver sur le <Bold>stack</Bold> ou sur le <Bold>heap</Bold>, selon la manière dont elles sont
    déclarées et utilisées.
  </p>
  <CodeBlock
    fragment
    language="C"
    code={`int main() {
    Personne jean; // Stocké sur le stack
    Personne* pJean = malloc(sizeof(Personne)); // Stocké sur le heap
}`}
  />
  <p class="fragment">
    En général, nous allons essayer de les garder sur le <Bold>stack</Bold> pour éviter les allocations
    dynamiques.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Toutefois, même si les structures sont stockées sur le <Bold>stack</Bold>, nous allons souvent
    avoir besoin de les manipuler à l'intérieur de fonctions.
  </p>
  <p class="fragment">
    Les structures sont passées par valuer, comme une variable de type
    <InlineCodeBlock>int</InlineCodeBlock>, ce qui signifie que lorsque nous passons une structure à
    une fonction, une copie de cette structure est créée.
  </p>
  <p class="fragment">
    Indirectement, cela veut dire que les modifications apportées sur une structure fournit en
    argument à une fonction ne seront pas appliquées à la structure d'origine, mais seulement à la
    copie de celle-ci.
  </p>
  <p class="fragment">
    C'est pourquoi il est souvent préférable de passer l'adresse d'une structure à une fonction,
    plutôt que la structure elle-même, afin de permettre à la fonction de modifier directement la
    structure d'origine.
  </p>
</BasicSlide>
<BasicSlide>
  <p>Voici un exemple de fonction qui initialise une structure en utilisant un pointeur :</p>
  <MultiCodeBlock
    codes={[
      {
        language: 'C',
        label: 'Utilisation',
        code: `void initPersonne(Personne *p, const char *prenom, const char *nom, int age) {
    strncpy(p->prenom, prenom, sizeof(p->prenom) - 1);
    p->prenom[sizeof(p->prenom) - 1] = '\\0';

    strncpy(p->nom, nom, sizeof(p->nom) - 1);
    p->nom[sizeof(p->nom) - 1] = '\\0';

    p->age = age;
}

int main() {
    Personne jean;
    initPersonne(&jean, "Jean", "Dupont", 30);
    printf("Nom: %s %s, Age: %d", jean.prenom, jean.nom, jean.age);
}`,
      },
      {
        language: 'C',
        label: 'Définition',
        code: `typedef struct Personne {
    char prenom[50];
    char nom[50];
    int age;
} Personne;`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Comme vous l'aurez remarqué, lorsqu'on manipule un pointeur de structure, il faut utiliser
    l'opérateur <InlineCodeBlock>-&gt;</InlineCodeBlock> pour accéder aux membres de la structure au
    lieu de l'opérateur <InlineCodeBlock>.</InlineCodeBlock> qui est utilisé pour les variables de structure
    normales.
  </p>
  <p class="fragment">
    L'opérateur <InlineCodeBlock>-&gt;</InlineCodeBlock> est une syntaxe spéciale qui permet d'accéder
    aux membres d'une structure à travers un pointeur. Il est équivalent à l'expression
    <InlineCodeBlock>(*p).membre</InlineCodeBlock>, mais il est plus concis et plus facile à lire.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Il est possible d'avoir une structure qui contient une autre structure en tant que membre. Cela
    permet de créer des structures plus complexes et de mieux organiser les données.
  </p>
  <CodeBlock
    language="C"
    code={`typedef struct Adresse {
    char rue[100];
    char ville[50];
    char codePostal[10];
} Adresse;

typedef struct Personne {
    char prenom[50];
    char nom[50];
    int age;
    Adresse adresse;
} Personne;`}
  />
</BasicSlide>
<BasicSlide>
  <p>Il est aussi possible de déclarer une structure en lui assignant directement des valeurs :</p>
  <MultiCodeBlock
    codes={[
      {
        language: 'C',
        label: 'Utilisation',
        code: `int main() {
    Personne jean = {
        .prenom = "Jean",
        .nom = "Dupont",
        .age = 30,
        .adresse = {
            .rue = "3000 Bd de Tracy",
            .ville = "Sorel-Tracy",
            .codePostal = "J0J0J0"
        }
    };
    printf("Nom: %s %s, Age: %d, Adresse: %s %s %s", jean.prenom, jean.nom, jean.age, jean.adresse.rue, jean.adresse.ville, jean.adresse.codePostal);
}`,
      },
      {
        language: 'C',
        label: 'Définition',
        code: `typedef struct Adresse {
    char rue[100];
    char ville[50];
    char codePostal[10];
} Adresse;

typedef struct Personne {
    char prenom[50];
    char nom[50];
    int age;
    Adresse adresse;
} Personne;`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Une fonction peut retourner une structure, mais celle-ci sera retournée par valeur, ce qui
    signifie qu'une copie de la structure sera créée et retournée à l'appelant.
  </p>
  <p class="fragment">
    Si la structure est grande, ça peut être inefficace en termes de performance, car cela nécessite
    de copier toutes les données de la structure. C'est pourquoi il est souvent préférable de
    retourner un pointeur vers une structure allouée dynamiquement si celle-ci est grande, ou de
    directement modifier la structure fournie en argument par référence.
  </p>
</BasicSlide>
