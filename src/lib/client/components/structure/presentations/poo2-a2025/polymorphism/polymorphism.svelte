<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
    CodeBlock,
    MultiCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import { cn } from '$lib/client/utils';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });

  const items = ['GoldFish', 'GoldFish', 'Shark', 'Cod', 'Shark'];
</script>

<BasicSlide>
  <p>
    L'étymologie grecque du mot <Bold>polymorphisme</Bold> signifie "plusieurs formes". Grossièrement,
    il s'agit de la <Bold>capacité d'un parent de se transformer en un de ces enfants</Bold> lors de
    l'exécution.
  </p>
  <p>
    Le type réel d'un objet, issue du polymorphisme, sera connu uniquement lors de l'exécution
    contrairement au modèle conventionnel qui déterminera le type de l'objet lors de la compilation.
    On parle alors de <Bold>liaison dynamique</Bold>.
  </p>
  <p>
    Ceci permet de déterminer dynamiquement une méthode à lancée de l'exécution. Attention de ne pas
    confondre avec la redéfinition qui est le résultat d'une liaison statique par le compilateur.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    À quoi ça sert en pratique ? L'application la plus notoire du polymorphisme vient du fait qu'il
    sera maintenant possible de créer une collection qui contiendra des éléments de types
    différents.
  </p>
  <p class="fragment">
    L'idée est simple : il suffit de déterminer une classe parente intelligente et de faire une
    lignée d'enfants dérivés. Prenons comme exemple une classe
    <InlineCodeBlock>Poisson</InlineCodeBlock> puis des enfants comme :
    <InlineCodeBlock>GoldFish</InlineCodeBlock>, <InlineCodeBlock>Shark</InlineCodeBlock> et
    <InlineCodeBlock>Cod</InlineCodeBlock>. Il sera possible de créer une collection de
    <InlineCodeBlock>Poisson</InlineCodeBlock> et d'y insérer des enfants.
  </p>
  <div class="fragment flex items-center">
    {#each items as item, index (item + index)}
      <div class="flex flex-1 flex-col items-center gap-2">
        <div
          class={cn(
            'w-full py-2 text-center',
            index === 0 && 'rounded-l border-2',
            index > 0 && index < items.length - 1 && 'border-2 border-l-0',
            index === items.length - 1 && 'rounded-r border-2 border-l-0'
          )}
        >
          {item}
        </div>
        <div><InlineCodeBlock>[{index}]</InlineCodeBlock></div>
      </div>
    {/each}
  </div>
</BasicSlide>
<BasicSlide>
  <p>
    Sans le polymorphisme, on devrait avoir une <InlineCodeBlock>ArrayList</InlineCodeBlock> pour chaque
    type de poisson:
  </p>
  <CodeBlock
    language="Java"
    code={`ArrayList<GoldFish> goldFishes = new ArrayList<GoldFish>();
ArrayList<Shark> sharks = new ArrayList<Shark>();
ArrayList<Cod> cods = new ArrayList<Cod>();

goldFishes.add(new GoldFish());
goldFishes.add(new GoldFish());
sharks.add(new Shark());
sharks.add(new Shark());
cods.add(new Cod());`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Avec le polymorphisme, il est possible d'avoir une seule
    <InlineCodeBlock>ArrayList</InlineCodeBlock> qui contiendra tous les types de poissons:
  </p>
  <CodeBlock
    language="Java"
    code={`public class Ocean {
    private ArrayList<Fish> population;

    public Ocean() {
        population = new ArrayList<Fish>();
        population.add(new GoldFish());
        population.add(new GoldFish());
        population.add(new Shark());
        population.add(new Cod());
        population.add(new Shark());
        ...
    }
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Nous sommes d'accord pour dire que des poissons doivent manger afin de survivre. Il serait donc
    logique de créer une méthode pour gérer leur alimentation. Toutefois, chaque type de poisson
    mange différemment, un requin ne mangera pas comme un poisson rouge.
  </p>
  <p>
    Pour se faire, à l'intérieur de la classe abstraite
    <InlineCodeBlock>Poisson</InlineCodeBlock>, nous allons définir une méthode abstraite et la
    redéfinir dans chaque enfant.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Fish',
        code: `public abstract class Fish {
    public abstract void eat();
    ...
}`,
      },
      {
        language: 'Java',
        label: 'GoldFish',
        code: `public class GoldFish extends Fish {
    @Override
    public void eat() {
        System.out.println("The goldfish is eating flakes.");
    }
    ...
}`,
      },
      {
        language: 'Java',
        label: 'Shark',
        code: `public class Shark extends Fish {
    @Override
    public void eat() {
        System.out.println("The shark is eating a seal.");
    }
    ...
}`,
      },
      {
        language: 'Java',
        label: 'Cod',
        code: `public class Cod extends Fish {
    @Override
    public void eat() {
        System.out.println("The cod is eating small fish.");
    }
    ...
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Une seule collection avec une seule boucle suffit pour faire manger toute la population de
    poissons.
  </p>
  <CodeBlock
    language="Java"
    code={`public class Ocean {
    private ArrayList<Fish> population;

    ...

    private void feedPopulation() {
      for (Fish fish : population) {
          fish.eat();
      }
    }

    ...
}`}
  />
</BasicSlide>
