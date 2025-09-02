<script lang="ts">
  import BitshiftAnimation from '$lib/client/components/animator/animations/bitshift-animation.svelte';
  import {
    BasicSlide,
    Bold,
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
    Il existe parfois une solution "mathématique" pour résoudre un problème mettant en place une
    séquence de <InlineCodeBlock>if</InlineCodeBlock> complexes. Par exemple, les rôles et permissions
    d’une application, un gestionnaire de tâches automatiques, ensemble de configurations, l’activation
    d’un facteur 2FA, etc.
  </p>
  <p>
    Sommes toute, le cas s’applique lorsque vous avez un <Bold>ensemble de caractéristiques</Bold> dans
    l’application et que vous devez
    <Bold>vérifier si une entité détient l’une ou plusieurs de ces caractéristiques</Bold>.
  </p>
  <p>Souvent, ces problèmes peuvent être résolus par des techniques de calcul binaire.</p>
</BasicSlide>
<BasicSlide>
  <p>
    Prenons l’exemple des permissions. Imaginons une application avec les permissions
    <Bold>READ, WRITE, DELETE</Bold>. L’idée est donc de savoir si l’utilisateur peut, par exemple,
    exécuter la commande de suppression.
  </p>
  <div class="fragment flex w-full items-center justify-center py-16">
    <p><Bold class="!text-5xl">Comment faire traditionnellement 🧐 ?</Bold></p>
  </div>
</BasicSlide>
<BasicSlide>
  <p>Test Animator</p>
  <!-- <BitshiftAnimation /> -->
</BasicSlide>
