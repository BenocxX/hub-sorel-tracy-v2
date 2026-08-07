<script lang="ts">
  import {
    BasicSlide,
    Italic,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { Button, buttonVariants } from '$lib/client/components/ui/button';
  import { Input } from '$lib/client/components/ui/input';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 23 });
</script>

<BasicSlide>
  <p>
    Il est maintenant tant de soumettre le formulaire ! Pour envoyer concrètement les données vers
    le serveur, il faut ajouter un bouton spécial dans le formulaire. On utilise la balise
    <InlineCodeBlock>input</InlineCodeBlock> avec le type <InlineCodeBlock>submit</InlineCodeBlock>.
    Dans ce cas, la valeur de l'élément sera le texte affiché sur le bouton.
  </p>
  <p>
    Appuyer sur ce bouton va envoyer tous les éléments du formulaire à l'adresse spécifiée dans
    l'attribut <InlineCodeBlock>action</InlineCodeBlock> du formulaire.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <input type="text" name="nom" placeholder="Nom" />
  <input type="submit" value="Envoyer" />
</form>`}
  >
    <form class="space-y-2">
      <Input type="text" name="nom" placeholder="Nom" />
      <input type="submit" value="Envoyer" class={buttonVariants()} />
    </form>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Il existe également un bouton qui permet de réinitialiser tous les champs du formulaire. On
    utilise le type <InlineCodeBlock>reset</InlineCodeBlock>. Il est également possible de définir
    un bouton qui n'a pas d'action précisément définie, mais qui peut avoir un événement depuis
    <Italic>JavaScript</Italic>. On utilise le type <InlineCodeBlock>button</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <input type="text" name="nom" placeholder="Nom" />
  <input type="submit" value="Envoyer" />
  <input type="reset" value="Annuler" />
  <input type="button" value="Test" />
</form>`}
  >
    <form class="space-y-2">
      <Input type="text" name="nom" placeholder="Nom" />
      <div class="space-x-1">
        <input type="submit" value="Envoyer" class={buttonVariants()} />
        <input type="reset" value="Annuler" class={buttonVariants({ variant: 'destructive' })} />
        <input type="button" value="Test" class={buttonVariants({ variant: 'secondary' })} />
      </div>
    </form>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    Il existe également une façon plus sémantique de présenter les boutons avec une balise
    <InlineCodeBlock>button</InlineCodeBlock> qui prend comme attribut le type (button, reset ou submit).
    La solution avec les <InlineCodeBlock>input</InlineCodeBlock> ou avec les
    <InlineCodeBlock>button</InlineCodeBlock> sont équivalentes.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <input type="text" name="nom" placeholder="Nom" />
  <button type="submit">Envoyer</button>
  <button type="reset">Annuler</button>
  <button type="button">Test</button>
</form>`}
  >
    <form class="space-y-2">
      <Input type="text" name="nom" placeholder="Nom" />
      <div class="space-x-1">
        <Button type="submit">Envoyer</Button>
        <Button type="reset" variant="destructive">Annuler</Button>
        <Button type="button" variant="secondary">Test</Button>
      </div>
    </form>
  </CodeBlock>
</BasicSlide>
