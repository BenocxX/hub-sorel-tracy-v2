<script lang="ts">
  import PresentationRoot from '$lib/client/components/revealjs/custom/presentation-root.svelte';
  import { currentPresentation } from '$lib/client/components/revealjs/store.svelte';
  import { initializeSlideLinks } from '$lib/client/components/revealjs/custom/utils.svelte';
  import Intro from './intro.svelte';
  import FichierDocker from './fichier-docker.svelte';
  import DockerCompose from './docker-compose.svelte';

  const sections = {
    intro: 'Introduction',
    fichierDocker: 'Le Dockerfile',
    dockerCompose: 'Le docker-compose.yml',
  };

  currentPresentation.title = 'Présentation du logiciel Docker';

  initializeSlideLinks();
</script>

<PresentationRoot>
  <Intro section={sections.intro} />
  <FichierDocker section={sections.fichierDocker} />
  <DockerCompose section={sections.dockerCompose} />
</PresentationRoot>
