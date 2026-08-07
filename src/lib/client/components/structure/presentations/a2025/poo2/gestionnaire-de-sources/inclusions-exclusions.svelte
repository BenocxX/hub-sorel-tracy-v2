<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 12 });
</script>

<BasicSlide>
  <p>
    Dans un gestionnaire de source, il devrait n’y avoir que des <Bold>sources</Bold>. C’est-à-dire
    que ce n’est pas nécessairement l’endroit pour la documentation du projet (les différentes
    analyses, les diagrammes de classes, les schémas relationnels, etc.). La seule documentation
    permise est du texte en format <InlineCodeBlock>markdown</InlineCodeBlock>. Il s’agit
    normalement d’une description du projet, de la licence d’utilisation, des instructions pour son
    installation et de l’usage.
  </p>
  <p>
    Les formats tels que Word sont à proscrire. Pour ce qui est des sources, on évite également
    d’intégrer tout fichier compilé ou tout fichier relié à la configuration de l’IDE. D’ailleurs,
    lors de la création d’un répertoire sur GitHub, il est possible de spécifier des fichiers à
    exclure avec un fichier <InlineCodeBlock>.gitignore</InlineCodeBlock>.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    GitHub prévoit un espace par projet pour y insérer de la documentation sous format <InlineCodeBlock
      >Markdown</InlineCodeBlock
    >. Les détails d’implémentation, les diagrammes et autres documentations peuvent donc s’y
    retrouver. Mais jamais dans un format tel que word ou pdf.
  </p>
  <p>
    En réalité, <Bold>toute forme de binaire est à proscrire</Bold>. Le concept est d’être en mesure
    de prendre les sources et de les compiler facilement dans son propre environnement.
  </p>
  <p>
    Les projets GitHub peuvent également facilement être intégré avec des gestionnaires de
    dépendance comme <Italic>Gradle</Italic> (Android) et <Italic>Composer</Italic> (PHP). On ne veut
    donc pas remplir inutilement le répertoire avec des fichiers volumineux ou sans intérêt à l’utilisation.
  </p>
</BasicSlide>
