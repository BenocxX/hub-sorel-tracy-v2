<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    Underline,
    List,
    Image,
    InlineCodeBlock,
    setSlideSection,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { registerInTOC } from '$lib/client/components/revealjs/custom/utils.svelte';
  import ThisIsFineGif from './this-is-fine.gif';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 5 });
</script>

<BasicSlide>
  <p>
    Probablement le principe le plus important qui s'applique pour les classes et les méthodes.
    L'idée est de <Bold>forcer la classe ou la méthode à n'avoir qu'une seule responsabilité</Bold>.
    C'est le noyau de tous les autres principes et aussi des techniques de refactoring.
  </p>
  <p>
    Une <Bold>méthode devrait faire qu'une seule et unique tâche</Bold>. Pourquoi ? Une méthode est
    le point le plus creux accessible pour décrire une opération. Au final, une application est une
    série d'appels de méthodes effectuée de façon logique.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Si les méthodes sont mal conçues, les chances sont grandes pour que la classe propriétaire soit
    elle aussi défaillante. Si nous allons plus loin, les appels à cette classe pourraient eux aussi
    être en problème et ainsi de suite ...
  </p>
  <Image src={ThisIsFineGif} alt="Dog in a room full of fire" figureClass="fragment mx-auto" />
</BasicSlide>
<BasicSlide>
  <List>
    {#snippet paragraph()}
      L'écriture correcte et de qualité d'une méthode requiert l'application de bonnes pratiques et
      de la discipline. Voici quelques pratiques à appliquer pour aider l'atteinte d'une
      responsabilité unique.
    {/snippet}
    <li>Nomenclature sémantique.</li>
    <li>Méthode courte.</li>
    <li>Nombre d'argument limité.</li>
    <li>Pas d'effet secondaire.</li>
    <li>Un seul niveau d'abstraction.</li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    Une méthode doit avoir absolument un nom sémantique. Le nom doit symboliser exactement la
    responsabilité de la méthode et ne pas être cryptique.
  </p>
  <p>
    De la même façon, les arguments doivent eux aussi être identifiés de façon claire et précise.
    Lors de l'appel, on doit savoir immédiatement ce qu'on attend comme données d'entrés. En lisant
    le nom de la méthode, on doit savoir ce qui devrait se passer avec les arguments. Somme toute,
    <Underline>on ne doit jamais avoir de doute sur le résultat</Underline> d'une méthode.
  </p>
  <List>
    <li>
      On nomme une méthode d'action en choisissant des verbes ou des groupes verbaux tel que <InlineCodeBlock
        >save</InlineCodeBlock
      >, <InlineCodeBlock>delete</InlineCodeBlock>, <InlineCodeBlock>sendPayment</InlineCodeBlock> ou
      <InlineCodeBlock>authenticate</InlineCodeBlock>.
    </li>
    <li>
      Si vous avez des difficultés à nommer une méthode, c'est un signe qu'elle a peut-être
      plusieurs responsabilités ...
    </li>
  </List>
</BasicSlide>
