<script lang="ts">
  import {
    BasicSlide,
    Italic,
    Image,
    CodeBlock,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import TypeScriptCompilerImg from './typescript-compiler.png';
  import BoutonExtensionImg from './bouton-extension.png';
  import BoutonCompileImg from './bouton-compile.png';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 5 });
</script>

<BasicSlide>
  <p>
    Afin de compiler TypeScript dans Visual Studio Code, nous allons avoir besoin de l'extension
    suivante:
  </p>
  <Image src={TypeScriptCompilerImg} alt="Extension VSCode TypeScript Compiler" />
</BasicSlide>
<BasicSlide>
  <p>
    Une fois l'extension installée, vous pouvez créer un fichier
    <InlineCodeBlock>index.ts</InlineCodeBlock> et/ou renommer vos fichiers actuels en
    <InlineCodeBlock>.ts</InlineCodeBlock>.
  </p>
  <p>
    Lorsque vous ouvrez un fichier <InlineCodeBlock>.ts</InlineCodeBlock>, vous devriez avoir accès
    à un petit bouton en haut à droite de l'éditeur vous permettant de compiler le fichier en
    JavaScript.
  </p>
  <Image src={BoutonExtensionImg} alt="Bouton pour compiler le fichier" />
</BasicSlide>
<BasicSlide>
  <p>
    Toutefois, nous allons metter en place un système de compilation automatique afin de pouvoir
    compiler tout nos fichiers TypeScript lorsqu'on les modifies.
  </p>
  <p class="fragment">
    Premièrement, nous allons devoir créer une fichier de configuration TypeScript à la racine de
    notre projet. Ce fichier s'appelle <InlineCodeBlock>tsconfig.json</InlineCodeBlock>.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Dans ce fichier, nous allons ajouter les options de compilation que nous souhaitons utiliser.
    Voici un exemple de configuration minimale pour compiler du TypeScript en JavaScript:
  </p>
  <CodeBlock
    fragment
    label="tsconfig.json"
    language="JSON"
    code={`{
  "compilerOptions": {
    "strict": true,
    "target": "ES6",
    "module": "ES6",
    "moduleResolution": "bundler",
    "forceConsistentCasingInFileNames": true,
    "rootDir": "./public/scripts",
    "outDir": "./dist",
  },
}`}
  />
</BasicSlide>
<BasicSlide>
  <p>
    Une fois le fichier <InlineCodeBlock>tsconfig.json</InlineCodeBlock> créé, vous devriez voir un bouton
    se nommant <Italic>Compile Project</Italic> apparaître en bas à gauche de Visual Studio Code vous
    permettant de compiler le projet dans son ensemble.
  </p>
  <Image src={BoutonCompileImg} alt="Bouton pour compiler le projet" />
</BasicSlide>
<BasicSlide>
  <p>
    Il serait bien de pouvoir compiler automatiquement notre projet à chaque fois qu'on sauvegarde
    un fichier au lieu de toujours manuellement cliquer sur le bouton. Pour cela, il suffit de de
    faire un <Italic>clic droit</Italic> sur le fichier
    <InlineCodeBlock>tsconfig.json</InlineCodeBlock> et de sélectionner
    <Italic>Watch Project</Italic>.
  </p>
  <p>
    Une fois cette option activée, le compilateur TypeScript surveillera tous les fichiers
    <InlineCodeBlock>.ts</InlineCodeBlock> du projet et les recompileras automatiquement à chaque fois
    qu'un fichier est modifié et sauvegardé.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    TypeScript est désormais configuré dans votre projet! Vous pouvez maintenant commencer à écrire
    du TypeScript et le compilateur s'occupera de le transformer en JavaScript.
  </p>
  <p>
    Assurez-vous de lier les fichiers JavaScript compilés dans vos pages HTML pour que le code
    puisse être exécuté dans le navigateur.
  </p>
  <p>
    De plus, lorsque vous importez des modules dans vos fichiers TypeScript, assurez-vous de
    toujours inclure l'extension <InlineCodeBlock>.js</InlineCodeBlock> dans les chemins d'importation,
    même si vous écrivez du TypeScript. Le navigateur a besoin de cette extension pour localiser et charger
    les modules correctement.
  </p>
</BasicSlide>
