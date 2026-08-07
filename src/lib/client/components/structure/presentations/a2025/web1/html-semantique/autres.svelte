<script lang="ts">
  import {
    BasicSlide,
    List,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 8 });
</script>

<BasicSlide
  subTitle="La balise q"
  links={[
    {
      label: "Documentation sur la balise 'q'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/q',
    },
  ]}
>
  <p>
    La balise <InlineCodeBlock>q</InlineCodeBlock> permet de définir une courte citation. Normalement,
    les navigateurs ajoutent des marques de citation autour du texte (« … »).
  </p>
  <CodeBlock
    language="HTML"
    code="<q>Il ne faut pas croire tout ce qu'on lit sur Internet.</q> - Abraham Lincoln"
  >
    <q>Il ne faut pas croire tout ce qu'on lit sur Internet.</q> - Abraham Lincoln
  </CodeBlock>
</BasicSlide>
<BasicSlide
  subTitle="La balise cite"
  links={[
    {
      label: "Documentation sur la balise 'cite'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/cite',
    },
  ]}
>
  <p>
    La balise <InlineCodeBlock>cite</InlineCodeBlock> permet de définir le titre d'une oeuvre (film,
    livre, chanson, peinture, etc.). Les navigateurs vont afficher le contenu en italique.
  </p>
  <CodeBlock
    language="HTML"
    code={`<p>
  <cite>The Batman</cite> par Matt Reeves, 2022
</p>`}
  >
    <p>
      <cite>The Batman</cite> par Matt Reeves, 2022
    </p>
  </CodeBlock>
</BasicSlide>
<BasicSlide
  subTitle="La balise code"
  links={[
    {
      label: "Documentation sur la balise 'code'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/code',
    },
    {
      label: "Documentation sur la balise 'pre'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/pre',
    },
  ]}
>
  <p>
    La balise <InlineCodeBlock>code</InlineCodeBlock> permet de définir une zone de code informatique.
    La police de caractères va changer pour du "monospace".
  </p>
  <p>
    On utilise habituellement la balise <InlineCodeBlock>pre</InlineCodeBlock> avec la balise
    <InlineCodeBlock>code</InlineCodeBlock> pour conserver les espaces.
  </p>
  <div class="flex flex-col gap-2 sm:flex-row sm:gap-4">
    <div class="fragment flex-1 space-y-2">
      <p>
        Sans la balise <InlineCodeBlock>pre</InlineCodeBlock>:
      </p>
      <CodeBlock
        language="HTML"
        code={`<h1>Hello World en C++</h1>
<code>
  #include <stdio.h>
  int main()
  {
    printf("hello world");
    return 0;
  }
</code>`}
      >
        <h1>Hello World en C++</h1>
        <code>
          {`#include <stdio.h>
int main()
{
  printf("hello world");
  return 0;
}`}
        </code>
      </CodeBlock>
    </div>
    <div class="fragment flex-1 space-y-2">
      <p>
        Avec la balise <InlineCodeBlock>pre</InlineCodeBlock>:
      </p>
      <CodeBlock
        language="HTML"
        code={`<h1>Hello World en C++</h1>
<pre>
  <code>
    #include <stdio.h>
    int main()
    {
      printf("hello world");
      return 0;
    }
  </code>
</pre>`}
      >
        <h1>Hello World en C++</h1>
        <pre>
          <code>
{`#include <stdio.h>
int main()
{
  printf("hello world");
  return 0;
}`}
          </code>
        </pre>
      </CodeBlock>
    </div>
  </div>
</BasicSlide>
<BasicSlide
  subTitle="La balise sup"
  links={[
    {
      label: "Documentation sur la balise 'sup'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/sup',
    },
  ]}
>
  <List>
    {#snippet paragraph()}
      La balise <InlineCodeBlock>sup</InlineCodeBlock> permet de définir du texte en super-script (comme
      un exposant ou une référence de pied de page)
    {/snippet}
    <li>
      Une référence <sup class="!text-base sm:!text-2xl">1</sup>
    </li>
    <li>
      2<sup class="!text-base sm:!text-2xl">3</sup> = 8
    </li>
  </List>
  <CodeBlock
    language="HTML"
    code={`<p>
  Une référence<sup>1</sup>
</p>
<p>
  2<sup>3</sup> = 8
</p>`}
  >
    <p>
      Une référence<sup>1</sup>
    </p>
    <p>
      2<sup>3</sup> = 8
    </p>
  </CodeBlock>
</BasicSlide>
<BasicSlide
  subTitle="La balise sub"
  links={[
    {
      label: "Documentation sur la balise 'sub'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/sub',
    },
  ]}
>
  <List>
    {#snippet paragraph()}
      La balise <InlineCodeBlock>sub</InlineCodeBlock> permet de définir du texte en subscript.
    {/snippet}
    <li>
      H<sub class="!text-base sm:!text-2xl">2</sub>O
    </li>
    <li>
      Log<sub class="!text-base sm:!text-2xl">2</sub>10
    </li>
  </List>
  <CodeBlock
    language="HTML"
    code={`<p>
  H<sub>2</sub>O
</p> 
<p>
  Log<sub>2</sub>10
</p>`}
  >
    <p>
      H<sub>2</sub>O
    </p>
    <p>
      Log<sub>2</sub>10
    </p>
  </CodeBlock>
</BasicSlide>
