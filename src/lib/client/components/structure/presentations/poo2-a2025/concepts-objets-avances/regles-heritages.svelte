<script lang="ts">
  import {
    BasicSlide,
    Bold,
    List,
    setSlideSection,
    registerInTOC,
    type SlideSectionProps,
  } from '$lib/client/components/revealjs/custom';

  const { section }: SlideSectionProps = $props();

  setSlideSection(section);
  registerInTOC({ page: 15 });
</script>

<BasicSlide>
  <p>
    Le concept d'héritage permet une grande réutilisation du code. Par contre, il faut s'assurer
    d'utiliser l'héritage lorsque nécessaire et opportun. Beaucoup de programmeurs abusent du
    principe d'héritage et conçoivent du code horrifiant plus que bénéfique ce qui dégrade la
    qualité générale.
  </p>
  <p>
    Bien sûr, on s'assure de réutiliser une partie de code, mais il ne faut jamais le faire au
    détriment de la qualité du code.
  </p>
</BasicSlide>
<BasicSlide>
  <List listType="ol">
    {#snippet paragraph()}
      Peter Coad propose des règles simples pour s'assurer de bien concevoir le modèle de
      généralisation - spécification.
    {/snippet}
    <li>
      "<Bold>Is kind of ...</Bold>" : s'assure que l'héritage lorsque "est une sorte de ..." fait du
      sens.
    </li>
    <li>
      <Bold>Pas de sidecasting</Bold> : une classe enfant ne peut pas se caster en une autre classe enfant
      de même niveau.
    </li>
    <li>
      <Bold>On ne renie pas l'héritage</Bold> : ne pas faire de redéfinition vide pour annuler un comportement
      du parent.
    </li>
    <li>
      <Bold>Une classe utilitaire pour une classe utilitaire</Bold> : ne pas hériter d'une classe utilitaire
      comme ArrayList si vous n'avez pas l'intention de réellement faire un sous-type particulier de
      ArrayList.
    </li>
  </List>
</BasicSlide>
