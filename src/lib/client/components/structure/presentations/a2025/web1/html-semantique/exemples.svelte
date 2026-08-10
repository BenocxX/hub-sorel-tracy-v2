<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 3 });
</script>

<BasicSlide
  subTitle="La balise strong"
  links={[
    {
      label: "Documentation sur la balise 'strong'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/strong',
    },
  ]}
>
  <p>
    La balise <InlineCodeBlock>strong</InlineCodeBlock> permet d'appliquer un style gras à son contenu
    pour y indiquer une forte emphase.
  </p>
  <p class="fragment">
    Historiquement, la balise <InlineCodeBlock>b</InlineCodeBlock> permettait de mettre un contenu en
    gras, mais elle ne veut rien dire. On ne peut pas savoir la
    <Italic>nature</Italic> du contenu... seulement son style.
  </p>
  <p class="fragment">
    La balise <InlineCodeBlock>strong</InlineCodeBlock> donne un sens au contenu. On peut savoir la nature
    de son contenu au-delà de son style.
  </p>
  <CodeBlock
    fragment
    language="HTML"
    code={`<p>
    Ce message est très <strong>urgent</strong>.
</p>`}
  >
    <p>
      Ce message est très <strong class="font-semibold">urgent</strong>.
    </p>
  </CodeBlock>
</BasicSlide>
<BasicSlide
  subTitle="La balise em"
  links={[
    {
      label: "Documentation sur la balise 'em'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/em',
    },
  ]}
>
  <p>
    La balise <InlineCodeBlock>em</InlineCodeBlock> permet d'appliquer un style italique à son contenu
    pour y indiquer une faible emphase.
  </p>
  <p class="fragment">
    Historiquement, la balise <InlineCodeBlock>i</InlineCodeBlock> permettait de mettre un contenu en
    italique sans plus.
  </p>
  <CodeBlock
    fragment
    language="HTML"
    code={`<p>
    Ce message n'est pas nécessairement <em>urgent</em>.
</p>`}
  >
    <p>
      Ce message n'est pas nécessairement <em class="italic">urgent</em>.
    </p>
  </CodeBlock>
</BasicSlide>
<BasicSlide
  subTitle="La balise hr"
  links={[
    {
      label: "Documentation sur la balise 'hr'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/hr',
    },
  ]}
>
  <p>
    La balise <InlineCodeBlock>hr</InlineCodeBlock> permet de tracer une ligne horizontale (
    <Italic>Horizontal Rule</Italic>). Cette balise n'a pas de contenu, donc il n'est pas nécessaire
    de forcer la description de la nature du contenu.
  </p>
  <p class="fragment">
    Par contre, "tracer une ligne" veut quand même dire quelque chose. C'est pourquoi il existe
    maintenant un sens sémantique à la balise.
  </p>
  <div class="fragment space-y-4">
    <p>On utilise la balise hr pour indiquer un changement de thème ou pour séparer du contenu.</p>
    <CodeBlock
      language="HTML"
      code={`<p>Films populaires: ...</p>
<hr />
<p>Séries populaires: ...</p>`}
    >
      <p>Films populaires: ...</p>
      <hr class="my-2" />
      <p>Séries populaires: ...</p>
    </CodeBlock>
  </div>
</BasicSlide>
<BasicSlide
  subTitle="La balise ins"
  links={[
    {
      label: "Documentation sur la balise 'ins'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/ins',
    },
  ]}
>
  <p>
    La balise <InlineCodeBlock>ins</InlineCodeBlock> permet d'appliquer un style souligné à son contenu
    pour y indiquer du texte ajouté dans le document.
  </p>
  <p class="fragment">
    Historiquement, la balise <InlineCodeBlock>u</InlineCodeBlock> permettait de souligner un contenu
    sans plus.
  </p>
  <CodeBlock
    fragment
    language="HTML"
    code={`<p>
  Le mot <ins>sémantique</ins> a été récemment ajouté.
</p>`}
  >
    <p>
      Le mot <ins>sémantique</ins> a été récemment ajouté.
    </p>
  </CodeBlock>
</BasicSlide>
<BasicSlide
  subTitle="La balise del"
  links={[
    {
      label: "Documentation sur la balise 'del'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/del',
    },
  ]}
>
  <p>
    La balise <InlineCodeBlock>del</InlineCodeBlock> permet de tracer un trait sur le
    <del>contenu</del> pour indiquer que le texte a été supprimé ou remplacé dans le document.
  </p>
  <p class="fragment">
    Historiquement, la balise <InlineCodeBlock>s</InlineCodeBlock> permettait d'ajouter le trait sur
    le contenu sans plus.
  </p>
  <CodeBlock
    fragment
    language="HTML"
    code={`<p>
  Le code d'erreur est <del>rouge</del>
</p>`}
  >
    <p>
      Le code d'erreur est <del>rouge</del>
    </p>
  </CodeBlock>
</BasicSlide>
