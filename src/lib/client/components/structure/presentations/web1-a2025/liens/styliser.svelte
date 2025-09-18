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
  registerInTOC({ page: 17 });
</script>

<BasicSlide>
  <p>
    Un lien peut se faire styliser avec du CSS de la même manière que n'importe quel autre balise.
    Vous pouvez donc cibler la balise <InlineCodeBlock>a</InlineCodeBlock> directement dans le CSS, y
    ajouter une classe CSS, utiliser un identifiant unique (id) ou n'importe quel autre sélecteur CSS
    de votre choix.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'HTML',
        code: `<body>
  <a href="page.html">Lien vers une page</a>
  <a href="https://www.google.ca" class="external">
    Lien vers une page (external)
  </a>
</body>`,
      },
      {
        language: 'CSS',
        code: `/* Mettre tous les liens en vert */
a {
    color: green;
}

/* Mettre tous les liens avec la classe 'external' en rouge pour représenter un lien externe */
a.external {
    color: red;
}`,
      },
    ]}
  >
    <a href="page.html" class="text-[green] underline"> Lien vers une page </a>
    <a href="https://www.google.ca" class="text-[red] underline"> Lien vers une page (external) </a>
  </MultiCodeBlock>
</BasicSlide>
<BasicSlide
  subTitle="Pseudo-classes"
  links={[
    {
      href: 'https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes',
      label: 'Documentation sur les pseudo-classes',
    },
  ]}
>
  <p>
    Cependant, il est possible de cibler des <Bold>états</Bold> du lien pour y appliquer des styles précis.
    Par exemple, si le lien a déjà été visité, si le lien est survolé par la souris, etc.
  </p>
  <p>
    On utilise des <Bold>pseudo-classes</Bold> pour cibler ses états dans le CSS. La syntaxe générale
    est le <InlineCodeBlock>sélecteur CSS</InlineCodeBlock> suivi de la
    <InlineCodeBlock>pseudo-classe</InlineCodeBlock>
    pour cibler un état séparé par deux points (:).
  </p>
  <CodeBlock
    language="CSS"
    code={`selecteur:pseudo-classe {
    color: red;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Par exemple, on peut utiliser la pseudo-classe <InlineCodeBlock>hover</InlineCodeBlock>
    pour cibler lorsque la souris est sur un élément pour y changer son style CSS.
  </p>
  <CodeBlock
    language="CSS"
    code={`a:hover {
    color: red;
}`}
  >
    <a href="https://www.google.ca" class="text-primary underline hover:text-[red]">
      Passes ta souris sur moi
    </a>
  </CodeBlock>
</BasicSlide>
<BasicSlide
  subTitle="Pseudo-classes"
  links={[
    {
      href: 'https://developer.mozilla.org/fr/docs/Web/CSS/Pseudo-classes',
      label: 'Documentation sur les pseudo-classes',
    },
  ]}
>
  <p>À noter qu'il est possible de cibler n'importe quel sélecteur CSS avec une pseudo-classe.</p>
  <CodeBlock
    language="CSS"
    code={`/* Tous les éléments qui ont la classe 'external' et qui sont survolés par la souris */
.external:hover {
    color: red;
}

/* L'élément qui a le id 'page-container' et qui est survolé par la souris */
#page-container:hover {
    color: blue;
}

/* Tous les liens qui ont la classe 'external' et qui sont survolés par la souris */
a.external:hover {
    color: green;
}`}
  />
</BasicSlide>
<BasicSlide subTitle="Pseudo-classes">
  <CodeBlock
    language="CSS"
    code={`/* Liens non-visités */
a {
    color: red;
}

/* Liens visités */
a:visited {
    color: green;
}

/* Liens survolés par la souris */
a:hover {
    color: blue;
}

/* Liens sélectionnés */
a:selected {
    color: pink;
}`}
  >
    <a href="page.html" class="text-[red] underline"> Lien non-visités </a>
    <a href="page.html" class="text-[red] underline visited:text-[green]"> Lien visités </a>
    <a href="page.html" class="text-[red] underline hover:text-[blue]">
      Lien survolés par la souris
    </a>
    <a href="page.html" class="text-[red] underline focus:text-[pink]"> Lien sélectionnés </a>
  </CodeBlock>
</BasicSlide>
