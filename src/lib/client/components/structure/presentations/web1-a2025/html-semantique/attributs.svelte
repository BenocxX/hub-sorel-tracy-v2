<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    CodeBlock,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 13 });
</script>

<BasicSlide>
  <p>
    Dans une balise, il est possible de spécifier un <Bold>attribut</Bold> qui ajoute une fonctionnalité
    à celle-ci. On indique cet attribut dans la balise suivit d'un signe égal (=) suivit de la valeur
    entre guillemets.
  </p>
  <CodeBlock
    language="HTML"
    code={`<p class="classe-css">Contenu du paragraphe</p>
<div id="mon-id">Contenu de la division</div>`}
  />
  <p class="fragment">
    Évidemment, comme pour les balises HTML, les attributs ont été standardisés. Il existe un
    certain nombre d'attributs valides sur certaines balises. Il existe également quelques attributs
    qui fonctionnent sur toutes les balises.
  </p>
</BasicSlide>
<BasicSlide
  links={[
    {
      label: "Documentation sur la balise 'abbr'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Element/abbr',
    },
    {
      label: "Documentation sur l'attribut 'title'",
      href: 'https://developer.mozilla.org/fr/docs/Web/HTML/Global_attributes/title',
    },
  ]}
>
  <p>
    La balise <InlineCodeBlock>abbr</InlineCodeBlock> permet de définir une abréviation ou un acronyme.
    Cette balise contient un attribut utilisable! C'est l'attribut
    <InlineCodeBlock>title</InlineCodeBlock>. En fait, cet attribut est utilisable sur toutes les
    balises HTML et est optionnel.
  </p>
  <p>
    L'attribut <InlineCodeBlock>title</InlineCodeBlock> permet d'afficher le contenu dans une infobulle
    lorsque la souris est sur la balise. Par convention, pour la balise
    <InlineCodeBlock>abbr</InlineCodeBlock>, on indique dans cet attribut ce que signifie
    l'abréviation.
  </p>
  <!-- eslint-disable-next-line svelte/no-useless-mustaches -->
  <CodeBlock language="HTML" code={'<abbr title="HyperText Markup Language">HTML</abbr>'}>
    <abbr title="HyperText Markup Language">HTML</abbr>
  </CodeBlock>
  <p class="fragment">
    Indiquer les abréviations dans cette balise permet d'aider notamment les systèmes de traduction,
    les moteurs de recherche et les correcteurs automatiques.
  </p>
</BasicSlide>
