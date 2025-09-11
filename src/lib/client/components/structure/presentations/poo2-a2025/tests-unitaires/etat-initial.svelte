<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 16 });
</script>

<BasicSlide>
  <p>
    Après un test, si les données de l'objet ont été modifiées par une méthode de tests, ces
    dernières resteront modifiées pour les tests suivants.
  </p>
  <p>
    <Bold>JUnit ne garantit pas l'ordre d'exécution des tests</Bold> ! Ce n'est pas alphabétique ni selon
    l'ordre d'écriture dans le fichier. On peut supposer que l'exécution est aléatoire. C'est pourquoi
    qu'un test ne doit jamais dépendre d'un autre.
  </p>
  <p>
    Il faut donc porter une attention particulière à redéfinir les données de façon adéquate pour
    chaque test (dans un état initial défini). Sinon, vous pourriez exécuter un code avec des
    données non contrôlées et c'est contraire à la nature d'un test.
  </p>
  <p>
    Un test doit avoir le contrôle total des données pour ultimement avoir une maîtrise sur le
    résultat.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    On nomme <Italic>fixture</Italic> l'état fixé (contrôlé, initial) du programme qui agit comme base
    pour exécuter les tests. Souvenez-vous, les tests doivent être indépendants !
  </p>
  <p class="fragment">
    On arrive à respecter cette règle avec une <Italic>fixture</Italic>. Il s'agit de
    <Bold>méthodes spéciales qui sont lancées AVANT et APRÈS chaque test</Bold> (il n'est pas obligatoire
    d'inclure les deux).
  </p>
  <p class="fragment">
    On utilise l'annotation <InlineCodeBlock>@BeforeEach</InlineCodeBlock> pour une méthode qui est appelée
    AVANT chaque test. On nomme cette méthode traditionnellement
    <InlineCodeBlock>setUp</InlineCodeBlock>. Elle permet de définir les données de base pour les
    tests.
  </p>
  <p class="fragment">
    On utilise l'annotation <InlineCodeBlock>@AfterEach</InlineCodeBlock> pour la méthode inverse qui
    permet d'exécuter du code APRÈS chaque test. On nomme traditionnellement cette méthode
    <InlineCodeBlock>tearDown</InlineCodeBlock>.
  </p>
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="Java"
    code={`@BeforeEach
public void setUp() {
    System.out.println("Avant");
}

@AfterEach
public void tearDown() {
    System.out.println("Après");
}

@Test
public void testX() {
    System.out.println("Je suis dans le test X !");
}

@Test
public void testY() {
    System.out.println("Je suis dans le test Y !");
}`}
  />
</BasicSlide>
