<script lang="ts">
  import {
    BasicSlide,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { Input } from '$lib/client/components/ui/input';
  import { Textarea } from '$lib/client/components/ui/textarea';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 7 });
</script>

<BasicSlide>
  <p>
    On utilise la balise <InlineCodeBlock>input</InlineCodeBlock> pour ajouter un champ de saisi. Cette
    balise n'a pas de contenu, elle n'a que des attributs. L'un de ces attributs est <InlineCodeBlock
      >type</InlineCodeBlock
    > qui permet de définir le type de la saisie.
  </p>
  <p>
    Le premier cas est <InlineCodeBlock>text</InlineCodeBlock> ce qui affiche un champ texte standard.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <input type="text" />
</form>`}
  >
    <form>
      <Input type="text" />
    </form>
  </CodeBlock>
</BasicSlide>
<BasicSlide subTitle="placeholder">
  <p>
    Il est possible de définir un texte indicatif dans le champ lui-même. On utilise l'attribut <InlineCodeBlock
      >placeholder</InlineCodeBlock
    > pour assigner une telle valeur au champ.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <input type="text" placeholder="Prénom" /><br />
  <input type="text" placeholder="Nom" />
</form>`}
  >
    <form class="space-y-2">
      <Input type="text" placeholder="Prénom" />
      <Input type="text" placeholder="Nom" />
    </form>
  </CodeBlock>
</BasicSlide>
<BasicSlide subTitle="password">
  <p>
    Il existe un type <InlineCodeBlock>password</InlineCodeBlock> qui permet de se comporter comme un
    champ texte standard, mais de cacher le texte s'y trouvant.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <input type="text" placeholder="Prénom" /><br />
  <input type="text" placeholder="Nom" /><br />
  <input type="password" />
</form>`}
  >
    <form class="space-y-2">
      <Input type="text" placeholder="Prénom" />
      <Input type="text" placeholder="Nom" />
      <Input type="password" />
    </form>
  </CodeBlock>
</BasicSlide>
<BasicSlide subTitle="disabled">
  <p>
    L'attribut <InlineCodeBlock>disabled</InlineCodeBlock> permet d'indiquer que le champ ne peut pas
    être modifié.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <input type="text" disabled="true" />
</form>`}
  >
    <form class="space-y-2">
      <Input type="text" disabled />
    </form>
  </CodeBlock>
</BasicSlide>
<BasicSlide subTitle="maxlength">
  <p>
    L'attribut <InlineCodeBlock>maxlength</InlineCodeBlock> qui permet de définir la longueur maximale
    de la saisie ! Ainsi, on peut restreindre un certain nombre de caractères saisissables dans un champ
    texte. La valeur indique le nombre de caractères possibles. Dépasser ce nombre, la saisie est interrompue.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <input type="text" placeholder="DA" maxlength="7" />
</form>`}
  >
    <form class="space-y-2">
      <Input type="text" placeholder="DA" maxlength={7} />
    </form>
  </CodeBlock>
</BasicSlide>
<BasicSlide subTitle="value">
  <p>
    Il est également possible de définir une valeur par défaut dans le champ avec l'attribut
    <InlineCodeBlock>value</InlineCodeBlock>. Cet attribut est utilisé souvent dans le contexte des
    formulaires. Il s'agit essentiellement de la valeur qui sera envoyée au serveur !
  </p>
  <p>
    Donc, ce que tape l'internaute dans un champ texte se garde en mémoire dans l'attribut
    <InlineCodeBlock>value</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <input type="text" value="Batman" />
</form>`}
  >
    <form class="space-y-2">
      <Input type="text" value="Batman" />
    </form>
  </CodeBlock>
</BasicSlide>
<BasicSlide subTitle="name">
  <p>
    Finalement un autre attribut très important est le nom d'un champ. On utilise l'attribut
    <InlineCodeBlock>name</InlineCodeBlock> pour identifier ce nom. Il s'agit du nom associé à la valeur
    qui sera envoyé au serveur.
  </p>
  <p>
    Imaginez que sur le serveur, il s'agit d'une variable qui va avoir le nom de l'attribut
    <InlineCodeBlock>name</InlineCodeBlock> et qui aura comme valeur ce qui se trouve dans l'attribut
    <InlineCodeBlock>value</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <input type="text" name="firstname" />
</form>`}
  >
    <form class="space-y-2">
      <Input type="text" name="firstname" />
    </form>
  </CodeBlock>
</BasicSlide>
<BasicSlide subTitle="textarea">
  <p>
    Pour permettre la saisie d'information sur plusieurs lignes, par exemple écrire un commentaire
    et tenir compte des retours de ligne, il faut utiliser la balise
    <InlineCodeBlock>textarea</InlineCodeBlock>.
  </p>
  <p>
    Pour ce type de champ, la valeur se trouve entre les balises contrairement aux autres types de
    champ où la valeur est définie dans la propriété value.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <textarea name="commentaire"></textarea>
</form>`}
  >
    <form class="space-y-2">
      <Textarea name="commentaire" />
    </form>
  </CodeBlock>
</BasicSlide>
