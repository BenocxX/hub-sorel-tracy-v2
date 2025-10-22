<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Indenter from './indenter.svelte';
  import EtreCoherent from './etre-coherent.svelte';
  import EtreSemantique from './etre-semantique.svelte';
  import FormatageHtml from './formatage-html.svelte';
  import FormatageCss from './formatage-css.svelte';
  import EviterCommentaires from './eviter-commentaires.svelte';
  import UtiliserFichierCss from './utiliser-fichier-css.svelte';
  import UtiliserValidateurs from './utiliser-validateurs.svelte';

  const sections = {
    indenter: 'Indenter votre code',
    formatageHtml: 'Formatage du code HTML',
    formatageCss: 'Formatage du code CSS',
    etreCoherent: 'Être cohérent dans votre code',
    etreSemantique: 'Être sémantique',
    eviterCommentairesHtml: 'Éviter les commentaires dans le HTML',
    utiliserFichiersCssExternes: 'Utiliser des fichiers CSS externes',
    utiliserValidateursOfficiels: 'Utiliser des validateurs officiels',
  };

  currentPresentation.title = 'Bien coder votre HTML et CSS';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Indenter section={sections.indenter} />
  <FormatageHtml section={sections.formatageHtml} />
  <FormatageCss section={sections.formatageCss} />
  <EtreCoherent section={sections.etreCoherent} />
  <EtreSemantique section={sections.etreSemantique} />
  <EviterCommentaires section={sections.eviterCommentairesHtml} />
  <UtiliserFichierCss section={sections.utiliserFichiersCssExternes} />
  <UtiliserValidateurs section={sections.utiliserValidateursOfficiels} />
</PresentationRoot>
