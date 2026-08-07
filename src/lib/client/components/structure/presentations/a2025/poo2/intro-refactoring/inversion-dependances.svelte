<script lang="ts">
  import {
    BasicSlide,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 20 });
</script>

<BasicSlide>
  <p>
    Ce principe vise à découpler les dépendances le plus possible entre les classes. Par exemple,
    une classe peut avoir au sein de ces propriétés d'autres classes. Ceci forme une dépendance et
    les dépendances peuvent causer des problèmes lors de changement dans le code (code smell).
  </p>
  <CodeBlock
    language="Java"
    code={`public class OldComputer {
    private final Monitor monitor;
    private final Keyboard keyboard;

    public OldComputer() {
        monitor = new Monitor(); 
        keyboard = new Keyboard(); 
    }
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Dans l'exemple précédent, la solution est de donner en argument au constructeur les instances.
    Ainsi, nous ne sommes pas dépendant d'une implémentation. Les classes Monitor et Keyboard
    pourrait avoir des enfants qui respecte le principe de Liskov.
  </p>
  <CodeBlock
    language="Java"
    code={`public class OldComputer {
    private final Monitor monitor;
    private final Keyboard keyboard;

    public OldComputer(Monitor monitor, Keyboard keyboard) {
        this.monitor = monitor;
        this.keyboard = keyboard;
    }
}`}
  />
</BasicSlide>
