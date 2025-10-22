<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 15 });
</script>

<BasicSlide>
  <p>
    En HTML, on doit toujours utiliser les bonnes balises qui sont conçues pour répondre à nos
    besoins. On ne veut pas utiliser un <InlineCodeBlock>p</InlineCodeBlock> et le styliser avec le CSS
    pour faire un titre... On veut utiliser les balises représentant un titre (e.g.
    <InlineCodeBlock>h1</InlineCodeBlock>, <InlineCodeBlock>h2</InlineCodeBlock>,
    <InlineCodeBlock>h3</InlineCodeBlock>, etc.). On veut également éviter d'utiliser trop
    d'éléments lorsque ce n'est pas nécessaire.
  </p>
  <p>
    De plus, on veut avoir la structure HTML la plus simple possible pour nos besoins. On évite de
    mettre des éléments HTML inutiles et on évite de mettre trop d'attributs HTML inutilement (e.g.
    les classes CSS). On devrait toujours cibler un style CSS par défaut pour tous les éléments
    (pour être consistent!) puis on utilise des classes CSS pour cibler spécifiquement les éléments
    selon nos besoins.
  </p>
</BasicSlide>
<BasicSlide subTitle="Mauvais code">
  <CodeBlock
    language="HTML"
    code={`<div class="content">
    <div class="title">Title</div>
    <div class="subtitle">Subtitle</div>
    <div class="post-content">Text Content</div>
    <div class="list"> 
      <ul> 
        <li>Element 1</li> 
        <li>Element 2</li>
      </ul> 
    </div>
</div>`}
  />
</BasicSlide>
<BasicSlide subTitle="Meilleur code">
  <CodeBlock
    language="HTML"
    code={`<div class="content">
    <h1>Title</h1>
    <h2>Subtitle</h2>
    <p>Text Content</p>
    <ul> 
        <li>Element 1</li> 
        <li>Element 2</li>
    </ul> 
</div>`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Il faut faire attention à bien nommer nos classes CSS. Le nom d'une classe CSS devrait expliquer
    son rôle au lieu de décrire le style visuel qu'elle applique. Ceci permettra d'avoir du code
    plus sémantique et de rendre nos classes plus facilement réutilisables et modifiables.
  </p>
  <p>
    Supposons que vous voulez faire en sorte que tous les liens "externes" de votre site soient
    rouge pour indiquer visuellement à l'utilisateur que c'est un lien qui va quitter votre site. On
    pourrait se créer une classe <InlineCodeBlock>red-link</InlineCodeBlock>
    qu'on pourrait appliquer à tous les liens externes du site.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Cependant, imaginez que votre site a plusieurs pages HTML et que vous avez une vingtaine de
    liens externes. Votre patron arrive et vous dit qu'il faut que tous les liens externes soient
    maintenant verts.
  </p>
  <p>
    <Bold>Que faites vous?</Bold>
  </p>
  <p>
    Est-ce que vous renommer votre classe CSS <InlineCodeBlock>red-link</InlineCodeBlock> en
    <InlineCodeBlock>green-link</InlineCodeBlock> et vous changez toutes vos pages HTML pour utiliser
    la nouvelle classe?
  </p>
  <p>
    Est-ce que vous vous dites que c'est trop d'ouvrage et que vous changez juste le style CSS de la
    classe <InlineCodeBlock>red-link</InlineCodeBlock>? Vous allez donc vous retrouver avec une
    classe CSS qui a un mauvais nom et qui ne fait même pas ce que son nom indique!
  </p>
</BasicSlide>
<BasicSlide subTitle="Mauvais code">
  <CodeBlock
    language="CSS"
    code={`.red-link {
    color: green;
}`}
  />
</BasicSlide>
<BasicSlide subTitle="Meilleur code">
  <p>
    En utilisant un nom qui est basé sur son style visuel, on rend une classe CSS difficile à
    changer et à réutiliser. Si on revient en arrière, pourquoi voulions-nous avoir les liens
    rouges? Pour indiquer qu'il s'agit d'un lien externe.
  </p>
  <p>
    On pourrait alors nommer notre classe CSS <InlineCodeBlock>external-link</InlineCodeBlock>.
    Ainsi, on peut facilement changer la couleur des liens externes sans avoir à se soucier de
    briser la sémantique entre la classe CSS et son style visuel.
  </p>
  <CodeBlock
    language="CSS"
    code={`.external-link {
    color: green;
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Il existe une solution encore meilleure afin de cibler tous les liens externes de votre site
    sans avoir à ajouter une classe CSS à chaque lien...
  </p>
  <p class="fragment">Utiliser un sélecteur d'attribut CSS qui cible tous les liens externes!</p>
  <CodeBlock
    fragment
    language="CSS"
    code={` /* Cible toutes les balises: <a target="_blank"> */
a[target="_blank"] {
    color: green;
}`}
  />
</BasicSlide>
