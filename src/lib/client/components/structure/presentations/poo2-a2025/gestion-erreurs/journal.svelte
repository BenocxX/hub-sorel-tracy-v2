<script lang="ts">
  import {
    BasicSlide,
    Bold,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 14 });
</script>

<BasicSlide>
  <p>
    L'idée d'un journal est de consolider toutes les erreurs qui sont survenues. Au lieu de faire
    arrêter le programme lorsqu'il y a une erreur, nous allons lui permettre de continuer à
    s'exécuter normalement, mais nous allons garder note de l'erreur dans un fichier qui pourra être
    consulté ultérieurement.
  </p>
  <p>
    Les serveurs Web fonctionnent sous ce principe. Il ne faut pas arrêter tout le serveur Web
    lorsqu'une page cause une erreur !
  </p>
  <p>
    On utilise cette technique
    <Bold>lorsqu'il est nécessaire que l'application roule sans arrêt</Bold> et que les erreurs en question
    n'impactent pas réellement le déroulement normal.
  </p>
</BasicSlide>
