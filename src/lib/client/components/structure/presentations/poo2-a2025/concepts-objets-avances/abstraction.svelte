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
  registerInTOC({ page: 22 });
</script>

<BasicSlide>
  <p>
    L’abstraction peut être appliquée en utilisant le mot clé
    <InlineCodeBlock>abstract</InlineCodeBlock> sur une classe ou sur une méthode. Ce concept vient apporter
    une nouvelle dimension sémantique aux classes et permet de forcer certains comportements quant à
    l’utilisation de la classe.
  </p>
  <p>
    Lorsque le mot <InlineCodeBlock>abstract</InlineCodeBlock> est employé sur une
    <Bold>classe</Bold>, ceci indique qu’<Bold>il sera impossible d’instancier un objet</Bold> depuis
    la classe puisqu’elle n’existe pas réellement dans le contexte de l’application. Elle ne sera jamais
    une entité manipulable dans le programme. Pour utiliser la classe, on force donc l’héritage de celle-ci
    par une classe concrète.
  </p>
  <CodeBlock
    language="Java"
    code={`public abstract class Fish {
    ... 
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    L’abstraction sur une classe doit être prise au sens philosophique. Si la classe ne représente
    pas une entité manipulable dans le programme, elle doit être abstraite pour éviter de pouvoir
    l’instancier maladroitement ce qui contribue à une forme de sécurité.
  </p>
  <p>
    Par exemple, si on imagine un programme qui manipule des poissons (rouge, piranha et requins) on
    peut regrouper les éléments communs à la famille sous une classe
    <InlineCodeBlock>Poisson</InlineCodeBlock>. Par contre, le programme ne fera jamais de
    "poisson"... il fera un poisson rouge, un piranha ou un requin. On empêche donc la création de
    "poisson" en déclarant cette classe comme étant abstraite.
  </p>
  <p>Une classe abstraite impose un format commun aux classes dérivées.</p>
</BasicSlide>
