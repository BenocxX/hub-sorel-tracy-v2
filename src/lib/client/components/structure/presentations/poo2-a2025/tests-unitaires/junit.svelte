<script lang="ts">
  import {
    BasicSlide,
    List,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 11 });
</script>

<BasicSlide>
  <p>
    Pour facilement intégrer des tests unitaires dans un projet, il est indispensable d'avoir un
    framework qui s'occupe de l'environnement et qui simplifie également la rédaction du code source
    des tests.
  </p>
  <p>
    JUnit est le Framework de tests unitaires le plus populaire sous Java. Chaque langage de
    programmation (PHP, C#, Python, etc.) comprend un Framework du même genre.
  </p>
  <List paragraph="Quelques caractéristiques (version 5 de JUnit) :">
    <li>C'est un produit open-source bien documenté;</li>
    <li>Fournit des annotations et une suite d'assertions pour simplifier la rédaction;</li>
    <li>Permet de rouler les tests automatiquement et d'avoir une rétroaction immédiate;</li>
    <li>Affiche le progrès des tests visuellement.</li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    Pour rédiger une classe de tests, il suffit de créer, tout d'abord, une classe standard en
    respectant la même hiérarchie que la classe à tester (ceci permet de respecter les visibilités
    en place et l'organisation du code). Le nom se termine par « Test ».
  </p>
  <p>
    Ensuite, on importe, de façon statique, toutes les assertions disponibles du framework JUnit qui
    vont simplifier l'évaluation des tests et l'écriture de ceux-ci.
  </p>
  <CodeBlock
    language="Java"
    lines="1|3-5"
    code={`import static org.junit.jupiter.api.Assertions.*;

public class EquationTest {

}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Par la suite, on définit normalement la classe en prenant soin d'avoir une propriété qui
    contiendra une instance de la classe à tester. On instancie cet objet dans un constructeur
    standard (ou sinon on l'instancie dans chaque méthode selon la classe à tester).
  </p>
  <CodeBlock
    language="Java"
    lines="2-6"
    code={`public class EquationTest {
    private Equation equation;

    public EquationTest() {
        equation = new Equation();
    }
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Maintenant, pour créer un test, il suffit de créer une méthode qui retourne void avec une
    annotation <InlineCodeBlock>@Test</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="Java"
    code={`@Test
public void testAdd() {
    equation.setOperator('+');
    equation.setFirstOperand(10);
    equation.setSecondOperand(35);
    assertEquals(45, equation.getAnswer());
}`}
  />
  <p class="fragment">
    On nomme la méthode pour qu'elle soit le plus sémantique possible en débutant avec le mot
    <InlineCodeBlock>Test</InlineCodeBlock>.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Il est possible qu'un test doive retourner une exception (souvenez-vous que les tests doivent
    aussi couvrir les cas d'erreurs). On utilise alors
    <InlineCodeBlock>assertThrows</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="Java"
    code={`@Test
public void testDivideByZero() {
    equation.setOperator('/');
    equation.setFirstOperand(3);
    equation.setSecondOperand(0);

    assertThrows(ArithmeticException.class, () -> {
        equation.getAnswer();
    });
}`}
  />
</BasicSlide>
