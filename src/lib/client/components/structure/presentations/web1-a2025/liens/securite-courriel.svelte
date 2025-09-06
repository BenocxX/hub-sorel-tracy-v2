<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import AttentionSubTitle from '$lib/client/components/revealjs/custom/subtitles/attention-sub-title.svelte';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 14 });
</script>

<BasicSlide>
  {#snippet subTitleComponent()}
    <AttentionSubTitle />
  {/snippet}
  <p>
    L'utilisation de <Bold>mailto:</Bold> est très dangereuse pour un site qui est accessible par tous!
  </p>
  <p>
    Il existe des <Bold>robots malicieux</Bold> qui se promènent sur Internet dans le but de voler des
    adresses courriel inscrites à l'intérieur des propriétés <Bold>mailto:</Bold>. Ces robots vont
    essentiellement rechercher cette propriété et voler le courriel pour ultimement servir à envoyer
    du SPAM.
  </p>
</BasicSlide>
<BasicSlide>
  <List paragraph="Plusieurs techniques plus ou moins efficaces existent pour contrer le problème:">
    <li>Remplacer le symbole "@" par une autre représentation;</li>
    <li>Utiliser du code JavaScript pour modifier la balise lors de la création de la page;</li>
    <li>Etc.</li>
  </List>
  <p>
    Ces techniques sont toutes défaillantes. Elles peuvent possiblement dérouter des petits robots
    simples, mais pas les robots matures.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    Une solution viable pour afficher des courriels de façon <Bold>sécuritaire</Bold> sur un site Web
    sera de les afficher à l'intérieur d'une image. De cette façon, un robot ne pourra pas "lire" le
    courriel qui se trouve à l'intérieur de l'image. Cette technique demande un traitement plus long
    et complexe à réaliser et doit être fait du côté serveur.
  </p>
  <p class="fragment">
    Une deuxième solution serait de créer un formulaire de contact qui enverra un courriel
    directement à l'adresse courriel désirée. Cette technique est plus sécuritaire et fonctionne
    très bien. Cependant, elle demande un peu plus de travail à réaliser. Vous serez en mesure de
    l'utiliser plus tard dans la technique (session 4-5).
  </p>
</BasicSlide>
