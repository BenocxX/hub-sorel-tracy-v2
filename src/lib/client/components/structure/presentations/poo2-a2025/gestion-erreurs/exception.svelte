<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    InlineCodeBlock,
    CodeBlock,
    MultiCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 5 });
</script>

<BasicSlide>
  <p>
    L'exception est un mécanisme très intéressant et riche en possibilités. Grossièrement, le
    concept est de donner une <Bold>seconde chance au programme</Bold> lorsqu'une erreur est détectée.
  </p>
  <List
    paragraph="Lorsqu'une erreur contrôlée par exception est détectée dans une méthode, il y a un choix à faire entre :"
  >
    <li>Gérer l'erreur à l'intérieur de la méthode elle-même;</li>
    <li>Donner la responsabilité de la gestion d'erreur à la méthode appelante.</li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>
    Si le programme décide de "lancer" l'exception à l'appelant, ce dernier doit donc inclure un
    mécanisme, à son tour, de contrôle d'exception. Il pourra lui aussi soit contrôler l'erreur à
    l'interne ou encore envoyer l'exception plus haut à son appelant.
  </p>
  <p>
    Si l'exception remonte jusqu'au <InlineCodeBlock>main</InlineCodeBlock> de l'application, une erreur
    fatale est alors lancée avec le code d'exception. L'idée d'une exception est de l'intercepter AVANT
    qu'elle n'atteigne le main ...
  </p>
  <p>
    Une exception permet de rattraper un programme en situation d'erreur. Il permet de continuer à
    exécuter le code et donne la chance à une instruction <InlineCodeBlock>catch</InlineCodeBlock> de
    corriger le tir avant de poursuivre l'exécution normale.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Pour créer une zone d'exception (une séquence de ligne de code à l'abri d'une erreur peut
    importe ce qui se passe), il suffit d'utiliser l'instruction
    <InlineCodeBlock>try</InlineCodeBlock> – <InlineCodeBlock>catch</InlineCodeBlock>.
  </p>
  <CodeBlock
    language="Java"
    lines="3,6,8|4,5|7"
    code={`int[] a = {1, 2, 3};

try {
    int b = 10 / 0;
    int c = a[10];
} catch (Exception e) {
    System.out.println("Erreur : " + e.getMessage());
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    La partie catch de l'instruction permet d'indiquer QUOI faire lorsqu'une erreur survient. C'est
    ici que le programmeur doit décider s'il rectifie le tir immédiatement ou s'il envoie la
    responsabilité à son appelant.
  </p>
  <p>
    L'exemple ci-dessous attrape l'erreur et affiche un message générique puis poursuit le programme
    normalement.
  </p>
  <CodeBlock
    language="Java"
    lines="|4"
    code={`try {
    // ...
} catch (Exception e) {
    System.out.println("Une erreur est survenue");
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>Pour envoyer l'exception à l'appelant, on utilise l'instruction throw.</p>
  <CodeBlock
    language="Java"
    lines="|4"
    code={`try {
    // ...
} catch (Exception e) {
    throw e;
}`}
  />
  <p>
    Automatiquement, la signature de la méthode va changer et indiquer qu'elle lance une exception.
    L'appelant devra à son tour changer et implémenter un <InlineCodeBlock>try</InlineCodeBlock>
    – <InlineCodeBlock>catch</InlineCodeBlock> ou lancer l'exception plus haut.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    L'exemple précédent utilise le type <InlineCodeBlock>Exception</InlineCodeBlock> ce qui constitue
    en réalité n'importe quelle forme d'exception (c'est la super-classe de toutes les exceptions). Il
    est possible de préciser les exceptions pour les gérer différemment.
  </p>
  <CodeBlock
    language="Java"
    lines="|3,5|"
    code={`try {
    // ...
} catch (ArithmeticException e) {
    throw e;
} catch (IndexOutOfBoundException e) {
    System.out.println("Le tableau est défoncé !");
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    N'ayez pas peur de concevoir des exceptions pour votre programme ! Vous pouvez créer une classe
    maison qui hérite de <InlineCodeBlock>Exception</InlineCodeBlock> pour gérer des erreurs propres
    à votre logique. Par exemple, dans le cas d'une recherche dans une banque d'employés qui ne trouvent
    rien.
  </p>
  <MultiCodeBlock
    codes={[
      {
        language: 'Java',
        label: 'Main.java',
        code: `public static void main(String[] args) {
    EmployeBroker broker = new EmployeBroker();
    try {
        Employe employe = broker.findById(10);
        System.out.println(employe);
    } catch (EmployeNotFoundException e) {
        System.out.println("Aucun employé trouvé avec l'ID: " + e.getId());
    }
}`,
      },
      {
        language: 'Java',
        label: 'EmployeBroker.java',
        code: `public Employe findById(int id) throws EmployeNotFoundException {
    for (Employe employe : employes) {
        if (employe.getId() == id) {
            return employe;
        }
    }

    throw new EmployeNotFoundException(id);
}`,
      },
      {
        language: 'Java',
        label: 'EmployeNotFoundException.java',
        code: `public class EmployeNotFoundException extends Exception {
    private int id;

    public EmployeNotFoundException(int id) {
        super("Employe not found with ID: " + id);
        this.id = id;
    }

    public int getId() {
        return id;
    }
}`,
      },
    ]}
  />
</BasicSlide>
