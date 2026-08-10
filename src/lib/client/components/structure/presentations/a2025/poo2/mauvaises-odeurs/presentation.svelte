<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import Bloaters from './bloaters.svelte';
  import ObjectOrientationAbusers from './object-orientation-abusers.svelte';
  import ChangePreventers from './change-preventers.svelte';
  import Dispensables from './dispensables.svelte';
  import Couplers from './couplers.svelte';

  const sections = {
    intro: 'Introduction',
    bloaters: 'Bloaters',
    objectOrientationAbusers: 'Object orientation abusers',
    changePreventers: 'Change preventers',
    dispensables: 'Dispensables',
    couplers: 'Couplers',
  };

  currentPresentation.title = 'Mauvaises odeurs';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <Bloaters section={sections.bloaters} />
  <ObjectOrientationAbusers section={sections.objectOrientationAbusers} />
  <ChangePreventers section={sections.changePreventers} />
  <Dispensables section={sections.dispensables} />
  <Couplers section={sections.couplers} />
</PresentationRoot>
