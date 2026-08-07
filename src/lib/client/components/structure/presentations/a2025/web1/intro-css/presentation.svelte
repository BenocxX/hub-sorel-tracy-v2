<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import CestQuoi from './cest-quoi.svelte';
  import Liaison from './liaison.svelte';
  import Syntaxe from './syntaxe.svelte';
  import SelecteurDeBalises from './selecteur-de-balises.svelte';
  import Formatage from './formatage.svelte';
  import StyleDeBase from './style-de-base.svelte';
  import SelecteurDeClasses from './selecteur-de-classes.svelte';

  const sections = {
    cestQuoi: "Qu'est-ce que le langage CSS?",
    liaison: 'Liaison avec un document HTML',
    syntax: 'Syntaxe',
    selecteurDeBalises: 'Sélecteur de balises',
    formatage: 'Propriétés CSS de formatage',
    styleDeBase: 'Styles de base',
    selecteurDeClasses: 'Sélecteur de classes',
  };

  currentPresentation.title = 'Introduction au CSS';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <CestQuoi section={sections.cestQuoi} />
  <Liaison section={sections.liaison} />
  <Syntaxe section={sections.syntax} />
  <SelecteurDeBalises section={sections.selecteurDeBalises} />
  <Formatage section={sections.formatage} />
  <StyleDeBase section={sections.styleDeBase} />
  <SelecteurDeClasses section={sections.selecteurDeClasses} />
</PresentationRoot>
