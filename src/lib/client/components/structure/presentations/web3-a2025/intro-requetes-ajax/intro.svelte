<script lang="ts">
  import {
    BasicSlide,
    List,
    Bold,
    Italic,
    Image,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import IcingGif from './icing.gif';
  import RefreshGif from './refresh.gif';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 2 });
</script>

<BasicSlide>
  <p>
    Durant le début des années 2000, <Bold>AJAX</Bold>
    (<Italic>Asynchronous JavaScript and XML</Italic>) a changé la manière dont les sites web
    interagissent avec les serveurs. Grâce à AJAX, <Bold>
      il est devenu possible d'envoyer et de recevoir des données de manière asynchrone
    </Bold>, sans avoir à recharger la page entière.
  </p>
  <div class="flex gap-16 *:flex-1">
    <div class="fragment space-y-4">
      <span>Avant AJAX:</span>
      <Image
        class="h-[300px] w-full object-cover"
        figureClass="w-full overflow-hidden h-[300px]"
        src={RefreshGif}
        alt="Un chat qui rafraîchit un ordinateur en boucle"
      />
    </div>
    <div class="fragment space-y-4">
      <span>Après AJAX:</span>
      <Image
        class="h-[300px] w-full object-cover"
        figureClass="w-full overflow-hidden h-[300px]"
        src={IcingGif}
        alt="Un cupcake qui se fait glacer"
      />
    </div>
  </div>
</BasicSlide>
<BasicSlide>
  <p>
    Un exemple concret d'utilisation d'AJAX est
    <Bold>la recherche en temps réel sur les sites web</Bold>. Lorsqu'un utilisateur tape une
    requête dans la barre de recherche, des requêtes AJAX sont envoyées au serveur pour récupérer
    les résultats correspondants sans recharger la page. <Bold>
      Cela permet une expérience utilisateur fluide et rapide
    </Bold>.
  </p>
  <List
    paragraph="Toutefois, des tonnes d'autres cas d'utilisation existent pour AJAX, notamment :"
  >
    <li>Le chargement de contenu dynamique.</li>
    <li>La soumission de formulaires sans rechargement de page.</li>
    <li>La récupération de données en arrière-plan pour des mises à jour en temps réel.</li>
    <li><Bold>etc...</Bold></li>
  </List>
</BasicSlide>
<BasicSlide>
  <List>
    {#snippet paragraph()}
      Comme mentionné précédemment, <Bold>AJAX</Bold> signifie
      <Bold>"Asynchronous JavaScript and XML"</Bold>. Décortiquons cette définition ensemble.
    {/snippet}
    <li>
      <Bold>Asynchronous</Bold> : Les requêtes sont envoyées de manière asynchrone, permettant à l'utilisateur
      de continuer à interagir avec la page pendant le chargement des données.
    </li>
    <li>
      <Bold>JavaScript</Bold> : AJAX utilise JavaScript pour créer/envoyer des requêtes et traiter les
      réponses du serveur.
    </li>
    <li>
      <Bold>XML</Bold> : Bien que le AJAX ait été principalement utilisé par le langage
      <Bold>XML</Bold>, il est maintenant plus courant d'utiliser d'autres formats tels que le
      <Bold>JSON</Bold> (<Italic>JavaScript Object Notation</Italic>).
    </li>
  </List>
</BasicSlide>
