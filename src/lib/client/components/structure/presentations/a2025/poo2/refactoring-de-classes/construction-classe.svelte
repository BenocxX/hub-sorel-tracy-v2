<script lang="ts">
  import {
    BasicSlide,
    Bold,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Maintenant que les méthodes peuvent être bien construites, voyons comment concevoir une classe
    qui constitue le conteneur des méthodes et des données.
  </p>
  <p>
    Tout comme les méthodes, <Bold>les classes doivent être courtes</Bold>. Pour évaluer la
    longueur, on calcul le nombre de responsabilités de la classe.
  </p>
  <p>
    Une classe doit avoir une <Bold>responsabilité unique</Bold>. Ce principe est l'un des plus
    importants du paradigme objet. Une classe avec 50 méthodes publiques est très certainement trop
    volumineuse et cache assurément plusieurs responsabilités.
  </p>
  <p class="fragment">
    En réalité, le nom de la classe doit refléter la responsabilité unique de celle-ci. Il devrait
    être possible de décrire la responsabilité d'une classe en moins de 25 mots sans employé de
    "si", "et", "ou" ou "mais".
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Nommer les classes en choisissant un nom ou un groupe nominal</Bold> tel que
    <InlineCodeBlock>User</InlineCodeBlock>, <InlineCodeBlock>Product</InlineCodeBlock>,
    <InlineCodeBlock>Page</InlineCodeBlock>, <InlineCodeBlock>JsonParser</InlineCodeBlock>,
    <InlineCodeBlock>XmlParser</InlineCodeBlock> ou <InlineCodeBlock>Character</InlineCodeBlock>. Ce
    nom doit représenter le groupe de données logiques regroupé et les services fournis.
  </p>
  <p>
    Il faut éviter les termes <InlineCodeBlock>Data</InlineCodeBlock>,
    <InlineCodeBlock>Info</InlineCodeBlock>, <InlineCodeBlock>Manager</InlineCodeBlock>,
    <InlineCodeBlock>Super</InlineCodeBlock> ou <InlineCodeBlock>Processor</InlineCodeBlock> dans le
    nom des classes. Ceux-ci font appel à des responsabilités beaucoup trop vague et ambiguë. Le nom
    d'une classe ne doit jamais être un verbe.
  </p>
  <p>
    <Bold>Adopter le principe d'encapsulation</Bold>. Toutes les propriétés d'une classe devraient
    être privées (<InlineCodeBlock>private</InlineCodeBlock>) sauf certaines exceptions qui peuvent
    être protégées (<InlineCodeBlock>protected</InlineCodeBlock>).
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Limiter la portée</Bold> des méthodes qui ne doivent pas être accessibles de l'extérieur. Il
    est important de rendre publiques uniquement les méthodes qui constituent un service de la classe.
    Les méthodes auxiliaires qui fournissent un « aide » aux méthodes de services devraient toujours
    être privées.
  </p>
  <p>
    Pour respecter le principe d'abstraction par encapsulation, on tente de cacher le fonctionnement
    interne le plus possible autant au niveau des données qu'au niveau des opérations.
  </p>
  <p class="fragment">
    De plus, toutes les classes qui héritent ont la possibilité d'écraser les méthodes publiques
    (par redéfinition). On ne veut pas permettre la redéfinition de méthodes internes.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    <Bold>Rédiger le code pour qu'il se lise comme un livre</Bold> ! Le code devrait se lire de haut
    en bas par niveau d'abstraction. C'est-à-dire, plus que nous sommes haut dans le fichier, plus le
    code devrait être de haut niveau étant formé essentiellement d'autres appels de méthode de plus bas
    niveau.
  </p>
  <p>
    Ceci forme donc une sorte de table des matières implicite des opérations de chaque méthode de
    haut niveau. Normalement, les méthodes publiques devraient se trouver vers le haut puisqu'elles
    auront une apparence de plus haut niveau et les méthodes privées, irrémédiablement de plus bas
    niveau, se trouveront plus bas dans le fichier.
  </p>
  <p>
    Ainsi, un programmeur peut facilement se retrouver dans le code. Il comprend assez vite que le
    haut du fichier comprend la logique générale des services et plus bas, le détail
    d'implémentation des services.
  </p>
</BasicSlide>
