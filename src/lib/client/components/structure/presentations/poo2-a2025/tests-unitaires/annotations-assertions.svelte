<script lang="ts">
  import {
    BasicSlide,
    Italic,
    Bold,
    InlineCodeBlock,
    CodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import * as Table from '$lib/client/components/ui/table';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 19 });
</script>

<BasicSlide>
  <p>
    Une annotation est une forme d'information <Italic>meta</Italic> qui est utilisée au niveau de la
    compilation ou de l'exécution. Une annotation est précédée d'un "@" (comme
    <InlineCodeBlock>@Override</InlineCodeBlock> pour spécifier une redéfinition de méthode).
  </p>
  <p>
    La version 5 de JUnit utilise uniquement les annotations pour construire une classe de tests.
    Voici la liste des annotations disponibles :
  </p>
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Head>Annotations</Table.Head>
        <Table.Head>Explications</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>@Test</InlineCodeBlock></Table.Cell>
        <Table.Cell>
          Méthode de test standard. Indique à JUnit qu'il peut exécuter le test.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>@BeforeEach</InlineCodeBlock></Table.Cell>
        <Table.Cell>
          Méthode exécutée avant chaque test. Utilise pour redémarrer l'état d'un objet.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>@AfterEach</InlineCodeBlock></Table.Cell>
        <Table.Cell>Méthode exécutée après chaque test.</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>@BeforeAll</InlineCodeBlock></Table.Cell>
        <Table.Cell>
          Méthode exécutée une seule fois avant que les tests ne démarrent. Dois être
          <InlineCodeBlock>static</InlineCodeBlock>.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>@AfterAll</InlineCodeBlock></Table.Cell>
        <Table.Cell>
          Méthode exécutée une seule fois lorsque les tests sont terminés. Dois être
          <InlineCodeBlock>static</InlineCodeBlock>.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>@Disabled</InlineCodeBlock></Table.Cell>
        <Table.Cell>
          Ne pas exécuter le test ciblé. Utilise si le test est trop long à exécuter.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>@Timeout(x)</InlineCodeBlock></Table.Cell>
        <Table.Cell>
          S'assurer que le test est exécuté avant d'atteindre le timeout défini.
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
</BasicSlide>
<BasicSlide>
  <p>
    Une assertion est un prédicat qui doit être évalué à vrai lors de l'exécution du programme. Elle
    permet d'indiquer, de façon sémantique, que le programmeur croit qu'
    <Bold>une expression précise devrait toujours être VRAIE</Bold>.
  </p>
  <p>
    Une assertion qui échoue (évaluée à faux) durant l'exécution cause l'arrêt du programme ou
    retourne une exception.
  </p>
  <p>
    Une assertion est donc un jalon insérer dans le code par le programmeur pour indiquer : "ici,
    cette expression doit être vrai sinon il y a un problème majeur !"
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Le concept d'assertion existe dans tous les langages de programmation. C'est un concept de base
    qui aide notamment la validation des pré-conditions. En C, on utilise simplement la fonction
    <InlineCodeBlock>assert</InlineCodeBlock>.
  </p>
  <p>
    Le framework JUnit utilise les assertions pour vérifier si un test échoue ou réussit. Si une
    assertion d'un test est fausse, le test en question échouera. Si toutes les assertions d'un test
    passent, le test réussira.
  </p>
  <p>
    Pour rendre le code encore plus sémantique, il existe plusieurs méthodes d'assertion qui sont
    fournies par JUnit.
  </p>
</BasicSlide>
<BasicSlide>
  <Table.Root>
    <Table.Header>
      <Table.Row>
        <Table.Head>Assertions</Table.Head>
        <Table.Head>Explications</Table.Head>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>assertEquals(a, b)</InlineCodeBlock></Table.Cell>
        <Table.Cell>
          Vérifie que l'élément a est égal l'élément b (appel la méthode
          <InlineCodeBlock>equals</InlineCodeBlock> dans la comparaison d'objets).
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>assertTrue(a &lt; b)</InlineCodeBlock></Table.Cell>
        <Table.Cell>
          Vérifie que la condition est toujours vraie (dans ce cas, que a soit plus petit que b).
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>assertFalse(a &lt; b)</InlineCodeBlock></Table.Cell>
        <Table.Cell>
          Vérifie que la condition est toujours fausse (dans ce cas, que a ne soit jamais plus petit
          que b).
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>assertNull(a)</InlineCodeBlock></Table.Cell>
        <Table.Cell>Vérifie que l'élément a est null.</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>assertNotNull(a)</InlineCodeBlock></Table.Cell>
        <Table.Cell>Vérifie que l'élément a n'est pas null.</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>assertSame(a, b)</InlineCodeBlock></Table.Cell>
        <Table.Cell>Vérifie que les éléments a et b pointent vers le même objet.</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>assertNotSame(a, b)</InlineCodeBlock></Table.Cell>
        <Table.Cell>Vérifie que les éléments a et b ne pointent pas vers le même objet.</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>assertArrayEquals(a, b)</InlineCodeBlock></Table.Cell>
        <Table.Cell>Vérifie que les deux tableaux a et b sont égaux.</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><InlineCodeBlock>assertThrows(class, function)</InlineCodeBlock></Table.Cell>
        <Table.Cell>Vérifie qu'un morceau de code lance une exception.</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table.Root>
</BasicSlide>
<BasicSlide>
  <p>
    Le cas des comparaisons entre des valeurs <InlineCodeBlock>double</InlineCodeBlock> peut poser problème.
    Il existe un troisième paramètre utilisable dans la méthode
    <InlineCodeBlock>assertEquals</InlineCodeBlock> pour les doubles, mais c'est aussi simple d'utiliser
    la technique suivante :
  </p>
  <CodeBlock language="Java" code="assertEquals(0, Double.compareTo(a, b));" />
</BasicSlide>
