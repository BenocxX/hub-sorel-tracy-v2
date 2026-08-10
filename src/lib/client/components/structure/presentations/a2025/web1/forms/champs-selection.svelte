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
    Il est possible d'offrir un choix de sélection à l'utilisateur sous plusieurs formes. La
    première forme est d'utiliser des <Bold>boîtes à cocher</Bold>.
  </p>
  <p>
    On utilise cette approche lorsqu'il y a plusieurs choix possibles simultanément. Par exemple, si
    on demande la liste des consoles de jeu que vous avez en possession, il se peut que vous en ayez
    plusieurs ! Par contre, on utile cette approche lorsque le nombre de choix n'est pas
    astronomique...
  </p>
  <p>
    Dans le code, on utilise l'attribut <InlineCodeBlock>type</InlineCodeBlock> avec la valeur
    <InlineCodeBlock>checkbox</InlineCodeBlock>. Attention, le texte du choix ne va pas apparaître
    par magie ! Il faut écrire du texte à côté de la boîte à cocher manuellement...
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Il est possible de sélectionner automatiquement une option dans la liste des choix avec
    l'attribut <InlineCodeBlock>checked</InlineCodeBlock>. La valeur constitue encore une fois la
    donnée qui est envoyée au serveur, mais uniquement lorsque la case est cochée. Cet attribut
    fonctionne pour tous les champs de sélection.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <input type="checkbox" value="1" checked="true" />
  Batman<br />
  <input type="checkbox" value="2" />
  Robin<br />
</form>`}
  >
    <form>
      <input type="checkbox" value="1" />
      Batman
      <br />
      <input type="checkbox" value="2" />
      Robin
    </form>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    La deuxième forme de sélection est d'utiliser des <Bold>boutons radio</Bold>.
  </p>
  <p>
    On utilise cette approche lorsqu'il y a une seule possibilité de choix. Encore une fois, on
    utilise cette technique lorsqu'il n'y a pas une quantité monstrueuse de choix à offrir.
  </p>
  <p>
    Dans le code, on utilise l'attribut <InlineCodeBlock>type</InlineCodeBlock> avec la valeur
    <InlineCodeBlock>radio</InlineCodeBlock>. Tout comme pour les boîtes à cocher, Il faut écrire du
    texte manuellement pour identifier le choix.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Pour envoyer au serveur correctement les valeurs de boutons radio, il faut utiliser le même nom
    (attribut <InlineCodeBlock>name</InlineCodeBlock>) pour tous les champs. Le serveur va
    identifier seulement celui sélectionné comme étant la bonne valeur à envoyer.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <input name="heros" type="radio" value="1" />
  Batman<br />
  <input name="heros" type="radio" value="2" />
  Robin<br />
</form>`}
  >
    <form>
      <input name="heros" type="radio" value="1" />
      Batman
      <br />
      <input name="heros" type="radio" value="2" />
      Robin
      <br />
    </form>
  </CodeBlock>
</BasicSlide>
<BasicSlide>
  <p>
    La dernière forme de sélection possible est d'utiliser une <Bold>liste déroulante</Bold>.
  </p>
  <p>
    On utilise cette approche lorsqu'il y a une seule possibilité de choix, mais qu'il y en a
    beaucoup trop pour faire une liste de boutons radio. Il est également possible d'utiliser des
    listes de ce genre pour effectuer des sélections multiples pour remplacer les boîtes à cocher
    lorsqu'il y a encore une fois beaucoup trop de choix.
  </p>
  <p>
    Dans le code, on utilise une nouvelle balise <InlineCodeBlock>select</InlineCodeBlock> et chaque
    choix sera dans une balise <InlineCodeBlock>option</InlineCodeBlock>.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Pour envoyer au serveur correctement la sélection au serveur, on applique un nom uniquement à
    l'élément <InlineCodeBlock>select</InlineCodeBlock> et on applique les valeurs aux éléments <InlineCodeBlock
      >option</InlineCodeBlock
    >. La valeur de l'option sélectionnée sera envoyée au serveur. Dans le cas d'une sélection
    multiple, on utilise le même principe que pour les boîtes à cocher.
  </p>
  <CodeBlock
    language="HTML"
    code={`<form method="get" action="https://www.hubcst.ca">
  <select name="villain">
    <option value="1">Joker</option>
    <option value="2">Riddler</option>
    <option value="3">Bane</option>
    ...
  </select>
</form>`}
  >
    <form>
      <select name="villain" class="rounded border border-secondary outline-none">
        <option value="1">Joker</option>
        <option value="2">Riddler</option>
        <option value="3">Bane</option>
      </select>
    </form>
  </CodeBlock>
</BasicSlide>
