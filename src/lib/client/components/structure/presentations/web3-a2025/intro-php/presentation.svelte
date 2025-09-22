<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import Utilisation from './utilisation.svelte';
  import Variables from './variables.svelte';
  import Condition from './condition.svelte';
  import Arrays from './arrays.svelte';
  import Json from './json.svelte';
  import PhpToJavascript from './php-to-javascript.svelte';
  import Imports from './imports.svelte';

  const sections = {
    intro: 'Introduction',
    utilisation: 'Utilisation de PHP',
    variables: 'Variables',
    condition: 'Structures conditionnelles',
    arrays: 'Tableaux',
    json: 'Utilisation de JSON',
    phpToJavascript: 'PHP vers JavaScript',
    imports: 'Imports',
  };

  currentPresentation.title = 'Introduction aux requêtes AJAX';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <Utilisation section={sections.utilisation} />
  <Variables section={sections.variables} />
  <Condition section={sections.condition} />
  <Arrays section={sections.arrays} />
  <Json section={sections.json} />
  <PhpToJavascript section={sections.phpToJavascript} />
  <Imports section={sections.imports} />
</PresentationRoot>
