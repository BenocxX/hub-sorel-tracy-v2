<script lang="ts">
  import {
    BasicSlide,
    Bold,
    Italic,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 4 });
</script>

<BasicSlide>
  <p>
    Si on entrepose des données en cache, il faut aussi penser à leur expiration. Sinon, on risque
    d'accumuler des données périmées.
  </p>
  <p class="fragment">
    Imaginons que, aujourd'hui, on mette en cache la météo de Sorel-Tracy. Si on ne fait rien, dans
    une semaine, on aura en cache la météo de Sorel-Tracy... d'il y a une semaine! Pas très utile :/
  </p>
</BasicSlide>
<BasicSlide>
  <p>Voici une autre analogie que j'aime bien :</p>
  <p class="fragment">
    Imaginez qu'à chaque fois que vous voulez manger des bleuets vous allez en chercher à
    l'épicerie. Cela nécessite du temps et de l'énergie.
  </p>
  <p class="fragment">
    Pour optimiser vos efforts, vous décidez d'acheter un casseau de bleuets (<Bold>données</Bold>)
    et vous les mettez dans votre frigo (<Bold>cache</Bold>).
  </p>
  <p class="fragment">
    Après quelques jours, vous réalisez que les bleuets commencent à devenir mous et moins
    appétissants. Vous décidez donc de jeter les bleuets (<Bold>expiry</Bold>) après une semaine et
    vous retournez en acheter des frais pour vous assurer de toujours avoir de bons bleuets lorsque
    vous en avez besoin.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    L'une des tâches les plus difficiles dans la gestion du cache est de déterminer quand les
    données en cache deviennent obsolètes ou expirent. Plusieurs stratégies peuvent être utilisées
    pour gérer l'expiration du cache, comme le <Italic>Time-To-Live</Italic> (TTL), les invalidations
    manuelles, et autres plus complexes.
  </p>
  <p class="fragment">
    La stratégie d'expiration choisie dépendra des besoins spécifiques de l'application, du type de
    données mises en cache, et des exigences de performance.
  </p>
  <p class="fragment">
    En général, la solution <Italic>Time-To-Live</Italic> (TTL) est la plus simple à mettre en place
    et convient à de nombreux cas d'utilisation. Elle consiste à définir une durée de vie pour chaque
    entrée de cache, après laquelle l'entrée est considérée comme expirée et doit être rafraîchie ou
    supprimée.
  </p>
</BasicSlide>
