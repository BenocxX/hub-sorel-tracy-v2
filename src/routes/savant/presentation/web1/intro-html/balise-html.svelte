<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
    CodeBlock,
    Italic,
    List,
    setSlideSection,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { OutsideLink } from '$lib/client/components/utils';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
</script>

<BasicSlide
  links={[
    {
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/p',
      label: "Documentation sur la balise 'p'",
    },
  ]}
>
  <p>
    Le langage HTML est un langage de <Bold>balises standardisées</Bold>. C'est-à-dire qu'il existe
    une certaine quantité de balises <Italic>valides</Italic> qui forment le langage HTML (par exemple,
    la balise <Bold>animal</Bold> n'existe pas).
  </p>
  <p class="fragment">
    Puisque le langage HTML permet de décrire la structure d'un site Web, les balises considérées
    valides par le langage vont offrir une fonctionnalité sur la présentation de la page lorsque le
    navigateur va interpréter le code HTML en provenance d'une <Bold>réponse HTTP</Bold>.
  </p>
  <p class="fragment">
    Par exemple, la balise <InlineCodeBlock>p</InlineCodeBlock> va symboliser au navigateur qu'il doit
    traiter le contenu comme un <Bold>paragraphe</Bold>.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Les normes du langage sont établies par le <OutsideLink href="http://www.w3.org/"
      >W3C</OutsideLink
    >
    (<Bold>W</Bold>orld <Bold>W</Bold>ide <Bold>W</Bold>eb <Bold>C</Bold>onsortium). C'est un
    organisme qui s'assure de promouvoir la compatibilité des technologiques du Web telle que HTML,
    XML, CSS, XHTML, SVG, SOAP, etc.
  </p>
</BasicSlide>
<BasicSlide subTitle="Balises de structure">
  <p>
    Lorsqu'on veut écrire un document HTML qui pourra être consommé par un navigateur Internet pour
    afficher le contenu d'une page Web, il faut tout d'abord former la structure du document.
  </p>
  <p class="fragment">
    La structure permet au navigateur de bien interpréter le code HTML (au mieux de sa capacité).
  </p>
  <p class="fragment">Cette structure est formée de quatre parties.</p>
</BasicSlide>
<BasicSlide subTitle="Balises de structure">
  <p>
    On débute avec une partie pour indiquer au navigateur la version HTML qui sera utilisée pour
    l'interprétation du document (<Italic>doctype</Italic>).
  </p>
  <CodeBlock code="<!doctype html>" language="html" />
  <List>
    <li class="fragment">
      <p>
        Cette balise est unique en son genre (début avec un !) et ne se termine pas par un slash.
      </p>
    </li>
    <li class="fragment">
      <p>
        Le code présenté est pour la version HTML5 seulement. Il existe beaucoup d'autres doctypes
        (pour les anciennes version).
      </p>
    </li>
    <li class="fragment">
      <p>
        Cette balise doit absolument être la <Bold>PREMIÈRE</Bold> du document. Le navigateur doit savoir
        comment lire la suite du document.
      </p>
    </li>
  </List>
</BasicSlide>
<BasicSlide
  subTitle="Balises de structure"
  links={[
    {
      label: "Documentation sur la balise 'html'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/html',
    },
  ]}
>
  <p>
    Ensuite, on définit une balise qui sera considérée comme la <Bold>racine</Bold> du document et qui
    contiendra toutes les autres balises.
  </p>
  <div class="fragment space-y-4">
    <p>
      C'est la balise <InlineCodeBlock>html</InlineCodeBlock>. Toutes les autres sections (balises)
      seront inclues à l'intérieur de celle-ci sans exception.
    </p>
    <CodeBlock
      language="html"
      code={`<!doctype html>
<html>

</html>`}
    />
  </div>
</BasicSlide>
<BasicSlide
  subTitle="Balises de structure"
  links={[
    {
      label: 'Documentation sur la balise head',
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/head',
    },
  ]}
>
  <p>
    À l'intérieur de la balise <InlineCodeBlock>html</InlineCodeBlock>, on définit une partie pour <Bold
      >donner des directives au navigateur</Bold
    >. Le contenu de cette balise ne sera jamais affiché à l'internaute.
  </p>
  <p class="fragment">
    Par exemple, donner un titre à afficher dans l'onglet, donner le nom de l'auteur du site,
    indiquer un jeu de caractères, etc.
  </p>
  <div class="fragment space-y-4">
    <p>
      C'est la balise <InlineCodeBlock>head</InlineCodeBlock>.
    </p>
    <CodeBlock
      language="html"
      code={`<!doctype html>
<html>
  <head>
      <title>Ma première page HTML</title>
  </head> 
</html>`}
    />
  </div>
</BasicSlide>
<BasicSlide
  subTitle="Balises de structure"
  links={[
    {
      label: 'Documentation sur la balise body',
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/body',
    },
  ]}
>
  <p>
    Finalement, on intègre la balise <InlineCodeBlock>body</InlineCodeBlock> dans le document qui définit
    le contenu réel de la page Web qui sera affiché à l'internaute.
  </p>
  <CodeBlock
    fragment
    language="html"
    code={`<!doctype html>
<html>
  <head>
      <title>Ma première page HTML</title>
  </head> 
  <body>
      Bonjour le monde
  </body> 
</html>`}
  />
</BasicSlide>
<BasicSlide
  subTitle="Balises de bases"
  links={[
    {
      label: "Documentation sur la balise 'p'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/p',
    },
    {
      label: "Documentation sur la balise 'br'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/br',
    },
    {
      label: "Documentation sur la balise 'em'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/em',
    },
    {
      label: "Documentation sur la balise 'strong'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/strong',
    },
    {
      label: "Documentation sur la balise 'h1' à 'h6'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/h1',
    },
    {
      label: "Documentation sur la balise 'hr'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/hr',
    },
  ]}
>
  <List
    paragraph="Voici une liste de quelques balises de base très simple. Toutes ces balises s'écrivent dans le corps du document (body)."
  >
    <li>
      <InlineCodeBlock>p</InlineCodeBlock>
    </li>
    <li>
      <InlineCodeBlock>br</InlineCodeBlock>
    </li>
    <li>
      <InlineCodeBlock>em</InlineCodeBlock>
    </li>
    <li>
      <InlineCodeBlock>strong</InlineCodeBlock>
    </li>
    <li>
      <InlineCodeBlock>h1</InlineCodeBlock> à <InlineCodeBlock>h6</InlineCodeBlock>
    </li>
    <li>
      <InlineCodeBlock>hr</InlineCodeBlock>
    </li>
  </List>
</BasicSlide>
<BasicSlide
  subTitle="Balises de bases"
  links={[
    {
      label: "Documentation sur la balise 'p'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/p',
    },
    {
      label: "Documentation sur la balise 'br'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/br',
    },
  ]}
>
  <p>
    La balise <InlineCodeBlock>p</InlineCodeBlock> permet de décrire un paragraphe. Cette balise fait
    automatiquement un saut de ligne à sa suite. Ainsi, deux paragraphes de suite ne vont pas être collés
    sur la même ligne.
  </p>
  <CodeBlock
    fragment
    language="html"
    code={`<p>
  Une très longue phrase que j'aimerais avoir <br />
  sur deux lignes si possible.
</p>`}
  >
    <p>
      Une très longue phrase que j'aimerais avoir <br />
      sur deux lignes si possible.
    </p>
  </CodeBlock>
  <p class="fragment">
    La balise <InlineCodeBlock>br</InlineCodeBlock> permet de spécifier un saut de ligne entre des éléments
    du document HTML ou dans un texte.
  </p>
</BasicSlide>
<BasicSlide
  subTitle="Balises de bases"
  links={[
    {
      label: "Documentation sur la balise 'em'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/em',
    },
    {
      label: "Documentation sur la balise 'strong'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/strong',
    },
  ]}
>
  <div class="space-y-4">
    <p>
      La balise <InlineCodeBlock>em</InlineCodeBlock> permet d'appliquer un style italique sur du texte.
    </p>
    <CodeBlock
      fragment
      language="html"
      code={`<p>
    Je suis très vieux. J'ai <em>234</em> ans !
</p>`}
    >
      <p>
        Je suis très vieux. J'ai <em>234</em> ans !
      </p>
    </CodeBlock>
  </div>
  <div class="space-y-4">
    <p class="fragment">
      La balise <InlineCodeBlock>strong</InlineCodeBlock> permet d'appliquer un style gras (bold) sur
      du texte.
    </p>
    <CodeBlock
      fragment
      language="html"
      code={`<p>
    Mon nom est <strong>Bob Lewis</strong> et je viens en paix.
</p>`}
    >
      <p>
        Mon nom est <strong>Bob Lewis</strong> et je viens en paix.
      </p>
    </CodeBlock>
  </div>
</BasicSlide>
<BasicSlide
  subTitle="Balises de bases"
  links={[
    {
      label: "Documentation sur la balise 'h1' à 'h6'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/h1',
    },
  ]}
>
  <p>
    La balise <InlineCodeBlock>h1</InlineCodeBlock> jusqu'à <InlineCodeBlock>h6</InlineCodeBlock> permettent
    de définir un titre (heading) dans le document.
  </p>
  <p class="fragment">
    Il existe 6 niveaux de titre possible (soit <InlineCodeBlock>h1</InlineCodeBlock> jusqu'à <InlineCodeBlock
      >h6</InlineCodeBlock
    >, <InlineCodeBlock>h1</InlineCodeBlock> étant le plus gros et
    <InlineCodeBlock>h6</InlineCodeBlock> le plus petit).
  </p>
  <CodeBlock
    fragment
    language="html"
    code={`<h1>Mon premier site Web</h1>
<h3>Fait par moi-même</h3>
<p>
    Voici mon premier site Web !
</p>`}
  >
    <div>
      <h1 class="text-4xl font-bold">Mon premier site Web</h1>
      <h3 class="text-2xl">Fait par moi-même</h3>
      <p>Voici mon premier site Web !</p>
    </div>
  </CodeBlock>
</BasicSlide>
<BasicSlide
  subTitle="Balises de bases"
  links={[
    {
      label: "Documentation sur la balise 'hr'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/hr',
    },
  ]}
>
  <p>
    La balise <InlineCodeBlock>hr</InlineCodeBlock> permet de définir une ligne horizontale dans le document
    pour séparer deux parties de contenu.
  </p>
  <CodeBlock
    fragment
    language="html"
    lines="|5|"
    code={`<h1>Jour 1</h1>
<p>
  J'ai beaucoup de nourriture pour survivre 3 jours !
</p>
<hr />
<h1>Jour 2</h1>
<p>
  Je n'ai déjà plus de nourriture !
</p>`}
  >
    <div>
      <h1>Jour 1</h1>
      <p>J'ai beaucoup de nourriture pour survivre 3 jours !</p>
      <hr class="my-2" />
      <h1>Jour 2</h1>
      <p>Je n'ai déjà plus de nourriture !</p>
    </div>
  </CodeBlock>
</BasicSlide>
