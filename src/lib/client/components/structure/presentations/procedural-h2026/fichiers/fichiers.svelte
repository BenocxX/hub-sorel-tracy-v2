<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    List,
    CodeBlock,
    MultiCodeBlock,
    InlineCodeBlock,
    Italic,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Lorsqu'on travaille dans un projet grandissant, il est important d'isoler des parties du code
    dans des fichiers séparés. Cela permet de mieux organiser le code et de faciliter la
    maintenance.
  </p>
  <List
    listType="ol"
    paragraph="Pour séparer notre code dans un nouveau fichier, il faut suivre ces étapes :"
  >
    <li class="fragment">
      Créer un fichier d'en-tête avec l'extension <InlineCodeBlock>.h</InlineCodeBlock>.
    </li>
    <li class="fragment">
      Créer un fichier C avec l'extension <InlineCodeBlock>.c</InlineCodeBlock> pour y écrire le code.
    </li>
    <li class="fragment">
      Inclure le fichier d'en-tête (<InlineCodeBlock>.h</InlineCodeBlock>) dans les fichiers qui ont
      besoin d'utiliser le contenu déclaré dans le fichier <InlineCodeBlock>.c</InlineCodeBlock>.
    </li>
  </List>
</BasicSlide>
<BasicSlide>
  <p>Qu'est-ce qu'un fichier "d'en-tête" ?</p>
  <p class="fragment">
    Un fichier d'en-tête est un fichier qui contient des déclarations de fonctions, de variables, de
    structures, etc. Il est utilisé pour partager des informations entre différents fichiers
    <InlineCodeBlock>.c</InlineCodeBlock>.
  </p>
  <p class="fragment">
    En incluant un fichier d'en-tête dans un fichier <InlineCodeBlock>.c</InlineCodeBlock>, on peut
    utiliser les fonctions et les variables déclarées dans le fichier d'en-tête (celles-ci sont
    définies dans le fichier <InlineCodeBlock>.c</InlineCodeBlock> correspondant).
  </p>
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="Bash"
    autoAnimateId="folder-structure"
    code={`projet/
  | main.c`}
  />
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="Bash"
    autoAnimateId="folder-structure"
    code={`projet/
  | main.c
  | monFichier.h`}
  />
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="Bash"
    autoAnimateId="folder-structure"
    code={`projet/
  | main.c
  | monFichier.h
  | monFichier.c`}
  />
</BasicSlide>
<BasicSlide>
  <CodeBlock
    language="Bash"
    autoAnimateId="folder-structure"
    code={`projet/
  | main.c <-- inclut monFichier.h
  | monFichier.h
  | monFichier.c`}
  />
</BasicSlide>
<BasicSlide>
  <MultiCodeBlock
    codes={[
      {
        label: 'main.c',
        language: 'C',
        code: `#include "monFichier.h"

int main() {
  maFonction();
  return 0;
}`,
      },
      {
        label: 'monFichier.h',
        language: 'C',
        code: `void maFonction();`,
      },
      {
        label: 'monFichier.c',
        language: 'C',
        code: `#include "monFichier.h"

void maFonction() {
  // code de la fonction
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Les librairies importées dans un fichier <InlineCodeBlock>.h</InlineCodeBlock> sont aussi accessibles
    dans les fichiers <InlineCodeBlock>.c</InlineCodeBlock> qui incluent ce fichier d'en-tête.
  </p>
  <MultiCodeBlock
    codes={[
      {
        label: 'main.c',
        language: 'C',
        code: `#include "monFichier.h"

int main() {
  printf("Hello, World!\\n");
  maFonction();
  return 0;
}`,
      },
      {
        label: 'monFichier.h',
        language: 'C',
        code: `#include <stdio.h>

void maFonction();`,
      },
      {
        label: 'monFichier.c',
        language: 'C',
        code: `#include "monFichier.h"

void maFonction() {
  printf("Hello, World!\\n");
}`,
      },
    ]}
  />
</BasicSlide>
<BasicSlide>
  <p>
    De plus, il est important d'ajouter les directives de préprocesseur pour éviter les inclusions
    multiples d'un même fichier d'en-tête. Cela se fait généralement en utilisant des gardes
    d'inclusion :
  </p>
  <CodeBlock
    fragment
    language="C"
    label="monFichier.h"
    code={`#ifndef MONFICHIER_H
#define MONFICHIER_H

void maFonction();

#endif`}
  />
  <p class="fragment">
    Ces directives garantissent que le contenu du fichier d'en-tête n'est inclus qu'une seule fois,
    même si plusieurs fichiers <InlineCodeBlock>.c</InlineCodeBlock> incluent le même fichier d'en-tête.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Faites attention! Si vous avez plusieurs fichiers <InlineCodeBlock>.h</InlineCodeBlock> qui définissent
    des fonctions ou des variables avec les mêmes noms, cela peut entraîner des conflits de noms lors
    de la compilation. Assurez-vous de bien organiser votre code et d'utiliser des noms uniques pour
    éviter ces problèmes.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Pour compiler un projet avec plusieurs fichiers <InlineCodeBlock>.c</InlineCodeBlock>, il va
    falloir spécifier tous les fichiers à compiler.
  </p>
  <p class="fragment">
    Par exemple, si vous avez un projet avec les fichiers <InlineCodeBlock>main.c</InlineCodeBlock>,
    <InlineCodeBlock>monFichier.c</InlineCodeBlock>, et
    <InlineCodeBlock>monFichier.h</InlineCodeBlock>, vous pouvez compiler le projet avec la commande
    suivante :
  </p>
  <CodeBlock fragment language="Bash" code="gcc main.c monFichier.c" />
  <p class="fragment">
    Cette commande compile les fichiers <InlineCodeBlock>main.c</InlineCodeBlock> et
    <InlineCodeBlock>monFichier.c</InlineCodeBlock>, en utilisant les déclarations du fichier
    <InlineCodeBlock>monFichier.h</InlineCodeBlock>.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Toutefois, que se passe-t-il si vous avez beaucoup de fichiers
    <InlineCodeBlock>.c</InlineCodeBlock> à compiler ? Il peut être fastidieux de les spécifier tous
    dans la ligne de commande. Dans ce cas, je vous recommande d'utiliser un fichier
    <InlineCodeBlock>Makefile</InlineCodeBlock> pour automatiser le processus de compilation.
  </p>
  <p class="fragment">
    Un <InlineCodeBlock>Makefile</InlineCodeBlock> est un fichier qui contient des règles pour compiler
    votre projet. Il permet de spécifier les dépendances entre les fichiers et de définir des commandes
    pour compiler le projet. Cela facilite grandement la gestion de projets avec de nombreux fichiers.
  </p>
</BasicSlide>
