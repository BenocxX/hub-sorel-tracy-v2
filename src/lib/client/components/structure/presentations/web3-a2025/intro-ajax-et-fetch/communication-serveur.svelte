<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
    InlineCodeBlock,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 5 });
</script>

<BasicSlide>
  <List
    listType="ol"
    paragraph="Il est important de connaître l'ordre dans lequel les requêtes au serveur sont effectuées."
  >
    <li class="fragment">
      <Bold>Requête initiale</Bold> : Le navigateur envoie une requête au serveur pour récupérer le fichier
      HTML principal.
    </li>
    <li class="fragment">
      <Bold>Ressources additionnelles</Bold> : Le navigateur télécharge les fichiers CSS et JavaScript
      nécessaires pour rendre la page interactive.
    </li>
    <li class="fragment">
      <Bold>Exécution du JavaScript</Bold> : Le navigateur exécute le code JavaScript ligne par ligne
      pour initialiser les fonctionnalités de la page.
    </li>
  </List>
  <p class="fragment">
    Advenant le cas où, une fois la page chargée, on souhaite communiquer à nouveau avec le serveur
    afin d'afficher de nouvelles données. Avant AJAX, le navigateur devait recharger la page entière
    pour obtenir ces nouvelles données, donc effectuer à nouveau les étapes ci-dessus.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Grâce à AJAX, il est possible d'envoyer des requêtes au serveur de manière asynchrone, sans
    recharger la page entière.
  </p>
  <List listType="ol">
    <li class="fragment">
      <Bold>Requête initiale</Bold>
    </li>
    <li class="fragment">
      <Bold>Ressources additionnelles</Bold>
    </li>
    <li class="fragment">
      <Bold>Exécution du JavaScript</Bold>
    </li>
    <li class="fragment">
      <Bold>Requêtes AJAX</Bold> : Le navigateur peut envoyer des requêtes AJAX pour récupérer des données
      sans recharger la page.
    </li>
    <li class="fragment">Ainsi de suite jusqu'à ce que l'utilisateur change de page.</li>
  </List>
</BasicSlide>
<BasicSlide>
  <List>
    {#snippet paragraph()}
      Lorsqu'on envoie une requête au serveur via AJAX, on peut spécifier la
      <Bold>méthode HTTP</Bold> à utiliser. Une méthode HTTP est
      <Bold>un protocole de communication</Bold> utilisé pour envoyer des requêtes et recevoir des réponses
      sur le web. Les méthodes HTTP les plus courantes sont <InlineCodeBlock>GET</InlineCodeBlock>,
      <InlineCodeBlock>POST</InlineCodeBlock>, <InlineCodeBlock>PUT</InlineCodeBlock> et
      <InlineCodeBlock>DELETE</InlineCodeBlock>.
    {/snippet}
    <li class="fragment"><InlineCodeBlock>GET</InlineCodeBlock> : Récupérer des données</li>
    <li class="fragment"><InlineCodeBlock>POST</InlineCodeBlock> : Envoyer des données</li>
    <li class="fragment"><InlineCodeBlock>PUT</InlineCodeBlock> : Mettre à jour des données</li>
    <li class="fragment"><InlineCodeBlock>DELETE</InlineCodeBlock> : Supprimer des données</li>
    <li class="fragment">
      <InlineCodeBlock>PATCH</InlineCodeBlock> : Appliquer des modifications partielles
    </li>
    <li class="fragment">
      <InlineCodeBlock>OPTIONS</InlineCodeBlock> : Décrire les options de communication avec le serveur
    </li>
    <li class="fragment">
      <InlineCodeBlock>HEAD</InlineCodeBlock> : Récupérer les en-têtes de réponse sans le corps
    </li>
  </List>
</BasicSlide>
