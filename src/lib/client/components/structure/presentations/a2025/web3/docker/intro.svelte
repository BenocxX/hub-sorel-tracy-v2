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
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Docker est un logiciel permettant de rapidement et simplement créer et gérer des
    <Italic>conteneurs</Italic>. Un conteneur est une machine virtuelle légère, isolée du système
    hôte, qui inclut tout le nécessaire pour exécuter une application.
  </p>
  <p>
    Pour utiliser Docker, il faut d'abord installer le logiciel Docker Desktop, disponible sur
    <a href="https://www.docker.com/products/docker-desktop/" target="_blank">
      https://www.docker.com/products/docker-desktop/
    </a>. Une fois installé, Docker peut être utilisé via une interface en ligne de commande (CLI)
    ou une interface graphique (GUI), notamment via les logiciels <Bold>JetBrains</Bold>.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Dans chaque projet où l'on veut utiliser Docker, on doit créer ce qu'on appelle un
    <InlineCodeBlock>Dockerfile</InlineCodeBlock>. Ce fichier texte contient une série
    d'instructions qui définissent l'environnement du conteneur, les dépendances nécessaires, et les
    commandes à exécuter pour lancer l'application.
  </p>
  <p>
    Il est aussi possible d'avoir un fichier <InlineCodeBlock>docker-compose.yml</InlineCodeBlock>
    qui permet de définir et gérer plusieurs conteneurs Docker en même temps, facilitant ainsi l'orchestration
    des services.
  </p>
</BasicSlide>
<BasicSlide>
  <p>Voici la structure d'un projet typique utilisant Docker :</p>
  <CodeBlock
    language="Bash"
    lines="|1|2-9|3-7|4-5|6-7|8-9|10-11|12|"
    code={`my-project/
├── docker/
│   ├── services/
│   │   ├── php81/
│   │   │   └── Dockerfile
│   │   └── postgres/
│   │       └── Dockerfile
│   └── vhosts/
│       └── default.conf
├── src/
│   └── index.php
└── docker-compose.yml`}
  />
</BasicSlide>
