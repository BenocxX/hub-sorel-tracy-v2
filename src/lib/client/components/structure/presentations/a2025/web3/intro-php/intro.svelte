<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Image,
    InlineCodeBlock,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import IcingGif from './icing.gif';
  import CupcakeFactoryGif from './cupcake-factory.gif';
  import AjaxPhpMeme from './ajax-php.png';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Le langage PHP permet de créer des applications web dynamiques en interagissant avec des bases
    de données et en générant du contenu HTML de manière flexible.
  </p>
  <p>
    Il est largement utilisé pour le développement côté serveur, offrant des fonctionnalités
    robustes pour gérer les requêtes HTTP, les sessions utilisateur, et bien plus encore.
  </p>
  <p class="fragment">
    Notez que le code PHP s'exécute <Bold>SEULEMENT</Bold> sur le serveur, et non dans le navigateur
    du client.
  </p>
</BasicSlide>
<BasicSlide>
  <p>Un fichier PHP, c'est un simple fichier HTML avec des morceaux de code PHP à l'intérieur.</p>
  <p class="fragment">
    Vous pourriez changer les extensions de vos fichiers
    <InlineCodeBlock>.html</InlineCodeBlock> en <InlineCodeBlock>.php</InlineCodeBlock> et tout fonctionnerait
    pareil.
  </p>
  <p class="fragment">
    Il est aussi possible d'avoir des fichiers PHP qui ne contiennent que du code PHP, sans HTML!
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Si le <Bold>AJAX</Bold> a révolutionné l'interactivité des sites web côté client, le PHP a lui aussi
    apporté son lot d'améliorations côté serveur. Grâce au PHP, il est possible de
    <Bold>générer dynamiquement du contenu HTML</Bold> en fonction des requêtes des utilisateurs, des
    données de la base de données, ou d'autres facteurs.
  </p>
  <div class="flex gap-16 *:flex-1">
    <div class="fragment space-y-4">
      <span>Le pouvoir de AJAX:</span>
      <Image
        class="h-[300px] w-full object-cover"
        figureClass="w-full overflow-hidden h-[300px]"
        src={IcingGif}
        alt="Un cupcake qui se fait glacer en boucle"
      />
    </div>
    <div class="fragment space-y-4">
      <span>Le pouvoir de PHP:</span>
      <Image
        class="h-[300px] w-full object-cover"
        figureClass="w-full overflow-hidden h-[300px]"
        src={CupcakeFactoryGif}
        alt="Une usine de cupcakes qui fabrique des cupcakes en boucle"
      />
    </div>
  </div>
</BasicSlide>
<BasicSlide>
  <Image src={AjaxPhpMeme} alt="Handshake entre AJAX et PHP" class="mx-auto" />
</BasicSlide>
<BasicSlide>
  <p>
    Pour utiliser le langage PHP, il faut un serveur web capable d'interpréter le code PHP, comme
    <Bold>Apache</Bold> ou <Bold>Nginx</Bold> ainsi qu'un interpréteur PHP installé sur le serveur.
  </p>
  <p class="fragment">
    Heureusement, vous n'avez pas besoin de configurer tout ça vous-même! Des solutions comme
    <InlineCodeBlock>Docker</InlineCodeBlock> permettent de simplifier la mise en place d'un environnement
    de développement PHP.
  </p>
</BasicSlide>
<BasicSlide>
  <p>Que veut dire l'abbréviation PHP?</p>
  <p class="fragment">
    PHP est un accronyme récursif qui signifie "PHP: Hypertext Preprocessor" (PHP: Préprocesseur
    Hypertexte). À la base, PHP signifiait "Personal Home Page" (Page Personnelle), mais le nom a
    été changé pour refléter son évolution en un langage de programmation plus puissant et
    polyvalent.
  </p>
</BasicSlide>
