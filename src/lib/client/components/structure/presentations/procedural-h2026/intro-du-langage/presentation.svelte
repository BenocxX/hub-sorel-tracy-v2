<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Main from './main.svelte';
  import Nomenclature from './nomenclature.svelte';
  import VariablesConstantes from './variables-constantes.svelte';
  import TypesDeBase from './types-de-base.svelte';
  import Commentaires from './commentaires.svelte';

  const sections = {
    main: 'La fonction main',
    nomenclature: 'La nomenclature du langage C',
    variablesEtConstantes: 'Les variables et les constantes',
    typeDeBase: 'Les types de base',
    commentaires: 'Les commentaires',
  };

  currentPresentation.title = 'Introduction au langage C';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Main section={sections.main} />
  <Nomenclature section={sections.nomenclature} />
  <VariablesConstantes section={sections.variablesEtConstantes} />
  <TypesDeBase section={sections.typeDeBase} />
  <Commentaires section={sections.commentaires} />
</PresentationRoot>
