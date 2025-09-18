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
  registerInTOC({ page: 3 });
</script>

<BasicSlide
  links={[
    {
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/a',
      label: "Documentation sur la balise 'a'",
    },
  ]}
>
  <p>
    On utilise la balise <InlineCodeBlock>a</InlineCodeBlock> pour former un lien HTML interne ou externe.
    Il faut préciser une propriété de balise <InlineCodeBlock>href</InlineCodeBlock> qui indique la destination
    du lien. Donc, vers où l'internaute sera amené s'il clique sur le lien.
  </p>
  <p>
    Le contenu de cette balise est ce qui sera visible à l'utilisateur. Concrètement, ce qu'il
    pourra cliquer (du texte, une division, une image, etc.).
  </p>
  <CodeBlock
    language="HTML"
    lines="3"
    code={`...
<body>
    <a href="page2.html">Mon premier lien</a>
</body>
...`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Lorsqu'on utilise la propriété <InlineCodeBlock>href</InlineCodeBlock> en indiquant directement le
    nom d'une page, on fait référence à une page interne à notre site. Tout comme lorsqu'on spécifie
    l'emplacement du fichier CSS, si les pages se retrouvent dans d'autres répertoires, il faudra indiquer
    le chemin complet relatif ou absolu. <Bold>Le chemin relatif sera préféré</Bold>.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'HTML',
        code: `<!-- Lien vers une page dans le même répertoire que le fichier actuel -->
<a href="./page2.html">Mon premier lien</a>

<!-- Lien vers une page dans un répertoire enfant -->
<a href="./page3.html">Mon deuxième lien</a>

<!-- Lien vers une page dans un répertoire parent -->
<a href="../index.html">Mon troisième lien</a>`,
      },
      {
        language: 'Bash',
        label: 'Structure des fichiers',
        code: `index.html
pages/
    page2.html
    page3.html`,
      },
    ]}
  />
</BasicSlide>
