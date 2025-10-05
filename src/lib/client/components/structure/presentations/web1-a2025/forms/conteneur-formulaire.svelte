<script lang="ts">
  import {
    BasicSlide,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 5 });
</script>

<BasicSlide>
  <p>
    Dans le code HTML, on utilise la balise <InlineCodeBlock>form</InlineCodeBlock> pour déterminer un
    conteneur pour notre formulaire. Il faudra intégrer à l'intérieur tous les champs de saisie que nous
    voulons envoyer au serveur.
  </p>
  <p>
    Cette balise prend deux propriétés très importantes :
    <InlineCodeBlock>method</InlineCodeBlock> et <InlineCodeBlock>action</InlineCodeBlock>. La
    méthode permet de spécifier si nous sommes en <InlineCodeBlock>POST</InlineCodeBlock> ou en
    <InlineCodeBlock>GET</InlineCodeBlock> et l'action permet de spécifier l'URL du serveur à envoyer
    les données.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">

</form>`}
  />
</BasicSlide>
<BasicSlide subTitle="Autocomplete">
  <p>
    Il est également possible de dire au navigateur d'ignorer "l'auto-complete" du formulaire. Tous
    les navigateurs gardent en mémoire des informations pour écrire automatiquement dans les champs
    lorsque c'est propice. Pour empêcher ce comportement, on peut ajouter la propriété
    <InlineCodeBlock>autocomplete="off"</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form autocomplete="off" method="get" action="https://www.hubcst.ca">

</form>`}
  />
</BasicSlide>
