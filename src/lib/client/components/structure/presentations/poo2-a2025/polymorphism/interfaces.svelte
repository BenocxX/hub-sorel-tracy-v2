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
  registerInTOC({ page: 8 });
</script>

<BasicSlide>
  <p>
    Une interface (au sens orienté-objet) est un ensemble de règles qui doivent être appliquées par
    toutes les classes qui <Bold>implémentent</Bold> l'interface.
  </p>
  <p>
    Ces règles sont représentées par le biais de méthodes qui doivent absolument être définies dans
    les classes qui implémentent l'interface (comme si elles étaient des méthodes abstraites).
  </p>
  <CodeBlock
    language="Java"
    code={`public interface Movable {
    public void moveUp();
    public void moveDown();
    public void moveLeft();
    public void moveRight();
    public void jump();
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Pour appliquer l'interface à une classe, il suffit d'utiliser le mot clé
    <InlineCodeBlock>implements</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="Java"
    code={`public class Player implements Movable {
    public void moveUp() { ... }
    public void moveDown() { ... }
    public void moveLeft() { ... }
    public void moveRight() { ... }
    public void jump() { ... }
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Ceci permet une sécurité du code puisque l'interface force les classes qui l'implémentent de
    déclarer une certaine quantité de méthodes pour être "conforme". C'est comme une "police du
    code" , une "police du plan", le "plan du plan", le "contrat", etc. Cette conformité va octroyer
    les <Bold>mêmes bénéfices que les méthodes abstraites et le polymorphisme</Bold>.
  </p>
  <p>
    Dans l'exemple précédent, nous demandons donc que toutes les classes « mobile » implémentent les
    différents mouvements directionnels et la capacité de sauter. D'ailleurs, on essaie d'attribuer
    un nom qui indique "capable de ...".
  </p>
  <p>
    Une classe peut implémenter plusieurs interfaces ! Donc, suivre plusieurs ensembles de règles.
    Par exemple, une classe mobile, contrôlable et affichable.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Une interface ne pourra JAMAIS avoir de propriété ou des méthodes avec un traitement. C'est
    simplement un ensemble de méthodes qui doivent être implémentées par les classes qui
    l'utilisent. Les interfaces peuvent également contenir des constantes.
  </p>
  <List paragraph="Quelques exemples :">
    <li><InlineCodeBlock>ActionListener</InlineCodeBlock></li>
    <li><InlineCodeBlock>Iterator</InlineCodeBlock></li>
    <li><InlineCodeBlock>Countable</InlineCodeBlock></li>
    <li><InlineCodeBlock>Drawable</InlineCodeBlock></li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    Quelles sont les différences entre une <Bold>classe abstraite</Bold> et une
    <Bold>interface</Bold> ?
  </p>
  <List paragraph="Classe abstraite">
    <li>Peu contenir des propriétés et des méthodes implémentées;</li>
    <li>Une sorte d'idée générale qui permet d'englober une famille de classes concrètes.</li>
  </List>
  <List paragraph="Interfaces">
    <li>Contiens uniquement des méthodes vides à implémenter et des constantes;</li>
    <li>Une classe peut implémenter plusieurs interfaces.</li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>Pourquoi utiliser une plutôt qu'une autre ?</p>
  <p>
    On préfère une <InlineCodeBlock>interface</InlineCodeBlock> lorsqu'il n'y a pas de traitement ou
    des données, mais plutôt un ensemble de règles. L'interface est en quelque sorte un contrat de code
    à respecter. Peut être utilisé pour de la programmation fonctionnelle sous Java.
  </p>
  <p>
    Une <Bold>classe abstraite</Bold> représente un concept inexistant dans la réalité d'un groupe de
    classes concrètes. Une <Bold>interface</Bold> représente plus des comportements et des actions que
    devrait avoir une classe quelconque.
  </p>
</BasicSlide>
