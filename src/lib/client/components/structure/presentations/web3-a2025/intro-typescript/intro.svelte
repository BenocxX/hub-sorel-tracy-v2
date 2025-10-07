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
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    <Bold>TypeScript</Bold> est un langage de programmation <Italic>open-source</Italic> développé par
    Microsoft. TypeScript est une sorte de couche par dessus le JavaScript. Il ajoute des fonctionnalités
    au JavaScript, notamment le typage statique et la vérification de type au moment de la compilation.
  </p>
  <p class="fragment">
    L'utilisation de TypeScript est 100% optionnelle. Vous pouvez écrire du code JavaScript standard
    dans un fichier TypeScript, et il sera toujours valide. Cependant, pour tirer parti des
    fonctionnalités de TypeScript, vous devez utiliser la syntaxe et les fonctionnalités spécifiques
    à ce langage.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Le plus gros avantage de TypeScript est qu'il permet de détecter les erreurs de type au moment
    de la compilation, plutôt qu'au moment de l'exécution. Cela peut aider à prévenir les erreurs
    courantes et à améliorer la qualité du code.
  </p>
  <p class="fragment">
    Personnellement, je ne me vois pas programmer un gros projet sans TypeScript. Il est pour moi
    essentiel d'avoir un typage statique ainsi que la détection d'erreurs. De plus, grâce au typage
    statique, les IDE peuvent offrir une meilleure autocomplétion et une navigation plus facile dans
    le code.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    TypeScript est un langage compilé, les navigateurs ne peuvent pas exécuter directement du code
    TypeScript. Au lieu de cela, le code TypeScript doit être compilé en JavaScript avant d'être
    exécuté. On appelle ce processus la <Bold>transpilation</Bold>.
  </p>
  <p class="fragment">
    Il existe plusieurs façons de compiler du TypeScript en JavaScript. La méthode la plus courante
    est d'utiliser le compilateur TypeScript (<InlineCodeBlock>tsc</InlineCodeBlock>), qui est un
    outil en ligne de commande qui peut être installé via <InlineCodeBlock>NPM</InlineCodeBlock>.
    Vous allez en apprendre plus sur
    <InlineCodeBlock>NPM</InlineCodeBlock>/<InlineCodeBlock>Node</InlineCodeBlock> en Web V.
  </p>
  <p class="fragment">
    Dans le cadre du cours, nous allons utiliser une extension de Visual Studio Code qui compile
    automatiquement le code TypeScript en JavaScript à chaque sauvegarde de fichier.
  </p>
</BasicSlide>
