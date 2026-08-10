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
  registerInTOC({ page: 8 });
</script>

<BasicSlide>
  <p>
    Le <Bold>sélecteur de balises</Bold> permet d'appliquer les propriétés CSS de son bloc à toutes les
    balises sélectionnées.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `h1 {
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
        <h1>Le texte dans "h1" est rouge</h1>
        <h2>Le texte dans "h2" n'a pas de couleur</h2>
        <h3>Le texte dans "h3" n'a pas de couleur</h3>
        <h1>Le 2ieme "h1" est rouge aussi!</h1>
    </body>
</html>`,
      },
    ]}
  >
    <h1 class="text-4xl font-bold text-[red]">Le texte dans "h1" est rouge</h1>
    <h2 class="text-3xl">Le texte dans "h2" n'a pas de couleur</h2>
    <h3 class="text-2xl">Le texte dans "h3" n'a pas de couleur</h3>
    <h1 class="text-4xl font-bold text-[red]">Le 2ieme "h1" est rouge aussi!</h1>
  </MultiCodeBlock>
  <p>
    Ce code CSS indique donc que toutes les balises <InlineCodeBlock>h1</InlineCodeBlock> du document
    HTML seront écrites en rouge (puisque la propriété color indique ce comportement).
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    On peut appliquer le même bloc de code CSS à plusieurs sélecteurs. Il suffit de les séparer par
    des virgules (,). L'exemple ci-dessous applique une couleur rouge à toutes les balises
    <InlineCodeBlock>h1</InlineCodeBlock> et <InlineCodeBlock>p</InlineCodeBlock> du document HTML.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `h1, p {
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
        <h1>Le texte dans "h1" est rouge</h1>
        <h2>Le texte dans "h2" n'a pas de couleur</h2>
        <p>Le texte dans "p" est rouge aussi!</p>
    </body>
</html>`,
      },
    ]}
  >
    <h1 class="text-4xl font-bold text-[red]">Le texte dans "h1" est rouge</h1>
    <h2 class="text-3xl">Le texte dans "h2" n'a pas de couleur</h2>
    <p class="text-[red]">Le texte dans "p" est rouge aussi!</p>
  </MultiCodeBlock>
</BasicSlide>
