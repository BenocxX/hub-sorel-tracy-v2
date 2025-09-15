<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import ErreurFatale from './erreur-fatale.svelte';
  import Approximation from './approximation.svelte';
  import Assertion from './assertion.svelte';
  import Exception from './exception.svelte';
  import Journal from './journal.svelte';
  import MessageErreur from './message-erreur.svelte';

  const sections = {
    intro: 'Introduction',
    erreurFatale: 'Erreur fatale',
    messageErreur: "Message d'erreur",
    exception: 'Exception',
    assertion: 'Assertion',
    approximation: 'Approximation',
    journal: 'Journal',
  };

  currentPresentation.title = 'Gestions des erreurs';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <ErreurFatale section={sections.erreurFatale} />
  <MessageErreur section={sections.messageErreur} />
  <Exception section={sections.exception} />
  <Assertion section={sections.assertion} />
  <Approximation section={sections.approximation} />
  <Journal section={sections.journal} />
</PresentationRoot>
