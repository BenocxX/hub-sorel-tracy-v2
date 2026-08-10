<script lang="ts">
  import {
    BasicSlide,
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
  <p>Premièrement, c'est quoi de la "mise en cache"?</p>
  <p class="fragment">
    La mise en cache est le processus de stockage temporaire de données ou de résultats de calculs
    afin de réduire le temps d'accès aux données et d'améliorer les performances des applications.
  </p>
  <p class="fragment">
    En d'autres mots, une fois qu'on a accès à une donnée pour la première fois, on la met de côté
    dans un endroit où on peut y accéder plus rapidement la prochaine fois qu'on en a besoin.
  </p>
</BasicSlide>
<BasicSlide>
  <p>
    La mise en cache des résultats d'une requête permet de réduire le nombre d'appels réseau et
    d'améliorer les performances de l'application.
  </p>
  <p>
    Souvent, les APIs que vous allez utiliser vont être couteuses en termes de temps de réponse ou
    en termes de coût financier. Mettre en cache les résultats permet de minimiser ces coûts.
  </p>
  <p class="fragment">
    Il existe plusieurs stratégies de mise en cache, comme le cache en mémoire, le cache local (<InlineCodeBlock
      >localStorage</InlineCodeBlock
    >) ou encore les services de cache dédiés (<InlineCodeBlock>Redis</InlineCodeBlock>). Notez que
    la mise en cache est une tâche complexe qui nécessite une bonne compréhension des besoins de
    votre application, de vos besoins et de vos données.
  </p>
  <p class="fragment">
    Dans le cadre du cours, nous allons voir une implémentation extrêmement simple de mise en cache
    local via le <InlineCodeBlock>localStorage</InlineCodeBlock>.
  </p>
</BasicSlide>
