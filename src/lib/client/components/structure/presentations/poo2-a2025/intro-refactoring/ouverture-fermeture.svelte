<script lang="ts">
  import {
    BasicSlide,
    setSlideSection,
    registerInTOC,
    Image,
    Bold,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';
  import OpenClosed from './open-closed.gif';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 16 });
</script>

<BasicSlide>
  <p>
    Ce principe indique qu'une classe doit être <Bold>FERMER</Bold> à la modification, mais
    <Bold>OUVERT</Bold> à l'extension. Le concept s'applique plus lorsqu'un projet atteint une forme
    de maturité.
  </p>
  <p class="fragment">
    Essentiellement, c'est l'idée qu'une classe fonctionnelle qui nécessite une évolution (ajout
    d'une fonctionnalité par exemple) ne devrait pas modifier la classe existante, mais plutôt faire
    une sous-classe, utiliser la surcharge ou d'autres stratégies.
  </p>
  <div class="fragment flex gap-4">
    <p class="flex-1">
      De cette façon, le code "fonctionnelle" n'est pas toucher et par conséquent, le développeur
      n'injecte pas de nouveaux bogues.
    </p>
    <Image
      src={OpenClosed}
      alt="Spongebob qui ferme un magasin via une affiche open/closed"
      class="h-[300px]"
      figureClass="flex justify-center ml-auto"
    />
  </div>
</BasicSlide>
