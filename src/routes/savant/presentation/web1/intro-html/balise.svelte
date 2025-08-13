<script lang="ts">
  import {
    BasicSlide,
    Bold,
    CodeBlock,
    InlineCodeBlock,
    Italic,
    List,
    setSlideSection,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
</script>

<BasicSlide subTitle="Analogie">
  <div class="space-y-4">
    <List
      listType="ol"
      paragraph="Prenons une maison comme analogie. Pensez à votre maison, combien de pièces a-t-elle?"
    >
      <li>Un salon</li>
      <li>Une cuisine</li>
      <li>Deux chambres</li>
    </List>
  </div>
  <div class="fragment space-y-4">
    <p>Si j'écris cette structure en code, ça ressemblerait à:</p>
    <CodeBlock
      codeClassName="language-xml"
      code={`<maison>
    <salon></salon>
    <cuisine></cuisine>
    <chambre></chambre>
    <chambre></chambre>
</maison>`}
    />
  </div>
</BasicSlide>
<BasicSlide>
  <p>
    Une balise donne une <Bold>description</Bold> de son contenu.
  </p>
  <div class="fragment space-y-4">
    <p>
      Les balises sont des mots qui sont entourés entre des symboles plus petit (&lt;) et plus grand
      (&gt;).
    </p>
    <CodeBlock hideCopyButton codeClassName="language-xml" code="<animal>, <humain>" />
  </div>
  <div class="fragment space-y-4">
    <p>
      Les balises proprement formées viennent en pair: une <Bold>balise ouvrante</Bold> et une
      <Bold>balise fermante</Bold>. On symbolise la balise fermante avec un slash (/).
    </p>
    <CodeBlock hideCopyButton codeClassName="language-xml" code="<boisson>Coca-Cola</boisson>" />
  </div>
  <p class="fragment">
    Ce qui se trouve entre la balise ouvrante et la balise fermante est le contenu.
  </p>
</BasicSlide>
<BasicSlide>
  <p>Le contenu d'une balise peut être composé d'une ou plusieurs autres balises!</p>

  <div class="space-y-6">
    <p>
      Cela forme une relation parent / enfant que nous pouvons imaginer sous la forme d'un arbre.
    </p>
    <CodeBlock
      lines="|1,4|2,3|"
      code={`<repas>
    <boisson>Coca-Cola</boisson>
    <mets>Hamburger</mets>
</repas>`}
    />
    <p>
      Dans cet exemple, le parent de la balise <Bold>boisson</Bold> sera la balise
      <Bold>repas</Bold>. Inversement, la balise <Bold>repas</Bold> aura deux enfants:
      <Bold>boisson</Bold> et <Bold>mets</Bold>.
    </p>
  </div>
</BasicSlide>
<BasicSlide>
  <p>
    Une balise <Bold>qui n'a pas de contenu</Bold> n'a pas besoin d'une balise ouvrante et d'une balise
    fermante.
  </p>
  <div class="fragment space-y-6">
    <p>
      Pour indiquer la fin d'une balise sans contenu, on la termine habitullement par un slash (/)
      ce qui indique qu'elle est vide.
    </p>
    <CodeBlock
      hideCopyButton
      codeClassName="language-xml"
      code={`<personnes>
    <bill />
    <bob />
    <gertrude />
</personnes>`}
    />
  </div>
</BasicSlide>
<BasicSlide>
  <p>
    Il est possible de définir des attributs à une balise. Il s'agit d'une caractéristique propre à
    un élément.
  </p>
  <div class="fragment space-y-6">
    <p>
      On définit un attribut en spécifiant un nom suivi du caractère égal (=) et on indique la
      valeur de l'attribut entre guillemets. Il n'y a pas de limite d'attributs par balise.
    </p>
    <CodeBlock
      hideCopyButton
      codeClassName="language-xml"
      code={`<personnes>
    <bill age="22" />
    <bob age="35" profession="policier" />
    <gertrude age="65" />
</personnes>`}
    />
  </div>
</BasicSlide>
<BasicSlide>
  <p>
    Le concept de balise est issu du langage <Bold>XML</Bold> (e<Bold>X</Bold>tensible
    <Bold>M</Bold>arkup <Bold>L</Bold>anguage). L'idée de ce langage est d'être assez général pour
    permettre de représenter n'importe quel ensemble de données.
  </p>
  <CodeBlock
    fragment
    language="xml"
    lines="|1,10|2,5,6,9|3,7|4,8|"
    code={`<steam>
    <jeu>
        <titre>Balatro</titre>
        <annee>2024</annee>
    </jeu>
    <jeu>
        <titre>Battlefield 6</titre>
        <annee>2025</annee>
    </jeu>
</steam>`}
  />
</BasicSlide>
<BasicSlide subTitle="Règles XML">
  <p>
    Il existe quelques règles à respecter pour être conforme avec le langage XML. Si toutes les
    règles dans un document sont respectés, on dira que le document est <Italic>bien formé.</Italic>
  </p>
  <div class="fragment space-y-6">
    <List>
      <li>
        <Bold>Les éléments du document doivent être correctement fermés</Bold>. S'il n'y a pas de
        contenu, il faut prendre soin de terminer la balise par un slash. Si la balise a un contenu,
        il ne faut pas oublier la balise fermante.
      </li>
    </List>

    <div class="flex flex-col gap-4 sm:w-full sm:flex-row sm:gap-12">
      <div class="fragment flex-1 space-y-2">
        <span>Invalide:</span>
        <CodeBlock
          language="xml"
          code={`<personnes>
    <bob>`}
        />
      </div>
      <div class="fragment flex-1 space-y-2">
        <span>Valide:</span>
        <CodeBlock
          language="xml"
          code={`<personnes>
    <bob />
</personnes>`}
        />
      </div>
    </div>
  </div>
</BasicSlide>
<BasicSlide subTitle="Règles XML">
  <div class="space-y-6">
    <List>
      <li>
        <Bold>Les balises sont sensibles à la case</Bold>. Il faut respecter les majuscules et
        minuscules dans le nom des balises. Normalement, on écrit toutes les balises en minuscule.
      </li>
    </List>

    <div class="flex flex-col gap-4 sm:w-full sm:flex-row sm:gap-12">
      <div class="fragment flex-1 space-y-2">
        <span>Invalide:</span>
        <CodeBlock
          language="xml"
          code={`<Titre>Arcane</titre>
<titre>The Bear</TITRE>`}
        />
      </div>
      <div class="fragment flex-1 space-y-2">
        <span>Valide:</span>
        <CodeBlock
          language="xml"
          code={`<titre>Arcane</titre>
<titre>The Bear</titre>`}
        />
      </div>
    </div>
  </div>
</BasicSlide>
<BasicSlide subTitle="Règles XML">
  <div class="space-y-6">
    <List>
      <li>
        <Bold>Les balises doivent être correctement imbriquées</Bold>. Il faut s'assurer de bien
        fermer les balises pour respecter l'imbrication du parent et de l'enfant. Si une balise est
        ouverte à l'intérieur d'un enfant, elle doit se fermer au même niveau de l'arbre.
      </li>
    </List>

    <div class="flex flex-col gap-4 sm:w-full sm:flex-row sm:gap-12">
      <div class="fragment flex-1 space-y-2">
        <span>Invalide:</span>
        <CodeBlock language="xml" code="<p><b>test</p></b>" />
      </div>
      <div class="fragment flex-1 space-y-2">
        <span>Valide:</span>
        <CodeBlock language="xml" code="<p><b>test</b></p>" />
      </div>
    </div>

    <div class="fragment space-y-4 pt-4">
      <p class="!text-base sm:!text-2xl">
        Note: Il est plus facile de voir si les balises sont correctement imbriquées lorsque nous
        indentons le code. Exemple:
      </p>
      <CodeBlock
        language="xml"
        code={`<p>
  <b>test</b>
</p>`}
      />
    </div>
  </div>
</BasicSlide>
<BasicSlide subTitle="Règles XML">
  <div class="space-y-6">
    <List>
      <li>
        <Bold>Un document doit avoir une balise racine</Bold>. Il faut avoir un début pour l'arbre
        de balises. Cette balise racine est en quelque sorte le parent de tous les éléments du
        document.
      </li>
    </List>

    <div class="flex max-w-full flex-col gap-4 overflow-hidden sm:w-full sm:flex-row sm:gap-12">
      <div class="fragment flex-1 space-y-2 sm:w-1/2">
        <span>Invalide:</span>
        <CodeBlock
          language="xml"
          code={`<titre>The Batman</titre>
<titre>Warfare</titre>
<titre>Whiplash</titre>`}
        />
      </div>
      <div class="fragment flex-1 space-y-2 sm:w-1/2">
        <span>Valide:</span>
        <CodeBlock
          language="xml"
          code={`<films>
    <titre>The Batman</titre>
    <titre>Warfare</titre>
    <titre>Whiplash</titre>
</films>`}
        />
      </div>
    </div>
  </div>
</BasicSlide>
<BasicSlide subTitle="Règles XML">
  <div class="space-y-6">
    <List>
      <li>
        <Bold>La valeur des attributs doit être entre guillemets.</Bold>
      </li>
    </List>

    <div class="flex flex-col gap-4 sm:w-full">
      <div class="fragment flex-1 space-y-2">
        <span>Invalide:</span>
        <CodeBlock
          language="xml"
          code={`<paiement date=10/10/2014 montant=100>
    <destinataire>Bob Lewis</destinataire>
</paiement>`}
        />
      </div>
      <div class="fragment flex-1 space-y-2">
        <span>Valide:</span>
        <CodeBlock
          language="xml"
          code={`<paiement date="10/10/2014" montant="100">
    <destinataire>Bob Lewis</destinataire>
</paiement>`}
        />
      </div>
    </div>
  </div>
</BasicSlide>
