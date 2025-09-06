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
  registerInTOC({ page: 10 });
</script>

<BasicSlide
  links={[
    {
      label: 'Documentation sur la propriété font-size',
      href: 'https://developer.mozilla.org/fr/docs/Web/CSS/font-size',
    },
  ]}
>
  <p>
    Il existe plusieurs "<Bold>familles</Bold>" de propriétés CSS. On considère les propriétés qui
    affectent le rendu du texte comme étant de la famille formatage.
  </p>
  <p>
    La propriété <InlineCodeBlock>font-size</InlineCodeBlock> permet de définir la grosseur du texte.
    La valeur est un nombre suivi d'une unité de mesure (pour le moment px).
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `p {
    font-size: 28px;
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
        <p>Texte de taille 28px</p>
    </body>
</html>`,
      },
    ]}
  >
    <p class="text-[28px]">Texte de taille 28px</p>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide
  links={[
    {
      label: 'Documentation sur la propriété font-size',
      href: 'https://developer.mozilla.org/fr/docs/Web/CSS/font-size',
    },
    {
      label: 'Documentation sur la propriété font-weight',
      href: 'https://developer.mozilla.org/fr/docs/Web/CSS/font-weight',
    },
  ]}
>
  <p>
    La propriété <InlineCodeBlock>font-weight</InlineCodeBlock> permet de définir du "<Bold
      >gras</Bold
    >" à un texte. On peut utiliser la valeur
    <InlineCodeBlock>bold</InlineCodeBlock> pour appliquer du gras standard sur le texte ou
    <InlineCodeBlock>normal</InlineCodeBlock> pour éliminer le gras. Il est également possible de définir
    une valeur numérique entre <InlineCodeBlock>100</InlineCodeBlock> et
    <InlineCodeBlock>900</InlineCodeBlock> pour un contrôle plus précis sur l'effet du gras.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `p {
    font-weight: bold;
}

strong {
    font-weight: normal;
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
        <p>"p" qui est bold</p>
        <strong>"strong" qui n'est pas bold</strong>
    </body>
</html>`,
      },
    ]}
  >
    <p class="font-bold">"p" qui est bold</p>
    <strong class="font-normal">"strong" qui n'est pas bold</strong>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide
  links={[
    {
      label: 'Documentation sur la propriété font-size',
      href: 'https://developer.mozilla.org/fr/docs/Web/CSS/font-size',
    },
    {
      label: 'Documentation sur la propriété font-weight',
      href: 'https://developer.mozilla.org/fr/docs/Web/CSS/font-weight',
    },
    {
      label: 'Documentation sur la propriété font-style',
      href: 'https://developer.mozilla.org/fr/docs/Web/CSS/font-style',
    },
  ]}
>
  <p>
    La propriété <InlineCodeBlock>font-style</InlineCodeBlock> permet de définir un style italique. On
    peut utiliser la valeur <InlineCodeBlock>italic</InlineCodeBlock> pour appliquer un italique sur
    le texte ou <InlineCodeBlock>normal</InlineCodeBlock> pour éliminer l'italique.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `p {
    font-style: italic;
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
        <p>"p" qui est italic</p>
    </body>
</html>`,
      },
    ]}
  >
    <p class="italic">"p" qui est italic</p>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide
  links={[
    {
      label: 'Documentation sur la propriété font-variant',
      href: 'https://developer.mozilla.org/fr/docs/Web/CSS/font-variant',
    },
  ]}
>
  <p>
    La propriété <InlineCodeBlock>font-variant</InlineCodeBlock> permet de transformer le texte en caractères
    majuscules un peu plus petits et de grossir les lettres déjà en majuscule. On peut utiliser la valeur
    <InlineCodeBlock>small-caps</InlineCodeBlock> ou
    <InlineCodeBlock>normal</InlineCodeBlock> pour éliminer l'effet.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `p {
    font-variant: small-caps; 
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
        <p>Balise "p" avec small-caps</p>
    </body>
</html>`,
      },
    ]}
  >
    <p style="font-variant: small-caps;">Balise "p" avec small-caps</p>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide
  links={[
    {
      label: 'Documentation sur la propriété text-decoration',
      href: 'https://developer.mozilla.org/fr/docs/Web/CSS/text-decoration',
    },
  ]}
>
  <p>
    La propriété <InlineCodeBlock>text-decoration</InlineCodeBlock> permet d'appliquer une certaine décoration
    sur un texte. On peut utiliser la valeur
    <InlineCodeBlock>none</InlineCodeBlock> pour éliminer les effets possibles (valeur par défaut), ou
    la valeur <InlineCodeBlock>underline</InlineCodeBlock> pour afficher un trait sous les mots, ou la
    valeur <InlineCodeBlock>overline</InlineCodeBlock> pour afficher un trait au dessus des mots, ou
    finalement la valeur
    <InlineCodeBlock>line-through</InlineCodeBlock> qui affiche un trait sur le mot.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `p {
    text-decoration: underline;
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
        <p>Texte dans "p" est souligné</p>
    </body>
</html>`,
      },
    ]}
  >
    <p class="underline">Texte dans "p" est souligné</p>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide
  links={[
    {
      label: 'Documentation sur la propriété text-align',
      href: 'https://developer.mozilla.org/fr/docs/Web/CSS/text-align',
    },
  ]}
>
  <p>
    La propriété <InlineCodeBlock>text-align</InlineCodeBlock> permet d'appliquer un alignement de texte.
    Les valeurs possibles sont: <InlineCodeBlock>left</InlineCodeBlock>,
    <InlineCodeBlock>right</InlineCodeBlock>, <InlineCodeBlock>center</InlineCodeBlock> et
    <InlineCodeBlock>justify</InlineCodeBlock>. Ceci permet donc d'appliquer un alignement comme le
    ferait un logiciel de traitement de texte.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'CSS',
        code: `p {
    text-align: right;
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
        <p>Le texte dans "p" est à droite</p>
    </body>
</html>`,
      },
    ]}
  >
    <p class="text-right">Le texte dans "p" est à droite</p>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    On pourrait modifier le sélecteur "p" pour lui appliquer plusieurs propriétés en même temps. Par
    exemple, appliquons lui la couleur rouge, une grosseur de 24px, du gras, du italic, du
    small-caps, un soulignement et alignons le à droite.
  </p>
  <MultiCodeBlock
    fragment
    codes={[
      {
        language: 'CSS',
        code: `p {
    color: red;
    font-size: 24px;
    font-weight: bold;
    font-style: italic;
    font-variant: small-caps;
    text-decoration: underline;
    text-align: right;
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
        <p>Un paragraph vraiment horrible</p>
    </body>
</html>`,
      },
    ]}
  >
    <p
      class="text-right text-[24px] font-bold italic text-[red] underline"
      style="font-variant: small-caps;"
    >
      Un paragraph vraiment horrible
    </p>
  </MultiCodeBlock>
</BasicSlide>
