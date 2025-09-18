<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
    CodeBlock,
    MultiCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 18 });
</script>

<BasicSlide>
  <p>
    Qu'arrive-t-il si nous voulons appliquer un style différent pour deux paragraphes (balise
    <InlineCodeBlock>p</InlineCodeBlock>)?
  </p>
  <p>
    Avec le sélecteur de balise, c'est impossible puisqu'il s'applique à toutes les balises qu'il
    sélectionne.
  </p>
  <p>
    Pour avoir un contrôle plus précis sur des éléments du document HTML, nous allons avoir recours
    à des <Bold>classes CSS</Bold>.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Tout d'abord, dans le code HTML qui contient nos paragraphes, nous allons ajouter un attribut <InlineCodeBlock
      >class</InlineCodeBlock
    > à nos balises. Ceci va permettre par la suite au CSS de pouvoir le sélectionner correctement.
  </p>
  <CodeBlock
    language="HTML"
    lines="7,8"
    code={`<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <p class="premier-paragraphe">Mon premier paragraphe</p>
        <p class="deuxieme-paragraphe">Mon deuxième paragraphe</p>
    </body>
</html>`}
  />
</BasicSlide>
<BasicSlide
  links={[
    {
      label: 'Documentation sur la propriété color',
      href: 'https://developer.mozilla.org/fr/docs/Web/CSS/color',
    },
  ]}
>
  <p>
    Une fois que la classe est définie dans le code HTML, il suffit d'ajouter un bloc CSS avec le
    sélecteur de classes. On indique donc le nom de la classe précédé par un point (.) pour préciser
    qu'il s'agit d'une classe (nous verrons au cours de la session qu'il existe beaucoup d'autres
    sélecteurs).
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `.premier-paragraphe {
    color: red;
}

.deuxieme-paragraphe {
    color: blue;
}`,
      },
      {
        language: 'HTML',
        code: `<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <p class="premier-paragraphe">Mon premier paragraphe</p>
        <p class="deuxieme-paragraphe">Mon deuxième paragraphe</p>
    </body>
</html>`,
      },
    ]}
  >
    <p class="text-[red]">Mon premier paragraphe</p>
    <p class="text-[blue]">Mon deuxième paragraphe</p>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide
  links={[
    {
      label: 'Documentation sur la propriété color',
      href: 'https://developer.mozilla.org/fr/docs/Web/CSS/color',
    },
  ]}
>
  <p>
    Dépendamment du niveau de précision nécessaire, il est possible d'appliquer la classe sur un
    sélecteur de balise! On indique simplement la balise suivie d'un point (.) et du nom de classe.
    On s'assure ainsi que le code CSS est appliquer <Bold>UNIQUEMENT</Bold> sur les balises qui ont la
    classe CSS précisée.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `p.texte-rouge {
    color: red;
}`,
      },
      {
        language: 'HTML',
        code: `<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <p class="texte-rouge">Un paragraphe</p>
        <strong class="texte-rouge">Un texte en gras</strong>
    </body>
</html>`,
      },
    ]}
  >
    <p class="text-[red]">Un paragraphe</p>
    <strong>Un texte en gras</strong>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide
  links={[
    {
      label: 'Documentation sur la propriété color',
      href: 'https://developer.mozilla.org/fr/docs/Web/CSS/color',
    },
  ]}
>
  <p>
    On peut également ajouter un sélecteur de balise normal qui va sélectionner tous les
    paragraphes. Ceci permet donc d'appliquer un style par défaut à tous les paragraphes et au
    besoin, nous allons préciser nos comportements via les classes.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `p {
    color: green;
}

p.texte-rouge {
    color: red;
}

p.texte-bleu {
    color: blue;
}`,
      },
      {
        language: 'HTML',
        code: `<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <p>Paragraphe de base</p>
        <p class="texte-rouge">Paragraph rouge</p>
        <p class="texte-bleu">Paragraph bleu</p>
    </body>
</html>`,
      },
    ]}
  >
    <p class="text-[green]">Paragraphe de base</p>
    <p class="text-[red]">Mon premier paragraphe</p>
    <p class="text-[blue]">Mon deuxième paragraphe</p>
  </MultiCodeBlock>
</BasicSlide>
