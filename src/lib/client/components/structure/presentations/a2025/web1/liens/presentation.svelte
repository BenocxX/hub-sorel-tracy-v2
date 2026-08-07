<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import UtilisationInterne from './utilisation-interne.svelte';
  import UtilisationExterne from './utilisation-externe.svelte';
  import Ancrage from './ancrage.svelte';
  import Courriel from './courriel.svelte';
  import SecuriteCourriel from './securite-courriel.svelte';
  import Styliser from './styliser.svelte';

  const sections = {
    intro: 'Introduction et sémantique',
    utilisationInterne: 'Utilisation interne',
    utilisationExterne: 'Utilisation externe',
    ancrage: 'Ancrage',
    courriel: 'Courriel',
    securiteCourriel: 'Sécurité des courriels',
    styliser: 'Styliser avec du CSS',
  };

  currentPresentation.title = 'Les liens HTML';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <UtilisationInterne section={sections.utilisationInterne} />
  <UtilisationExterne section={sections.utilisationExterne} />
  <Ancrage section={sections.ancrage} />
  <Courriel section={sections.courriel} />
  <SecuriteCourriel section={sections.securiteCourriel} />
  <Styliser section={sections.styliser} />
</PresentationRoot>
