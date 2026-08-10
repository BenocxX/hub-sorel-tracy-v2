<script lang="ts">
  import {
    BasicSlide,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { OutsideLink } from '$lib/client/components/utils';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 16 });
</script>

<BasicSlide>
  <p>
    Tous les types de <InlineCodeBlock>media queries</InlineCodeBlock> qui s'utilisent dans le code CSS
    peuvent être utilisées directement dans le code HTML lors de la liaison à un fichier CSS.
  </p>
  <p>
    Il est donc possible d'inclure un fichier, ou non, en suivant la même sémantique et la même
    syntaxe de média queries.
  </p>
  <p>
    Pour inclure un fichier suivant une <InlineCodeBlock>media query</InlineCodeBlock>, il suffit
    d'ajouter l'attribut <InlineCodeBlock>media</InlineCodeBlock> à la balise
    <InlineCodeBlock>link</InlineCodeBlock>. Si la <InlineCodeBlock>media query</InlineCodeBlock> réussit,
    le fichier sera inclus dans la page.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Cette façon de séparer les différents fichiers selon leur média respectif est une bonne pratique
    et simplifie de beaucoup la maintenance. Tout avoir dans le même fichier peut devenir rapidement
    complexe dans de gros projets.
  </p>
  <CodeBlock
    language="HTML"
    code={`<link media="print" href="styles.print.css" rel="stylesheet" />
<link media="handheld and (orientation: portrait)" href="styles.handheld.portrait.css" rel="stylesheet" />
<link media="(max-width: 480px)" href="styles.mobile.css" rel="stylesheet" />`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Il existe une ressource en ligne qui permet de déterminer les
    <InlineCodeBlock>media query</InlineCodeBlock> qui s'appliquent sur l'appareil qui visionne le site.
    Ce genre de ressource peut être très utile lors du développement.
    <OutsideLink href="http://cssmediaqueries.com/overview.html">CSS Media Queries</OutsideLink>
  </p>
  <p>
    Le W3C contient également beaucoup d'informations complémentaires sur les médias queries.
    <OutsideLink href="http://www.w3.org/TR/css3-mediaqueries/">W3C</OutsideLink>
  </p>
</BasicSlide>
