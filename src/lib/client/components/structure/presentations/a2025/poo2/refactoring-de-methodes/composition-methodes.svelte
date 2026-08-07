<script lang="ts">
  import {
    BasicSlide,
    Italic,
    Bold,
    InlineCodeBlock,
    MultiCodeBlock,
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
    <Bold>Extraction de méthodes</Bold>. Le <Italic>refactoring</Italic> le plus commun. Il s'agit d'extraire
    un fragment d'une méthode dans une nouvelle méthode. Contribue énormément à la lisibilité du code
    (se lit comme un livre !).
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `public void afficherEcran() {
    afficherEntete();

    // Afficher le menu
    System.out.println("1. Batman");
    System.out.println("2. Joker");
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `public void afficherEcran() {
    afficherEntete();
    afficherMenu();
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Remplacer les codes d'erreur maison par des exceptions</Bold>. N'utiliser pas de gestion
    d'erreurs "maison", par exemple retourner <InlineCodeBlock>null</InlineCodeBlock> en cas d'erreur
    ou <InlineCodeBlock>-1</InlineCodeBlock>. Ceci augmente inutilement la confusion. Utilisez
    plutôt des exceptions claires.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `public int retirer(int montant) {
    if (balance < montant) {
        return -1;
    }

    balance -= montant;

    return 0;
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `public void retirer(int montant) throws BalanceException {
    if (balance < montant) {
        throw new BalanceException();
    }

    balance -= montant;
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Suppression de méthode inutile (inline method)</Bold>. Si une méthode n'a qu'une ligne et
    qu'elle est aussi claire que son contenu, elle n'est pas utile (sauf si elle est appelée à
    plusieurs endroits). Bonne application du jargon : "Trop c'est comme pas assez".
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `public int getPenalite() {
    return (plusDeCinqErreurs()) ? 10 : 2;
}

public boolean plusDeCinqErreurs() {
    return errors > 5;
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `public int getPenalite() {
    return (errors > 5) ? 10 : 2;
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Ne jamais assigner de valeur aux paramètres</Bold>. Ceci ne fait qu'augmenter la
    confusion. La solution consiste à utiliser une variable temporaire tout simplement.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `public int obtenirRabais(int valeur, int quantite) {
    if (valeur > 75) {
      valeur -= 4;
    }

    // ...

    return valeur;
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `public int obtenirRabais(int valeur, int quantite) {
    int resultat = valeur;
    if (valeur > 75) {
        resultat -= 4;
    }

    // ...

    return resultat;
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Supprimer les variables temporaires inutiles</Bold>. Lorsque vous avez une variable qui
    est assignée uniquement par un appel de méthode, il est préférable de supprimer cette variable
    pour la remplacer par l'appel directement. Il se peut qu'il faille peut-être donner un nom plus
    significatif à la méthode. Ceci aide à maintenir des petites méthodes.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `int grandTotal = commande.getGrandTotal();
return (grandTotal > 3500)
    ? "Élevé"
    : "Standard";`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `return (commande.getGrandTotal() > 3500)
    ? "Élevé"
    : "Standard";`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Séparer les variables temporaires</Bold>. Une variable temporaire qui n'est pas utilisée
    dans une boucle doit toujours être assignée une et une seule fois. Ceci augmente la lisibilité
    du code. Une variable = une responsabilité.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `int temp = 2 * (hauteur + largeur);
System.out.println(temp);
temp = hauteur * largeur;
System.out.println(temp);`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `final int perimetre = 2 * (hauteur + largeur);
System.out.println(perimetre);
final int air = hauteur * largeur;
System.out.println(air);`,
      },
    ]}
  />
  <p class="fragment">
    Le mot clé <InlineCodeBlock>final</InlineCodeBlock> permet de forcer le respect de cette condition.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Remplacer une variable temporaire par une expression</Bold>. S'il y a une variable
    temporaire qui est utilisée à plusieurs endroits, on peut considérer de créer une expression si
    le contexte le permet. Ceci aide à maintenir des méthodes courtes.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `int sousTotal = quantite * prixUnitaire;
if (sousTotal > 300) {
    return sousTotal * 0.95;
} else {
    return sousTotal * 0.98;
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `if (getSousTotal() > 300) {
    return getSousTotal() * 0.95;
} else {
    return getSousTotal() * 0.98;
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Introduire des variables explicatives</Bold>. Si vous avez une expression complexe (ou
    longue) qui ne s'explique pas d'elle-même, il est préférable de créer une variable avec un nom
    sémantique pour y assigner l'expression. Cette variable est
    <InlineCodeBlock>final</InlineCodeBlock> si possible.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `if ((platform.toUpperCase().indexOf("MAC") > -1) &&
    (browser.toUpperCase().indexOf("IE") > -1)) {
    // ... 
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `final boolean isMacOS = platform.toUpperCase().indexOf("MAC") > -1;
final boolean isInternetExplorer = browser.toUpperCase().indexOf("IE") > -1;
if (isMacOS && isInternetExplorer) {
    // ...
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Remplacer une méthode par une méthode d'un autre objet</Bold>. Si vous avez plusieurs
    variables locales et que vous avez un long calcul à faire sur ces variables et sur les données
    de l'objet, il est préférable de créer une nouvelle classe uniquement pour faire le calcul. On
    déplace ainsi la responsabilité.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `public double getRabais() {
    int a;
    int b;
    int c;

    // Très long calcul

    // ...
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `public double getRabais() {
    return new CalculateurRabais(this).calculer();
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Supprimer les modificateurs de propriétés immuables</Bold>. Si vous avez des données qui
    doivent être définies dans un constructeur et qui ne doivent jamais être modifiées, supprimer le
    setter et rendez la propriété <InlineCodeBlock>final</InlineCodeBlock>.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `private int id;

public Client(int id) {
    this.id = id;
}

public void setId(int id) {
    this.id = id;
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `private final int id;

public Client(int id) {
    this.id = id;
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Remplacer les try/catch d'une exception par une condition</Bold> lorsque le test d'exception
    n'est pas utile. Les exceptions doivent être utilisées pour les cas <Bold>D'EXCEPTIONS</Bold>.
    Pas les cas contrôlables.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Mauvais',
        code: `public int getArticle(int index) {
    try {
        return quantiteArticles[index];
    } catch (ArrayIndexOutOfBoundsException e) {
        return 0;
    }
}`,
      },
      {
        language: 'Java',
        label: 'Bon',
        code: `public int getArticle(int index) {
    if (index >= quantiteArticles.length) {
        return 0;
    }

    return quantiteArticles[index];
}`,
      },
    ]}
  />
</BasicSlide>
