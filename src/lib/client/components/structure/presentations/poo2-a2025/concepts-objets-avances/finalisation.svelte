<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 17 });
</script>

<BasicSlide>
  <List>
    {#snippet paragraph()}
      La finalisation permet de contrôler les modifications possibles sur une entité du programme.
      On utilise le mot clé <InlineCodeBlock>final</InlineCodeBlock> pour appliquer une finalisation.
      Il est possible de l'appliquer sur les entités suivantes :
    {/snippet}
    <li>Une classe</li>
    <li>Une méthode</li>
    <li>Une propriété</li>
    <li>Variable de méthode</li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    Lorsque le mot <InlineCodeBlock>final</InlineCodeBlock> est employé sur une
    <Bold>propriété</Bold>, ceci indique que la
    <Bold>valeur de la propriété, une fois assignée, ne pourra plus être modifiée</Bold>. On utilise
    cette technique combinée avec le mot clé <InlineCodeBlock>static</InlineCodeBlock> pour identifier
    une constante.
  </p>
  <CodeBlock
    language="Java"
    code={`private static final int ERROR_READ = 9;
private static final int ERROR_WRITE = 8;
private static final int ERROR_EXISTS = 7;`}
  />
  <p class="fragment">
    Le mot clé <InlineCodeBlock>static</InlineCodeBlock> fait en sorte de définir la donnée une seule
    fois parmi toutes les instances de la classe. Ce qui est parfait pour une constante puisqu'on ne
    veut pas des valeurs différentes d'une instance à l'autre.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Attention, si une propriété est définie comme finale, mais que la valeur n'est pas assignée
    directement à la déclaration, il faut absolument assigner la valeur dans le constructeur de la
    classe.
  </p>
  <CodeBlock
    language="Java"
    code={`private final char genre;

public MaClasse(char genre) {
    this.genre = genre;
}`}
  />
  <p class="fragment">
    D'ailleurs, c'est la pratique recommandée pour tous les paramètres du constructeur qui affectent
    des propriétés qui ne vont plus jamais changer durant la vie de l'objet.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Lorsque le mot <InlineCodeBlock>final</InlineCodeBlock> est employé sur une <Bold>classe</Bold>,
    ceci indique que <Bold>la classe ne peut plus avoir d'enfant</Bold>. Il sera maintenant
    impossible d'hériter de cette classe.
  </p>
  <p>
    Ce mécanisme permet une forme de sécurité en effectuant une certaine régulation des naissances
    uniquement sur les classes qui devraient avoir des enfants.
  </p>
  <CodeBlock
    language="Java"
    code={`public final class Goldfish extends Fish {
    ...
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Finalement, lorsque le mot <InlineCodeBlock>final</InlineCodeBlock> est employé sur une
    <Bold>méthode</Bold>, ceci indique que la <Bold>méthode ne pourra pas être redéfinie</Bold>.
  </p>
  <CodeBlock
    language="Java"
    code={`public class Fish {
    public final void eat() {
        ... 
    }
}`}
  />
  <p class="fragment">
    Il arrive parfois qu'une méthode qui effectue un traitement particulier interne à la classe soit
    publique pour diverses raisons et que la classe en question ne soit pas nécessairement finale.
    On utilise ce mécanisme pour éviter qu'un petit malin vienne court-circuiter le processus
    internet avec une redéfinition.
  </p>
</BasicSlide>
